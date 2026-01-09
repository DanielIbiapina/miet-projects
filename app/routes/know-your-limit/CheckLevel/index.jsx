import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { simulateMeasurement, mockStickerDevice } from "../utils/mockData";
import {
  Container,
  SafeArea,
  Header,
  BackButton,
  HeaderTitle,
  MeasurementContainer,
  DeviceInfo,
  DeviceName,
  DeviceStatus,
  ProgressContainer,
  ProgressCircle,
  ProgressText,
  ProgressLabel,
  StatusMessage,
  StatusIcon,
  StatusText,
  MeasuringText,
  LoadingDots,
} from "./styles";

export function meta() {
  return [
    { title: "Measuring - Omni Feeling" },
    {
      name: "description",
      content: "Measuring your current alcohol level",
    },
  ];
}

export default function CheckLevelScreen() {
  const navigate = useNavigate();
  const [isMeasuring, setIsMeasuring] = useState(true);
  const [progress, setProgress] = useState(0);
  const [measurement, setMeasurement] = useState(null);

  useEffect(() => {
    // Simular progresso da medição
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Após 2.5 segundos, finalizar medição
    const measurementTimer = setTimeout(() => {
      const result = simulateMeasurement();
      setMeasurement(result);
      setIsMeasuring(false);
      setProgress(100);

      // Navegar para feedback após mostrar resultado brevemente
      setTimeout(() => {
        navigate("/know-your-limit/feedback", {
          state: { 
            level: result.level,
            bac: result.bac,
            timestamp: result.timestamp
          }
        });
      }, 1500);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(measurementTimer);
    };
  }, [navigate]);

  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Container>
      <SafeArea>
        <Header>
          <BackButton onClick={() => navigate("/know-your-limit")}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </BackButton>
          <HeaderTitle>Measuring</HeaderTitle>
          <div style={{ width: "24px" }} />
        </Header>

        <MeasurementContainer>
          <DeviceInfo>
            <DeviceName>{mockStickerDevice.name}</DeviceName>
            <DeviceStatus>
              Status: {mockStickerDevice.isAttached ? "Attached & Active" : "Not Attached"}
            </DeviceStatus>
          </DeviceInfo>

          <ProgressContainer>
            <ProgressCircle>
              <svg width="160" height="160" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  transform="rotate(-90 80 80)"
                  style={{ transition: "stroke-dashoffset 0.1s ease" }}
                />
              </svg>
              <ProgressText>
                {isMeasuring ? `${progress}%` : measurement ? `${measurement.bac.toFixed(3)}` : "0.000"}
              </ProgressText>
              <ProgressLabel>
                {isMeasuring ? "Measuring..." : "BAC Level"}
              </ProgressLabel>
            </ProgressCircle>
          </ProgressContainer>

          {isMeasuring ? (
            <>
              <StatusIcon>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                </svg>
              </StatusIcon>
              <MeasuringText>
                Analyzing sensor data from your wearable device
              </MeasuringText>
              <LoadingDots>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </LoadingDots>
            </>
          ) : (
            measurement && (
              <>
                <StatusIcon>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </StatusIcon>
                <StatusMessage>
                  Measurement complete
                </StatusMessage>
                <StatusText>
                  Level: {measurement.level}
                </StatusText>
              </>
            )
          )}
        </MeasurementContainer>
      </SafeArea>
    </Container>
  );
}
