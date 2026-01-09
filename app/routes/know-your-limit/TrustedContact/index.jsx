import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { mockTrustedContacts, mockLocation } from "../utils/mockData";
import {
  Container,
  SafeArea,
  Header,
  BackButton,
  HeaderTitle,
  Content,
  ContactCard,
  SendingState,
  SendingIcon,
  SendingTitle,
  SendingMessage,
  SuccessState,
  SuccessIcon,
  SuccessTitle,
  SuccessMessage,
  ContactInfo,
  ContactHeader,
  ContactName,
  ContactPhone,
  LocationCard,
  LocationHeader,
  LocationAddress,
  LocationCoordinates,
  MessagePreview,
  PreviewTitle,
  PreviewText,
  ActionButton,
  ButtonText,
} from "./styles";

export function meta() {
  return [
    { title: "Notify Contact - Omni Feeling" },
    {
      name: "description",
      content: "Notify your trusted contact",
    },
  ];
}

export default function TrustedContactScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [messageSent, setMessageSent] = useState(false);
  const [sendingProgress, setSendingProgress] = useState(0);

  // Pegar dados do state ou usar defaults
  const level = location.state?.level || "Moderate";
  const bac = location.state?.bac || 0.05;
  const timestamp = location.state?.timestamp || new Date().toISOString();

  const primaryContact = mockTrustedContacts.find(contact => contact.isPrimary) || mockTrustedContacts[0];

  useEffect(() => {
    // Simular progresso de envio
    const progressInterval = setInterval(() => {
      setSendingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Após 2 segundos, marcar como enviado
    const timer = setTimeout(() => {
      setMessageSent(true);
      setSendingProgress(100);
      // Mock: registrar no histórico (simulação de backend)
      console.log("Alert sent to", primaryContact.name, "at", new Date().toISOString());
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [primaryContact]);

  const handleBack = () => {
    navigate("/know-your-limit");
  };

  const formatCoordinates = (lat, lng) => {
    return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
  };

  const formatTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <Container>
      <SafeArea>
        <Header>
          <BackButton onClick={handleBack}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </BackButton>
          <HeaderTitle>Notify Contact</HeaderTitle>
          <div style={{ width: "24px" }} />
        </Header>

        <Content>
          <ContactCard>
            {!messageSent ? (
              <SendingState>
                <SendingIcon $progress={sendingProgress}>
                  <svg width="64" height="64" viewBox="0 0 64 64">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="4"
                      strokeDasharray={`${2 * Math.PI * 28}`}
                      strokeDashoffset={`${2 * Math.PI * 28 * (1 - sendingProgress / 100)}`}
                      strokeLinecap="round"
                      transform="rotate(-90 32 32)"
                    />
                  </svg>
                  <div style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                </SendingIcon>
                <SendingTitle>Sending Alert</SendingTitle>
                <SendingMessage>
                  Notifying {primaryContact.name}...
                </SendingMessage>
              </SendingState>
            ) : (
              <SuccessState>
                <SuccessIcon>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </SuccessIcon>
                <SuccessTitle>Alert Sent Successfully</SuccessTitle>
                <SuccessMessage>
                  {primaryContact.name} has been notified with your current location and status.
                </SuccessMessage>
              </SuccessState>
            )}

            <ContactInfo>
              <ContactHeader>Contact</ContactHeader>
              <ContactName>{primaryContact.name}</ContactName>
              <ContactPhone>{primaryContact.phone}</ContactPhone>
            </ContactInfo>
          </ContactCard>

          <LocationCard>
            <LocationHeader>Location Shared</LocationHeader>
            <LocationAddress>{mockLocation.address}</LocationAddress>
            <LocationCoordinates>
              {formatCoordinates(mockLocation.lat, mockLocation.lng)}
            </LocationCoordinates>
          </LocationCard>

          {messageSent && (
            <MessagePreview>
              <PreviewTitle>Message Sent</PreviewTitle>
              <PreviewText>
                "Hi {primaryContact.name.split(' ')[0]}, this is an automated safety alert from Omni Feeling. 
                My current BAC level is {bac.toFixed(3)}% ({level}). 
                I may need assistance. My current location is {mockLocation.address}. 
                Time: {formatTime()}. Please check on me when possible."
              </PreviewText>
            </MessagePreview>
          )}

          <ActionButton onClick={handleBack} $cancel={!messageSent}>
            <ButtonText $cancel={!messageSent}>{messageSent ? "Return to Home" : "Cancel"}</ButtonText>
          </ActionButton>
        </Content>
      </SafeArea>
    </Container>
  );
}
