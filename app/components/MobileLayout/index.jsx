import { MobileContainer, MobileFrame, MobileScreen, StatusBar } from "./styles";

export function MobileLayout({ children }) {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  
  return (
    <MobileContainer>
      <MobileFrame>
        <div className="notch"></div>
        <StatusBar>
          <span>{time}</span>
          <div
            style={{ display: "flex", gap: "4px", alignItems: "center" }}
          >
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </StatusBar>
        <MobileScreen>
          {children}
        </MobileScreen>
      </MobileFrame>
    </MobileContainer>
  );
}

