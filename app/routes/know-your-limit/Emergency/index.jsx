import { useNavigate } from "react-router";
import { mockLocation } from "../utils/mockData";
import {
  Container,
  SafeArea,
  Header,
  BackButton,
  HeaderTitle,
  EmergencyContainer,
  AlertCard,
  AlertIcon,
  AlertTitle,
  AlertMessage,
  InfoCard,
  InfoTitle,
  InfoText,
  LocationCard,
  LocationHeader,
  LocationAddress,
  LocationCoordinates,
  ActionButton,
  ButtonText,
  ButtonSubtext,
} from "./styles";

export function meta() {
  return [
    { title: "Safety Alert - Omni Feeling" },
    {
      name: "description",
      content: "Emergency safety protocol activated",
    },
  ];
}

export default function EmergencyScreen() {
  const navigate = useNavigate();

  const handleNotifyContact = () => {
    navigate("/know-your-limit/trusted-contact");
  };

  const formatCoordinates = (lat, lng) => {
    return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
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
          <HeaderTitle>Safety Alert</HeaderTitle>
          <div style={{ width: "24px" }} />
        </Header>

        <EmergencyContainer>
          <AlertCard>
            <AlertIcon>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </AlertIcon>
            <AlertTitle>No Response Detected</AlertTitle>
            <AlertMessage>
              We haven't detected any response to our safety recommendations.
              Your safety is our priority. Would you like to notify a trusted contact?
            </AlertMessage>
          </AlertCard>

          <InfoCard>
            <InfoTitle>What happens next?</InfoTitle>
            <InfoText>
              If you choose to notify your trusted contact, they will receive:
            </InfoText>
            <InfoText style={{ marginTop: "0.75rem", fontWeight: 500 }}>
              • Your current location
              <br />
              • The time of the alert
              <br />
              • Instructions to check on you
            </InfoText>
          </InfoCard>

          <LocationCard>
            <LocationHeader>Current Location</LocationHeader>
            <LocationAddress>{mockLocation.address}</LocationAddress>
            <LocationCoordinates>
              {formatCoordinates(mockLocation.lat, mockLocation.lng)}
            </LocationCoordinates>
          </LocationCard>

          <ActionButton onClick={handleNotifyContact}>
            <ButtonText>Notify Trusted Contact</ButtonText>
            <ButtonSubtext>Send alert with your location</ButtonSubtext>
          </ActionButton>
        </EmergencyContainer>
      </SafeArea>
    </Container>
  );
}
