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
  gap: 1rem;
  padding-bottom: 2rem;
`;

export const WarningBanner = styled.div`
  background: #fef2f2;
  border: 2px solid #fca5a5;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  animation: pulse 2s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
    }
    50% {
      box-shadow: 0 0 0 4px rgba(239, 68, 68, 0);
    }
  }
`;

export const WarningIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #dc2626;
  
  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const WarningText = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #dc2626;
  line-height: 1.5;
  flex: 1;
`;

export const TimerBanner = styled.div`
  background: #fffbeb;
  border: 1px solid #fcd34d;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TimerText = styled.div`
  font-size: 0.9375rem;
  font-weight: 500;
  color: #92400e;
`;

export const TimerValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #f59e0b;
`;

export const RecommendationsCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.25rem;
`;

export const RecommendationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RecommendationItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  transition: all 0.2s ease;
`;

export const ItemIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${props => {
    const priority = props.$priority;
    if (priority === 'critical') return '#fef2f2';
    if (priority === 'high') return '#fffbeb';
    if (priority === 'medium') return '#eff6ff';
    return '#f3f4f6';
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => {
    const priority = props.$priority;
    if (priority === 'critical') return '#ef4444';
    if (priority === 'high') return '#f59e0b';
    if (priority === 'medium') return '#3b82f6';
    return '#6b7280';
  }};
  flex-shrink: 0;
  
  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const ItemContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ItemTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.375rem;
`;

export const ItemDescription = styled.div`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
`;

export const PriorityBadge = styled.div`
  padding: 0.25rem 0.75rem;
  background: ${props => props.$color}15;
  color: ${props => props.$color};
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  flex-shrink: 0;
  align-self: flex-start;
  margin-top: 0.25rem;
`;

export const ActionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const PrimaryAction = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  border-radius: 16px;
  padding: 1.125rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
  }
`;

export const SecondaryAction = styled.button`
  width: 100%;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:active {
    transform: scale(0.98);
    background: #f9fafb;
  }
`;

export const ActionText = styled.div`
  font-size: 1.0625rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 0.25rem;
`;

export const ActionSubtext = styled.div`
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-weight: 400;
`;
