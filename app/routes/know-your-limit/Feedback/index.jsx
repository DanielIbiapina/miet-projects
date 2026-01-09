import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { mockLocation } from "../utils/mockData";
import {
  Container,
  SafeArea,
  Header,
  BackButton,
  HeaderTitle,
  FeedbackContainer,
  LevelCard,
  LevelBadge,
  BACValue,
  BACLabel,
  ExplanationCard,
  ExplanationTitle,
  ExplanationText,
  LocationInfo,
  LocationIcon,
  LocationText,
  LocationAddress,
  ContinueButton,
  ButtonText,
} from "./styles";

export function meta() {
  return [
    { title: "Your Level - Omni Feeling" },
    {
      name: "description",
      content: "Your current alcohol level reading",
    },
  ];
}

export default function FeedbackScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const level = location.state?.level || "Moderate";
  const bac = location.state?.bac || 0.05;
  const timestamp = location.state?.timestamp || new Date().toISOString();

  const getLevelConfig = (level) => {
    switch (level) {
      case "Low":
        return {
          color: "#10b981",
          bgColor: "#f0fdf4",
          borderColor: "#86efac",
          text: "Low",
          description: "You are within safe limits. Continue to drink responsibly and stay hydrated.",
          recommendation: "Maintain your current pace and remember to drink water between alcoholic beverages.",
        };
      case "Low-Moderate":
        return {
          color: "#84cc16",
          bgColor: "#f7fee7",
          borderColor: "#bef264",
          text: "Low-Moderate",
          description: "Your alcohol level is increasing. Consider slowing down and staying hydrated.",
          recommendation: "Drink water regularly and pace yourself. Consider eating food to slow absorption.",
        };
      case "Moderate":
        return {
          color: "#f59e0b",
          bgColor: "#fffbeb",
          borderColor: "#fcd34d",
          text: "Moderate",
          description: "Your blood alcohol level is moderate. Consider slowing down and increasing water intake.",
          recommendation: "You should reduce your drinking pace, eat food, and arrange for safe transportation home.",
        };
      case "Moderate-High":
        return {
          color: "#f97316",
          bgColor: "#fff7ed",
          borderColor: "#fdba74",
          text: "Moderate-High",
          description: "Your alcohol level is elevated. You should consider stopping and taking safety measures.",
          recommendation: "Stop drinking for now, hydrate immediately, and arrange for safe transportation. Do not drive.",
        };
      case "High":
        return {
          color: "#ef4444",
          bgColor: "#fef2f2",
          borderColor: "#fca5a5",
          text: "High",
          description: "Your blood alcohol level is elevated. Stop drinking immediately and take safety measures.",
          recommendation: "You are legally impaired. Do not drive. Stop drinking, hydrate, and arrange for safe transportation immediately.",
        };
      default:
        return {
          color: "#f59e0b",
          bgColor: "#fffbeb",
          borderColor: "#fcd34d",
          text: "Moderate",
          description: "Your alcohol level is moderate. Consider slowing down.",
          recommendation: "Slow down and drink water.",
        };
    }
  };

  const config = getLevelConfig(level);

  const handleContinue = () => {
    navigate("/know-your-limit/recommendation", {
      state: { level, bac, timestamp }
    });
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <Container>
      <SafeArea>
        <Header>
          <BackButton onClick={() => navigate("/know-your-limit")}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </BackButton>
          <HeaderTitle>Your Level</HeaderTitle>
          <div style={{ width: "24px" }} />
        </Header>

        <FeedbackContainer>
          <LevelCard $bgColor={config.bgColor} $borderColor={config.borderColor}>
            <LevelBadge $color={config.color}>
              {config.text}
            </LevelBadge>
            <BACValue>{(bac || 0).toFixed(3)}%</BACValue>
            <BACLabel>BAC Level</BACLabel>
            <BACLabel style={{ marginTop: "0.5rem", fontSize: "0.875rem", opacity: 0.7 }}>
              Measured at {formatTime(timestamp)}
            </BACLabel>
          </LevelCard>

          <ExplanationCard>
            <ExplanationTitle>What this means</ExplanationTitle>
            <ExplanationText>{config.description}</ExplanationText>
            <ExplanationText style={{ marginTop: "1rem", fontWeight: 500 }}>
              {config.recommendation}
            </ExplanationText>
          </ExplanationCard>

          <LocationInfo>
            <LocationIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </LocationIcon>
            <LocationText>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>Location</div>
              <LocationAddress>{mockLocation.address}</LocationAddress>
            </LocationText>
          </LocationInfo>

          <ContinueButton onClick={handleContinue} $color={config.color}>
            <ButtonText>View Recommendations</ButtonText>
          </ContinueButton>
        </FeedbackContainer>
      </SafeArea>
    </Container>
  );
}
