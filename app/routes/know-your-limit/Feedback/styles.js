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

export const FeedbackContainer = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
`;

export const LevelCard = styled.div`
  background: ${props => props.$bgColor};
  border: 2px solid ${props => props.$borderColor};
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const LevelBadge = styled.div`
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: ${props => props.$color};
  color: #ffffff;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
`;

export const BACValue = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

export const BACLabel = styled.div`
  font-size: 0.875rem;
  color: #4b5563;
  font-weight: 500;
`;

export const ExplanationCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ExplanationTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

export const ExplanationText = styled.p`
  font-size: 0.9375rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
`;

export const LocationInfo = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const LocationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #f3f4f6;
  border-radius: 8px;
  flex-shrink: 0;
  color: #6b7280;
  
  svg {
    display: block;
  }
`;

export const LocationText = styled.div`
  flex: 1;
  font-size: 0.875rem;
  color: #4b5563;
`;

export const LocationAddress = styled.div`
  color: #6b7280;
  font-size: 0.8125rem;
  line-height: 1.4;
`;

export const ContinueButton = styled.button`
  width: 100%;
  background: ${props => props.$color};
  border: none;
  border-radius: 16px;
  padding: 1.125rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px ${props => props.$color}40;
  margin-top: 0.5rem;
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 8px ${props => props.$color}50;
  }
`;

export const ButtonText = styled.div`
  font-size: 1.0625rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`;
