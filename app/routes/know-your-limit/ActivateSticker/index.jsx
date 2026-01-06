import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { mockStickerDevice } from "../utils/mockData";
import {
  Container,
  SafeArea,
  Header,
  HeaderTitle,
  Content,
  InstructionCard,
  InstructionTitle,
  InstructionText,
  InstructionList,
  InstructionItem,
  QRCodeContainer,
  QRCodePlaceholder,
  QRCodeText,
  ScanButton,
  ButtonText,
  StatusCard,
  StatusIcon,
  StatusTitle,
  StatusMessage,
  StickerInfo,
  StickerName,
  StickerModel,
} from "./styles";

export function meta() {
  return [
    { title: "Activate Sticker - Know Your Limit" },
    {
      name: "description",
      content: "Scan QR code to activate your Omni Feeling sticker",
    },
  ];
}

export default function ActivateStickerScreen() {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    // Verificar se já está ativado
    const activated = localStorage.getItem("stickerActivated");
    if (activated === "true") {
      setIsActivated(true);
    }
  }, []);

  const handleScan = () => {
    setIsScanning(true);
    
    // Simular scan do QR code
    setTimeout(() => {
      // Mock: simular ativação bem-sucedida
      localStorage.setItem("stickerActivated", "true");
      localStorage.setItem("stickerId", mockStickerDevice.id);
      localStorage.setItem("stickerActivatedAt", new Date().toISOString());
      
      setIsScanning(false);
      setIsActivated(true);
      
      // Navegar para home após 2 segundos
      setTimeout(() => {
        navigate("/know-your-limit");
      }, 2000);
    }, 2000);
  };

  if (isActivated) {
    return (
      <Container>
        <SafeArea>
          <Header>
            <HeaderTitle>Sticker Activated</HeaderTitle>
          </Header>
          <Content>
            <StatusCard>
              <StatusIcon>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </StatusIcon>
              <StatusTitle>Activation Successful</StatusTitle>
              <StatusMessage>
                Your Omni Feeling sticker is now active and ready to monitor your alcohol level.
              </StatusMessage>
              <StickerInfo>
                <StickerName>{mockStickerDevice.name}</StickerName>
                <StickerModel>Model: {mockStickerDevice.model}</StickerModel>
              </StickerInfo>
            </StatusCard>
          </Content>
        </SafeArea>
      </Container>
    );
  }

  return (
    <Container>
      <SafeArea>
        <Header>
          <HeaderTitle>Activate Sticker</HeaderTitle>
        </Header>

        <Content>
          <InstructionCard>
            <InstructionTitle>How to Activate</InstructionTitle>
            <InstructionText>
              Follow these steps to activate your Omni Feeling sticker:
            </InstructionText>
            <InstructionList>
              <InstructionItem>
                <span>1</span>
                <div>
                  <strong>Remove the sticker</strong> from the package
                </div>
              </InstructionItem>
              <InstructionItem>
                <span>2</span>
                <div>
                  <strong>Attach the sticker</strong> to the back of your phone or phone case
                </div>
              </InstructionItem>
              <InstructionItem>
                <span>3</span>
                <div>
                  <strong>Scan the QR code</strong> on the back of the sticker with your phone's camera
                </div>
              </InstructionItem>
              <InstructionItem>
                <span>4</span>
                <div>
                  <strong>Tap your phone</strong> to the sticker to enable NFC communication
                </div>
              </InstructionItem>
            </InstructionList>
          </InstructionCard>

          <QRCodeContainer>
            <QRCodePlaceholder>
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <rect width="200" height="200" fill="#ffffff"/>
                <rect x="20" y="20" width="40" height="40" fill="#000000"/>
                <rect x="140" y="20" width="40" height="40" fill="#000000"/>
                <rect x="20" y="140" width="40" height="40" fill="#000000"/>
                <rect x="60" y="60" width="80" height="80" fill="#000000"/>
                <rect x="80" y="80" width="40" height="40" fill="#ffffff"/>
                <circle cx="100" cy="100" r="30" fill="#000000"/>
                <circle cx="100" cy="100" r="20" fill="#ffffff"/>
              </svg>
            </QRCodePlaceholder>
            <QRCodeText>
              QR Code on sticker back
            </QRCodeText>
          </QRCodeContainer>

          <ScanButton onClick={handleScan} disabled={isScanning}>
            <ButtonText>
              {isScanning ? "Scanning..." : "Scan QR Code"}
            </ButtonText>
          </ScanButton>

          <div style={{ marginTop: "1.5rem", padding: "1rem", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #86efac" }}>
            <div style={{ fontSize: "0.875rem", color: "#065f46", lineHeight: "1.6" }}>
              <strong>Note:</strong> The sticker uses NFC technology and doesn't require a battery. 
              Simply tap your phone to the sticker periodically to read sensor data.
            </div>
          </div>
        </Content>
      </SafeArea>
    </Container>
  );
}

