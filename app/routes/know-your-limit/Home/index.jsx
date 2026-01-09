import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import {
  mockUser,
  mockStickerDevice,
  simulatePassiveMeasurement,
  calculateProjection,
  getBACRange,
} from "../utils/mockData";
import { BottomNav } from "../components/BottomNav";
import {
  Container,
  SafeArea,
  Header,
  HeaderTop,
  UserGreeting,
  UserName,
  DeviceStatus,
  StatusIndicator,
  StatusText,
  StatusDot,
  MainContent,
  CurrentStatusCard,
  StatusHeader,
  StatusTitle,
  StatusValue,
  StatusLabel,
  StatusBadge,
  ChartSection,
  ChartTitle,
  ChartContainer,
  LineChart,
  ChartSVG,
  ChartLine,
  ChartPoint,
  ChartAxis,
  ChartLabel,
  ProjectionCard,
  ProjectionTitle,
  ProjectionValue,
  ProjectionLabel,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  RecentReadings,
  ReadingsTitle,
  ReadingsList,
  ReadingItem,
  ReadingTime,
  ReadingBAC,
  ReadingLevel,
  EmptyState,
  EmptyText,
  SimulateButton,
  WarningBanner,
  WarningText,
  WarningActions,
  WarningButton,
  Toast,
} from "./styles";

export function meta() {
  return [
    { title: "Omni Feeling" },
    {
      name: "description",
      content: "Omni Feeling - Phone sticker-based alcohol awareness service",
    },
  ];
}

export default function HomeScreen() {
  const navigate = useNavigate();
  const [deviceStatus, setDeviceStatus] = useState(
    mockStickerDevice.isAttached
  );
  const [readings, setReadings] = useState(() => {
    const saved = localStorage.getItem("nightReadings");
    return saved ? JSON.parse(saved) : [];
  });
  const [lastReading, setLastReading] = useState(null);
  const [projection, setProjection] = useState(null);
  const [measurementCount, setMeasurementCount] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showWarning, setShowWarning] = useState(null);
  const [showNightComplete, setShowNightComplete] = useState(false);
  const simulationIntervalRef = useRef(null);

  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem(
      "hasCompletedOnboarding"
    );
    const stickerActivated = localStorage.getItem("stickerActivated");

    if (!hasCompletedOnboarding) {
      navigate("/know-your-limit/onboarding", { replace: true });
      return;
    }

    if (!stickerActivated) {
      navigate("/know-your-limit/activate-sticker", { replace: true });
      return;
    }

    // Verificar se havia simulação rodando e continuar
    const keepRunning = localStorage.getItem("keepSimulationRunning");
    if (keepRunning === "true" && readings.length > 0 && !isSimulating) {
      // Remover flag
      localStorage.removeItem("keepSimulationRunning");
      // Continuar simulação - recriar o intervalo
      setIsSimulating(true);
      const savedProfile = localStorage.getItem("userProfile");
      const userProfile = savedProfile
        ? JSON.parse(savedProfile)
        : mockUser.profile;

      let currentReadings = [...readings];
      const startTime = new Date();
      startTime.setHours(20, 0, 0, 0);

      // Calcular índice baseado no número de readings existentes
      let measurementIndex = currentReadings.length;
      const intervals = [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 35, 40];

      const addMeasurement = () => {
        if (measurementIndex >= intervals.length) {
          // Simulação terminou
          const nightData = {
            id: `night_${Date.now()}`,
            date: startTime.toISOString().split("T")[0],
            readings: [...currentReadings],
            createdAt: new Date().toISOString(),
          };

          const savedNights = localStorage.getItem("nightHistory");
          const nights = savedNights ? JSON.parse(savedNights) : [];
          nights.unshift(nightData);
          localStorage.setItem("nightHistory", JSON.stringify(nights));

          setReadings([]);
          setLastReading(null);
          setProjection(null);
          localStorage.removeItem("nightReadings");
          setIsSimulating(false);

          if (simulationIntervalRef.current) {
            clearInterval(simulationIntervalRef.current);
            simulationIntervalRef.current = null;
          }

          setTimeout(() => {
            setShowNightComplete(true);
            setTimeout(() => {
              setShowNightComplete(false);
            }, 4000);
          }, 500);
          return;
        }

        const timestamp = new Date(startTime);
        timestamp.setMinutes(
          startTime.getMinutes() +
            intervals.slice(0, measurementIndex + 1).reduce((a, b) => a + b, 0)
        );

        const newReading = simulatePassiveMeasurement(
          userProfile,
          currentReadings
        );
        newReading.timestamp = timestamp.toISOString();

        currentReadings = [...currentReadings, newReading];
        setReadings(currentReadings);
        localStorage.setItem("nightReadings", JSON.stringify(currentReadings));

        measurementIndex++;
      };

      // Continuar adicionando medições
      simulationIntervalRef.current = setInterval(() => {
        addMeasurement();
      }, 4000);
    }
  }, [navigate, readings.length, isSimulating]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeviceStatus(mockStickerDevice.isAttached);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (readings.length > 0) {
      const sorted = [...readings].sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      setLastReading(sorted[0]);
      setMeasurementCount(readings.length);

      const proj = calculateProjection(readings);
      setProjection(proj);

      // Verificar se precisa mostrar avisos (só quando realmente necessário)
      const currentBAC = sorted[0].bac;
      // Em Portugal, limite legal é 0.05 BAC
      if (currentBAC >= 0.1) {
        setShowWarning({
          type: "high",
          message:
            "Your BAC level is significantly elevated. Do not drive. Arrange safe transportation immediately.",
        });
      } else if (currentBAC >= 0.08) {
        setShowWarning({
          type: "moderate",
          message:
            "Your BAC level is above legal driving limit. Plan your safe ride home now.",
        });
      } else if (currentBAC >= 0.05 && currentBAC < 0.08) {
        // Mostrar aviso preventivo quando está no limite
        setShowWarning({
          type: "moderate",
          message:
            "Your BAC is approaching the legal limit. Consider arranging transportation.",
        });
      } else if (currentBAC < 0.05) {
        // Remover aviso se BAC baixou abaixo do limite
        setShowWarning(null);
      }
    }
  }, [readings]);

  const handleSimulateNight = () => {
    if (isSimulating) {
      // Parar simulação
      if (simulationIntervalRef.current) {
        clearInterval(simulationIntervalRef.current);
        simulationIntervalRef.current = null;
      }
      setIsSimulating(false);
      localStorage.removeItem("keepSimulationRunning");
      return;
    }

    setIsSimulating(true);
    const savedProfile = localStorage.getItem("userProfile");
    const userProfile = savedProfile
      ? JSON.parse(savedProfile)
      : mockUser.profile;

    let currentReadings = [...readings];
    const startTime = new Date();
    startTime.setHours(20, 0, 0, 0);

    let measurementIndex = 0;
    const intervals = [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 35, 40]; // minutos

    const addMeasurement = () => {
      if (measurementIndex >= intervals.length) {
        // Simulação terminou - salvar noite completa no History
        const nightData = {
          id: `night_${Date.now()}`,
          date: startTime.toISOString().split("T")[0],
          readings: [...currentReadings],
          createdAt: new Date().toISOString(),
        };

        // Salvar no History
        const savedNights = localStorage.getItem("nightHistory");
        const nights = savedNights ? JSON.parse(savedNights) : [];
        nights.unshift(nightData); // Adicionar no início
        localStorage.setItem("nightHistory", JSON.stringify(nights));

        // Limpar readings atuais e avançar para próximo dia
        setReadings([]);
        setLastReading(null);
        setProjection(null);
        localStorage.removeItem("nightReadings");

        setIsSimulating(false);
        if (simulationIntervalRef.current) {
          clearInterval(simulationIntervalRef.current);
          simulationIntervalRef.current = null;
        }

        // Mostrar mensagem de noite encerrada
        setTimeout(() => {
          setShowNightComplete(true);
          setTimeout(() => {
            setShowNightComplete(false);
          }, 4000);
        }, 500);
        return;
      }

      const timestamp = new Date(startTime);
      timestamp.setMinutes(
        startTime.getMinutes() +
          intervals.slice(0, measurementIndex + 1).reduce((a, b) => a + b, 0)
      );

      const newReading = simulatePassiveMeasurement(
        userProfile,
        currentReadings
      );
      newReading.timestamp = timestamp.toISOString();

      currentReadings = [...currentReadings, newReading];
      setReadings(currentReadings);
      localStorage.setItem("nightReadings", JSON.stringify(currentReadings));

      measurementIndex++;
    };

    // Primeira medição imediata
    addMeasurement();

    // Adicionar medições a cada ~2 segundos (simulação acelerada)
    simulationIntervalRef.current = setInterval(() => {
      addMeasurement();
    }, 4000);
  };

  const handleRequestRide = () => {
    // Simular abertura de app de transporte
    // Em produção, poderia abrir Uber, Bolt, ou outro app de transporte
    const rideApps = [
      "https://www.uber.com",
      "https://www.bolt.eu",
      "https://www.cabify.com",
    ];
    const randomApp = rideApps[Math.floor(Math.random() * rideApps.length)];
    window.open(randomApp, "_blank");
    // Não remover o aviso imediatamente - deixar o usuário ver que a ação foi tomada
    setTimeout(() => {
      setShowWarning(null);
    }, 2000);
  };

  const handleNotifyContact = () => {
    // Salvar flag para indicar que simulação deve continuar
    if (isSimulating) {
      localStorage.setItem("keepSimulationRunning", "true");
    }

    navigate("/know-your-limit/trusted-contact", {
      state: {
        level: lastReading?.level,
        bac: lastReading?.bac,
        timestamp: lastReading?.timestamp,
      },
    });
  };

  const handleShareResults = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "My Alcohol Level",
          text: `Current BAC: ${lastReading?.bac.toFixed(3)}% (${lastReading?.level})`,
        })
        .catch(() => {});
    } else {
      // Fallback: copiar para clipboard
      navigator.clipboard.writeText(
        `Current BAC: ${lastReading?.bac.toFixed(3)}% (${lastReading?.level})`
      );
      alert("Results copied to clipboard");
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Low":
        return "#10b981";
      case "Low-Moderate":
        return "#84cc16";
      case "Moderate":
        return "#f59e0b";
      case "Moderate-High":
        return "#f97316";
      case "High":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatShortTime = (timestamp) => {
    const date = new Date(timestamp);
    return formatTime(timestamp);
  };

  // Preparar dados para gráfico de linha
  const chartReadings = readings
    .slice(-8)
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  const maxBAC = Math.max(...chartReadings.map((r) => r.bac || 0), 0.3);
  const chartHeight = 180;
  const chartWidth = Math.max(400, chartReadings.length * 50);
  const padding = 40;

  const recentReadings = readings.slice(-3).reverse();

  return (
    <Container>
      <SafeArea>
        <Header>
          <HeaderTop>
            <div>
              <UserGreeting>Monitoring Active</UserGreeting>
              <UserName>{mockUser.name}</UserName>
            </div>
            <DeviceStatus>
              <StatusIndicator $connected={deviceStatus}>
                <StatusDot $connected={deviceStatus} />
                <StatusText>{deviceStatus ? "Active" : "Inactive"}</StatusText>
              </StatusIndicator>
            </DeviceStatus>
          </HeaderTop>
        </Header>

        <MainContent>
          {showNightComplete && (
            <Toast>
              <span>✓</span>
              <span>
                Night completed! Data saved to history. Starting new day.
              </span>
            </Toast>
          )}

          {!readings.length && (
            <SimulateButton
              onClick={handleSimulateNight}
              $isSimulating={isSimulating}
            >
              {isSimulating ? "Simulating Night..." : "Simulate Night (Demo)"}
            </SimulateButton>
          )}

          {showWarning && (
            <WarningBanner $type={showWarning.type}>
              <WarningText>{showWarning.message}</WarningText>
              <WarningActions>
                <WarningButton onClick={handleRequestRide} $primary>
                  Request Ride
                </WarningButton>
                <WarningButton onClick={handleNotifyContact}>
                  Notify Contact
                </WarningButton>
              </WarningActions>
            </WarningBanner>
          )}

          {lastReading ? (
            <>
              <CurrentStatusCard>
                <StatusHeader>
                  <StatusTitle>Current Status</StatusTitle>
                  <StatusBadge $color={getLevelColor(lastReading.level)}>
                    {lastReading.level}
                  </StatusBadge>
                </StatusHeader>
                <StatusValue $color={getLevelColor(lastReading.level)}>
                  {lastReading.bac.toFixed(3)}%
                </StatusValue>
                <StatusLabel>Blood Alcohol Content</StatusLabel>
                <StatusLabel
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.875rem",
                    opacity: 0.7,
                  }}
                >
                  Last reading: {formatTime(lastReading.timestamp)}
                </StatusLabel>
                <WarningButton
                  onClick={handleShareResults}
                  style={{ marginTop: "1rem", width: "100%" }}
                  $primary
                >
                  Share Results
                </WarningButton>
              </CurrentStatusCard>

              {chartReadings.length > 0 && (
                <ChartSection>
                  <ChartTitle>Tonight's Progression</ChartTitle>
                  <ChartContainer>
                    <LineChart>
                      <ChartSVG
                        viewBox={`0 0 ${chartWidth} ${chartHeight + padding * 2}`}
                        preserveAspectRatio="xMidYMid meet"
                      >
                        {/* Grid lines */}
                        {[0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3].map((val) => {
                          const y =
                            chartHeight +
                            padding -
                            (val * chartHeight) / maxBAC;
                          return (
                            <line
                              key={val}
                              x1={padding}
                              y1={y}
                              x2={chartWidth - padding}
                              y2={y}
                              stroke="#e5e7eb"
                              strokeWidth="1"
                              strokeDasharray="2,2"
                            />
                          );
                        })}

                        {/* Data line */}
                        {chartReadings.length > 1 && (
                          <ChartLine
                            points={chartReadings
                              .map((reading, index) => {
                                const x =
                                  padding +
                                  (index * (chartWidth - padding * 2)) /
                                    (chartReadings.length - 1);
                                const y =
                                  chartHeight +
                                  padding -
                                  (reading.bac * chartHeight) / maxBAC;
                                return `${x},${y}`;
                              })
                              .join(" ")}
                            stroke={getLevelColor(
                              chartReadings[chartReadings.length - 1].level
                            )}
                            fill="none"
                            strokeWidth="3"
                          />
                        )}

                        {/* Data points */}
                        {chartReadings.map((reading, index) => {
                          const x =
                            padding +
                            (index * (chartWidth - padding * 2)) /
                              Math.max(chartReadings.length - 1, 1);
                          const y =
                            chartHeight +
                            padding -
                            (reading.bac * chartHeight) / maxBAC;
                          return (
                            <ChartPoint
                              key={reading.id || index}
                              cx={x}
                              cy={y}
                              r="5"
                              fill={getLevelColor(reading.level)}
                              stroke="#ffffff"
                              strokeWidth="2"
                            />
                          );
                        })}

                        {/* Time labels */}
                        {chartReadings.map((reading, index) => {
                          const x =
                            padding +
                            (index * (chartWidth - padding * 2)) /
                              Math.max(chartReadings.length - 1, 1);
                          return (
                            <text
                              key={`label-${index}`}
                              x={x}
                              y={chartHeight + padding + 20}
                              textAnchor="middle"
                              fontSize="10"
                              fill="#6b7280"
                            >
                              {formatShortTime(reading.timestamp)}
                            </text>
                          );
                        })}
                      </ChartSVG>
                    </LineChart>
                  </ChartContainer>
                </ChartSection>
              )}

              {projection && (
                <ProjectionCard>
                  <ProjectionTitle>Sobriety Estimate</ProjectionTitle>
                  {projection.canDriveNow ? (
                    <>
                      <ProjectionValue
                        $color="#10b981"
                        style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
                      >
                        You can drive now
                      </ProjectionValue>
                      <ProjectionLabel style={{ marginBottom: "0.5rem" }}>
                        Your BAC is below the legal limit (0.05%)
                      </ProjectionLabel>
                    </>
                  ) : (
                    <>
                      <ProjectionLabel
                        style={{ marginBottom: "1rem", fontSize: "0.9375rem" }}
                      >
                        If you stop drinking now and stay hydrated:
                      </ProjectionLabel>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.75rem",
                        }}
                      >
                        <div>
                          <ProjectionLabel
                            style={{
                              fontSize: "0.875rem",
                              opacity: 0.9,
                              marginBottom: "0.25rem",
                            }}
                          >
                            Safe to drive at:
                          </ProjectionLabel>
                          <ProjectionValue
                            $color="#f59e0b"
                            style={{ fontSize: "1.75rem" }}
                          >
                            {formatTime(projection.driveTime)}
                          </ProjectionValue>
                        </div>
                        <div>
                          <ProjectionLabel
                            style={{
                              fontSize: "0.875rem",
                              opacity: 0.9,
                              marginBottom: "0.25rem",
                            }}
                          >
                            Completely sober at:
                          </ProjectionLabel>
                          <ProjectionValue
                            $color="#10b981"
                            style={{ fontSize: "1.75rem" }}
                          >
                            {formatTime(projection.soberTime)}
                          </ProjectionValue>
                        </div>
                      </div>
                    </>
                  )}
                </ProjectionCard>
              )}

              <StatsGrid>
                <StatCard>
                  <StatValue>{measurementCount}</StatValue>
                  <StatLabel>Readings</StatLabel>
                </StatCard>
                <StatCard>
                  <StatValue>{getBACRange(lastReading.bac).label}</StatValue>
                  <StatLabel>Current Range</StatLabel>
                </StatCard>
                <StatCard>
                  <StatValue>
                    {lastReading.location.address.split(",")[0]}
                  </StatValue>
                  <StatLabel>Location</StatLabel>
                </StatCard>
              </StatsGrid>

              {recentReadings.length > 0 && (
                <RecentReadings>
                  <ReadingsTitle>Recent Readings</ReadingsTitle>
                  <ReadingsList>
                    {recentReadings.map((reading) => (
                      <ReadingItem key={reading.id}>
                        <ReadingTime>
                          {formatTime(reading.timestamp)}
                        </ReadingTime>
                        <ReadingBAC $color={getLevelColor(reading.level)}>
                          {reading.bac.toFixed(3)}%
                        </ReadingBAC>
                        <ReadingLevel $color={getLevelColor(reading.level)}>
                          {reading.level}
                        </ReadingLevel>
                      </ReadingItem>
                    ))}
                  </ReadingsList>
                </RecentReadings>
              )}

              {readings.length > 0 && (
                <SimulateButton
                  onClick={handleSimulateNight}
                  $isSimulating={isSimulating}
                >
                  {isSimulating ? "Simulating..." : "Continue Simulation"}
                </SimulateButton>
              )}
            </>
          ) : (
            <EmptyState>
              <EmptyText>No readings yet</EmptyText>
              <EmptyText
                style={{
                  fontSize: "0.875rem",
                  opacity: 0.7,
                  marginTop: "0.5rem",
                }}
              >
                Measurements will appear automatically as you use your phone
              </EmptyText>
            </EmptyState>
          )}
        </MainContent>
        <BottomNav />
      </SafeArea>
    </Container>
  );
}
