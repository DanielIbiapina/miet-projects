import { useState } from "react";
import { useNavigate } from "react-router";
import { getBACRange } from "../utils/mockData";
import { BottomNav } from "../components/BottomNav";
import {
  Container,
  SafeArea,
  Header,
  HeaderTitle,
  Content,
  NightCard,
  NightHeader,
  NightDate,
  NightStats,
  NightStat,
  NightStatLabel,
  NightStatValue,
  ChartSection,
  LineChart,
  ChartSVG,
  ChartLine,
  ChartPoint,
  ChartAxis,
  ChartLabel,
  EmptyState,
  EmptyIcon,
  EmptyText,
} from "./styles";

export function meta() {
  return [
    { title: "History - Omni Feeling" },
    {
      name: "description",
      content: "View your measurement history",
    },
  ];
}

export default function HistoryScreen() {
  const navigate = useNavigate();
  const [nights] = useState(() => {
    const saved = localStorage.getItem("nightHistory");
    return saved ? JSON.parse(saved) : [];
  });

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatShortTime = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  };

  const getMaxBAC = (readings) => {
    return Math.max(...readings.map((r) => r.bac || 0), 0.1);
  };

  const getAverageBAC = (readings) => {
    if (readings.length === 0) return 0;
    const sum = readings.reduce((acc, r) => acc + r.bac, 0);
    return (sum / readings.length).toFixed(3);
  };

  const getPeakBAC = (readings) => {
    if (readings.length === 0) return 0;
    return Math.max(...readings.map((r) => r.bac)).toFixed(3);
  };

  return (
    <Container>
      <SafeArea>
        <Header>
          <HeaderTitle>History</HeaderTitle>
        </Header>

        <Content>
          {nights.length === 0 ? (
            <EmptyState>
              <EmptyIcon>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </EmptyIcon>
              <EmptyText>No history yet</EmptyText>
              <EmptyText
                style={{
                  fontSize: "0.875rem",
                  opacity: 0.7,
                  marginTop: "0.5rem",
                }}
              >
                Completed nights will appear here
              </EmptyText>
            </EmptyState>
          ) : (
            nights.map((night) => {
              const sortedReadings = [...night.readings].sort(
                (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
              );
              const maxBAC = getMaxBAC(sortedReadings);
              const chartHeight = 150;
              const chartWidth = Math.max(400, sortedReadings.length * 50);
              const padding = 40;

              return (
                <NightCard key={night.id}>
                  <NightHeader>
                    <NightDate>{formatDate(night.date)}</NightDate>
                    <NightStats>
                      <NightStat>
                        <NightStatLabel>Readings</NightStatLabel>
                        <NightStatValue>{sortedReadings.length}</NightStatValue>
                      </NightStat>
                      <NightStat>
                        <NightStatLabel>Peak BAC</NightStatLabel>
                        <NightStatValue>
                          {getPeakBAC(sortedReadings)}
                        </NightStatValue>
                      </NightStat>
                      <NightStat>
                        <NightStatLabel>Avg BAC</NightStatLabel>
                        <NightStatValue>
                          {getAverageBAC(sortedReadings)}
                        </NightStatValue>
                      </NightStat>
                    </NightStats>
                  </NightHeader>

                  <ChartSection>
                    <LineChart>
                      <ChartSVG
                        viewBox={`0 0 ${chartWidth} ${chartHeight + padding * 2}`}
                        preserveAspectRatio="xMidYMid meet"
                      >
                        {/* Grid lines */}
                        {[0, 0.25, 0.5, 0.75, 1.0].map((val) => {
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
                        {sortedReadings.length > 1 && (
                          <ChartLine
                            points={sortedReadings
                              .map((reading, index) => {
                                const x =
                                  padding +
                                  (index * (chartWidth - padding * 2)) /
                                    (sortedReadings.length - 1);
                                const y =
                                  chartHeight +
                                  padding -
                                  (reading.bac * chartHeight) / maxBAC;
                                return `${x},${y}`;
                              })
                              .join(" ")}
                            stroke={getLevelColor(
                              sortedReadings[sortedReadings.length - 1].level
                            )}
                            fill="none"
                            strokeWidth="3"
                          />
                        )}

                        {/* Data points */}
                        {sortedReadings.map((reading, index) => {
                          const x =
                            padding +
                            (index * (chartWidth - padding * 2)) /
                              Math.max(sortedReadings.length - 1, 1);
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
                        {sortedReadings.map((reading, index) => {
                          const x =
                            padding +
                            (index * (chartWidth - padding * 2)) /
                              Math.max(sortedReadings.length - 1, 1);
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
                  </ChartSection>
                </NightCard>
              );
            })
          )}
        </Content>

        <BottomNav />
      </SafeArea>
    </Container>
  );
}
