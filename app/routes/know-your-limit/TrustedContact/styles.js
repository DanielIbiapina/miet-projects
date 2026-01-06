import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  color: #1f2937;
  position: relative;
  overflow-x: hidden;
`;

export const SafeArea = styled.div`
  max-width: 428px;
  margin: 0 auto;
  min-height: 100vh;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  background: #f9fafb;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 1rem 1.5rem;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
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

export const Content = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
`;

export const ContactCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const SendingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const SendingIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  
  svg {
    position: absolute;
  }
  
  > div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SendingTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

export const SendingMessage = styled.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
  text-align: center;
`;

export const SuccessState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const SuccessIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #10b981;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scaleIn 0.5s ease-out;
  
  @keyframes scaleIn {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
  svg {
    display: block;
  }
`;

export const SuccessTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #059669;
  margin: 0;
  text-align: center;
`;

export const SuccessMessage = styled.p`
  font-size: 0.9375rem;
  color: #4b5563;
  margin: 0;
  text-align: center;
  line-height: 1.5;
`;

export const ContactInfo = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

export const ContactHeader = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
`;

export const ContactName = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.375rem;
`;

export const ContactPhone = styled.div`
  font-size: 0.9375rem;
  color: #6b7280;
  font-weight: 500;
`;

export const LocationCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
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

export const MessagePreview = styled.div`
  background: #f0fdf4;
  border: 1px solid #86efac;
  border-radius: 16px;
  padding: 1.5rem;
`;

export const PreviewTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #059669;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
`;

export const PreviewText = styled.div`
  font-size: 0.9375rem;
  color: #065f46;
  line-height: 1.6;
  font-style: italic;
`;

export const ActionButton = styled.button`
  width: 100%;
  background: ${props => props.$cancel ? '#ffffff' : '#6366f1'};
  border: ${props => props.$cancel ? '2px solid #e5e7eb' : 'none'};
  border-radius: 16px;
  padding: 1.125rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => props.$cancel ? 'none' : '0 4px 12px rgba(99, 102, 241, 0.25)'};
  margin-top: 0.5rem;
  
  &:active {
    transform: scale(0.98);
    background: ${props => props.$cancel ? '#f9fafb' : '#4f46e5'};
  }
`;

export const ButtonText = styled.div`
  font-size: 1.0625rem;
  font-weight: 700;
  color: ${props => props.$cancel ? '#1f2937' : '#ffffff'};
  text-align: center;
`;
