import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  color: #1f2937;
  position: relative;
  overflow-x: hidden;
  padding-bottom: 80px;
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
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
  padding-top: calc(env(safe-area-inset-top, 0.5rem) + 1rem);
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

export const Content = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProfileSection = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ProfileAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
`;

export const ProfileName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.5rem 0;
`;

export const ProfileEmail = styled.div`
  font-size: 0.9375rem;
  color: #6b7280;
  font-weight: 500;
`;

export const Section = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 1rem 1.5rem 0.75rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`;

export const SectionContent = styled.div`
  padding: 1rem 1.5rem;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const InfoLabel = styled.div`
  font-size: 0.9375rem;
  color: #4b5563;
  font-weight: 500;
`;

export const InfoValue = styled.div`
  font-size: 0.9375rem;
  color: #111827;
  font-weight: 600;
`;

export const DeviceCard = styled.div`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.25rem;
`;

export const DeviceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const DeviceName = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
`;

export const DeviceStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #059669;
`;

export const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$connected ? '#10b981' : '#ef4444'};
  animation: ${props => props.$connected ? 'pulse 2s ease-in-out infinite' : 'none'};
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

export const DeviceActivation = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
`;

export const ContactName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;
`;

export const ContactPhone = styled.div`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.25rem;
`;

export const ContactRelation = styled.div`
  font-size: 0.8125rem;
  color: #6b7280;
  font-weight: 500;
`;

export const ActionButton = styled.button`
  width: 100%;
  background: #ef4444;
  border: none;
  border-radius: 16px;
  padding: 1.125rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.25);
  margin-top: 0.5rem;
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
  }
`;

export const ButtonText = styled.div`
  font-size: 1.0625rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`;

