import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #fef2f2;
  color: #1f2937;
  position: relative;
  overflow-x: hidden;
`;

export const SafeArea = styled.div`
  max-width: 428px;
  margin: 0 auto;
  min-height: 100vh;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  background: #fef2f2;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 1rem 1.5rem;
  background: #ffffff;
  border-bottom: 1px solid #fecaca;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
  padding-top: calc(env(safe-area-inset-top, 0.5rem) + 1rem);
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #1f2937;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 0.2s ease;
  
  &:active {
    background: #f3f4f6;
  }
  
  svg {
    display: block;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const EmergencyContainer = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
`;

export const AlertCard = styled.div`
  background: #ffffff;
  border: 2px solid #fca5a5;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15);
  animation: pulse 2s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15);
    }
    50% {
      box-shadow: 0 4px 20px rgba(239, 68, 68, 0.25);
    }
  }
`;

export const AlertIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #dc2626;
  animation: shake 0.5s ease-in-out infinite;
  
  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    75% {
      transform: translateX(5px);
    }
  }
  
  svg {
    display: block;
    width: 80px;
    height: 80px;
  }
`;

export const AlertTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #dc2626;
  margin-bottom: 1rem;
`;

export const AlertMessage = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
`;

export const InfoCard = styled.div`
  background: #ffffff;
  border: 1px solid #fecaca;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const InfoTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const InfoText = styled.div`
  font-size: 0.9375rem;
  color: #4b5563;
  line-height: 1.6;
`;

export const LocationCard = styled.div`
  background: #ffffff;
  border: 1px solid #fecaca;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const LocationHeader = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
`;

export const LocationAddress = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

export const LocationCoordinates = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  font-family: 'Courier New', monospace;
`;

export const ActionButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  border: none;
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  margin-top: 0.5rem;
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
  }
`;

export const ButtonText = styled.div`
  font-size: 1.0625rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 0.25rem;
`;

export const ButtonSubtext = styled.div`
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-weight: 400;
`;
