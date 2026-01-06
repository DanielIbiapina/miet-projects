import { useNavigate } from "react-router";
import { mockUser, mockStickerDevice, mockTrustedContacts } from "../utils/mockData";
import { BottomNav } from "../components/BottomNav";
import {
  Container,
  SafeArea,
  Header,
  HeaderTitle,
  Content,
  ProfileSection,
  ProfileHeader,
  ProfileAvatar,
  ProfileName,
  ProfileEmail,
  Section,
  SectionTitle,
  SectionContent,
  InfoRow,
  InfoLabel,
  InfoValue,
  DeviceCard,
  DeviceHeader,
  DeviceName,
  DeviceStatus,
  StatusDot,
  DeviceActivation,
  ContactsList,
  ContactItem,
  ContactName,
  ContactPhone,
  ContactRelation,
  ActionButton,
  ButtonText,
} from "./styles";

export function meta() {
  return [
    { title: "Profile - Know Your Limit" },
    {
      name: "description",
      content: "Your profile and settings",
    },
  ];
}

export default function ProfileScreen() {
  const navigate = useNavigate();

  const getInitials = (name) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Container>
      <SafeArea>
        <Header>
          <HeaderTitle>Profile</HeaderTitle>
        </Header>

        <Content>
          <ProfileSection>
            <ProfileHeader>
              <ProfileAvatar>
                {getInitials(mockUser.name)}
              </ProfileAvatar>
              <ProfileName>{mockUser.name}</ProfileName>
              <ProfileEmail>{mockUser.email}</ProfileEmail>
            </ProfileHeader>
          </ProfileSection>

          <Section>
            <SectionTitle>Device</SectionTitle>
            <SectionContent>
              <DeviceCard>
                <DeviceHeader>
                  <DeviceName>{mockStickerDevice.name}</DeviceName>
                  <DeviceStatus>
                    <StatusDot $connected={mockStickerDevice.isAttached} />
                    {mockStickerDevice.isAttached ? "Attached" : "Not Attached"}
                  </DeviceStatus>
                </DeviceHeader>
                <DeviceActivation>
                  Activated: {new Date(mockStickerDevice.activatedAt).toLocaleDateString()}
                </DeviceActivation>
              </DeviceCard>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Trusted Contacts</SectionTitle>
            <SectionContent>
              <ContactsList>
                {(() => {
                  const saved = localStorage.getItem("trustedContacts");
                  const contacts = saved ? JSON.parse(saved) : mockTrustedContacts;
                  return contacts.map((contact) => (
                    <ContactItem key={contact.id}>
                      <div style={{ flex: 1 }}>
                        <ContactName>
                          {contact.name}
                          {contact.isPrimary && (
                            <span style={{ 
                              fontSize: "0.75rem", 
                              fontWeight: 600, 
                              color: "#ef4444",
                              marginLeft: "0.5rem"
                            }}>
                              PRIMARY
                            </span>
                          )}
                        </ContactName>
                        <ContactPhone>{contact.phone}</ContactPhone>
                        <ContactRelation>{contact.relationship}</ContactRelation>
                      </div>
                    </ContactItem>
                  ));
                })()}
              </ContactsList>
              <ActionButton onClick={() => navigate("/know-your-limit/manage-contacts")} style={{ marginTop: "1rem" }}>
                <ButtonText>Manage Contacts</ButtonText>
              </ActionButton>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Settings</SectionTitle>
            <SectionContent>
              <InfoRow>
                <InfoLabel>Language</InfoLabel>
                <InfoValue>{mockUser.preferences.language.toUpperCase()}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Units</InfoLabel>
                <InfoValue>{mockUser.preferences.units}</InfoValue>
              </InfoRow>
            </SectionContent>
          </Section>

          <ActionButton onClick={() => navigate("/know-your-limit")}>
            <ButtonText>Back to Home</ButtonText>
          </ActionButton>
        </Content>

        <BottomNav />
      </SafeArea>
    </Container>
  );
}

