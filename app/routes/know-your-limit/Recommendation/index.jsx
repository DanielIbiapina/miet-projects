import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { getRecommendations, mockLocation } from "../utils/mockData";
import {
  Container,
  SafeArea,
  Header,
  BackButton,
  HeaderTitle,
  Content,
  WarningBanner,
  WarningIcon,
  WarningText,
  TimerBanner,
  TimerText,
  TimerValue,
  RecommendationsCard,
  CardTitle,
  RecommendationsList,
  RecommendationItem,
  ItemIcon,
  ItemContent,
  ItemTitle,
  ItemDescription,
  PriorityBadge,
  ActionsSection,
  PrimaryAction,
  SecondaryAction,
  ActionText,
  ActionSubtext,
} from "./styles";

export function meta() {
  return [
    { title: "Recommendations - Omni Feeling" },
    {
      name: "description",
      content: "Safety recommendations based on your level",
    },
  ];
}

export default function RecommendationScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const level = location.state?.level || "Moderate";
  const bac = location.state?.bac || 0.05;
  const [warningShown, setWarningShown] = useState(false);
  const [timer, setTimer] = useState(30);
  const [userResponded, setUserResponded] = useState(false);

  const recommendations = getRecommendations(level, bac);

  useEffect(() => {
    // Timer para detectar se usuário ignora recomendações (apenas para Moderate e High)
    if ((level === "High" || level === "Moderate") && !userResponded) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setWarningShown(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [level, userResponded]);

  useEffect(() => {
    // Se timer chegou a 0 e warning foi mostrado, navegar para emergência
    if (timer === 0 && warningShown && !userResponded) {
      const timeout = setTimeout(() => {
        navigate("/know-your-limit/emergency");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [timer, warningShown, userResponded, navigate]);

  const handleBookRide = () => {
    setUserResponded(true);
    // Simular integração com app de transporte
    window.open("https://www.uber.com", "_blank");
    // Após um delay, voltar para home
    setTimeout(() => {
      navigate("/know-your-limit");
    }, 2000);
  };

  const handleImSafe = () => {
    setUserResponded(true);
    setTimer(30);
    setWarningShown(false);
    // Registrar resposta do usuário (mock)
    console.log("User confirmed safety at", new Date().toISOString());
    navigate("/know-your-limit");
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return "#ef4444";
      case "high":
        return "#f59e0b";
      case "medium":
        return "#3b82f6";
      default:
        return "#6b7280";
    }
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
          <HeaderTitle>Recommendations</HeaderTitle>
          <div style={{ width: "24px" }} />
        </Header>

        <Content>
          {warningShown && !userResponded && (
            <WarningBanner>
              <WarningIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </WarningIcon>
              <WarningText>
                No response detected. Safety protocol will be activated in 3 seconds...
              </WarningText>
            </WarningBanner>
          )}

          {timer < 30 && timer > 0 && !userResponded && (
            <TimerBanner>
              <TimerText>Safety check in:</TimerText>
              <TimerValue>{timer}s</TimerValue>
            </TimerBanner>
          )}

          <RecommendationsCard>
            <CardTitle>Safety Recommendations</CardTitle>
            <RecommendationsList>
              {recommendations.map((rec) => (
                <RecommendationItem key={rec.id}>
                  <ItemIcon $priority={rec.priority}>
                    {rec.iconType === "water" ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      </svg>
                    ) : rec.iconType === "food" ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                    ) : rec.iconType === "clock" ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    ) : rec.iconType === "stop" ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="6" width="12" height="12" rx="2"/>
                      </svg>
                    ) : rec.iconType === "car" ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                        <polygon points="12 15 17 21 7 21 12 15"/>
                      </svg>
                    ) : rec.iconType === "no" ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                      </svg>
                    ) : rec.iconType === "people" ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    ) : rec.iconType === "phone" ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    ) : null}
                  </ItemIcon>
                  <ItemContent>
                    <ItemTitle>{rec.title}</ItemTitle>
                    <ItemDescription>{rec.description}</ItemDescription>
                  </ItemContent>
                  <PriorityBadge $color={getPriorityColor(rec.priority)}>
                    {rec.priority}
                  </PriorityBadge>
                </RecommendationItem>
              ))}
            </RecommendationsList>
          </RecommendationsCard>

          <ActionsSection>
            <PrimaryAction onClick={handleBookRide}>
              <ActionText>I'm Safe – Book Ride</ActionText>
              <ActionSubtext>Open ride-sharing app</ActionSubtext>
            </PrimaryAction>
            <SecondaryAction onClick={handleImSafe}>
              <div style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#1f2937", textAlign: "center", marginBottom: "0.25rem" }}>
                I'm Safe
              </div>
              <div style={{ fontSize: "0.8125rem", color: "#6b7280", textAlign: "center", fontWeight: 400 }}>
                Confirm and return to monitoring
              </div>
            </SecondaryAction>
          </ActionsSection>
        </Content>
      </SafeArea>
    </Container>
  );
}
