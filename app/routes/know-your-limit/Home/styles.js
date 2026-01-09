import styled from 'styled-components';
import { theme } from '../utils/theme';

export const Container = styled.div`
  min-height: 100vh;
  background: #ffffff;
  color: ${theme.colors.textPrimary};
  position: relative;
  overflow-x: hidden;
  padding-bottom: 80px;
`;

export const SafeArea = styled.div`
  max-width: 428px;
  margin: 0 auto;
  min-height: 100vh;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 1rem 1.5rem 1.5rem;
  background: #ffffff;
  border-bottom: 1px solid ${theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
  padding-top: calc(env(safe-area-inset-top, 0.5rem) + 1rem);
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const UserGreeting = styled.div`
  font-size: 0.8125rem;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const UserName = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
  letter-spacing: -0.025em;
`;

export const DeviceStatus = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: ${props => props.$connected ? 'rgba(16, 185, 129, 0.1)' : 'rgba(212, 127, 227, 0.1)'};
  border-radius: 8px;
  border: 1px solid ${props => props.$connected ? theme.colors.success : theme.colors.border};
`;

export const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$connected ? theme.colors.success : theme.colors.textSecondary};
  animation: ${props => props.$connected ? 'pulse 2s ease-in-out infinite' : 'none'};
  box-shadow: ${props => props.$connected ? `0 0 8px ${theme.colors.success}` : 'none'};
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

export const StatusText = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${props => props.$connected ? theme.colors.success : theme.colors.textSecondary};
  white-space: nowrap;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CurrentStatusCard = styled.div`
  background: #ffffff;
  border: 1px solid ${theme.colors.border};
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const StatusHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const StatusTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`;

export const StatusBadge = styled.div`
  padding: 0.375rem 0.75rem;
  border-radius: 8px;
  background: ${props => props.$color}15;
  color: ${props => props.$color};
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const StatusValue = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.$color || '#111827'};
  line-height: 1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.05em;
`;

export const StatusLabel = styled.div`
  font-size: 0.9375rem;
  color: #6b7280;
  font-weight: 500;
`;

export const ChartSection = styled.div`
  background: #ffffff;
  border: 1px solid ${theme.colors.border};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ChartTitle = styled.h3`
  font-size: 0.8125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ChartContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 0.5rem 0;
  -webkit-overflow-scrolling: touch;
`;

export const LineChart = styled.div`
  width: 100%;
  min-width: 400px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChartSVG = styled.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
`;

export const ChartLine = styled.polyline`
  fill: none;
  stroke: ${props => props.stroke || theme.colors.purpleLight};
  stroke-width: ${props => props.strokeWidth || '3'};
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const ChartProjectionLine = styled.line`
  stroke: ${props => props.stroke || theme.colors.textTertiary};
  stroke-width: ${props => props.strokeWidth || '2'};
  stroke-dasharray: ${props => props.strokeDasharray || '5,5'};
  opacity: 0.6;
`;

export const ChartPoint = styled.circle`
  fill: ${props => props.fill || theme.colors.purpleLight};
  stroke: ${props => props.stroke || theme.colors.backgroundCard};
  stroke-width: ${props => props.strokeWidth || '2'};
`;

export const ChartProjectionPoint = styled.circle`
  fill: ${props => props.fill || theme.colors.textTertiary};
  stroke: ${props => props.stroke || theme.colors.backgroundCard};
  stroke-width: ${props => props.strokeWidth || '2'};
  opacity: ${props => props.opacity || '0.7'};
`;

export const ChartAxis = styled.line`
  stroke: ${theme.colors.border};
  stroke-width: 1;
`;

export const ChartLabel = styled.text`
  font-size: 10px;
  fill: ${theme.colors.textTertiary};
`;

export const ProjectionCard = styled.div`
  background: ${theme.colors.primaryGradient};
  border-radius: 16px;
  padding: 1.5rem;
  color: #ffffff;
  box-shadow: ${theme.shadows.md};
`;

export const ProjectionTitle = styled.h3`
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.9;
  margin-bottom: 0.75rem;
`;

export const ProjectionValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.5rem;
  color: ${props => props.$color || '#ffffff'};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ProjectionTrend = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => 
    props.$trend === 'increasing' ? '#fbbf24' : 
    props.$trend === 'decreasing' ? '#34d399' : 
    '#ffffff'};
  opacity: 0.95;
`;

export const ProjectionLabel = styled.div`
  font-size: 0.8125rem;
  opacity: 0.8;
  font-weight: 500;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const StatCard = styled.div`
  background: #ffffff;
  border: 1px solid ${theme.colors.border};
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;
  line-height: 1;
`;

export const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const RecentReadings = styled.div`
  background: #ffffff;
  border: 1px solid ${theme.colors.border};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ReadingsTitle = styled.h3`
  font-size: 0.8125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ReadingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ReadingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid ${theme.colors.border};
`;

export const ReadingTime = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  min-width: 80px;
`;

export const ReadingBAC = styled.div`
  font-size: 0.9375rem;
  font-weight: 700;
  color: ${props => props.$color || '#111827'};
  flex: 1;
  text-align: center;
`;

export const ReadingLevel = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${props => props.$color || '#6b7280'};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.5rem;
  background: ${props => props.$color}15;
  border-radius: 6px;
  min-width: 80px;
  text-align: center;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

export const EmptyText = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #6b7280;
`;

export const SimulateButton = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${props => props.$isSimulating ? theme.colors.warning : theme.colors.primaryGradient};
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: ${theme.shadows.md};
  transition: all 0.2s ease;
  
  &:active {
    transform: scale(0.98);
  }
  
  &:hover {
    box-shadow: ${theme.shadows.glow};
  }
`;

export const WarningBanner = styled.div`
  background: ${props => props.$type === 'high' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)'};
  border: 2px solid ${props => props.$type === 'high' ? theme.colors.error : theme.colors.warning};
  border-radius: 12px;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const WarningText = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${props => props.$type === 'high' ? theme.colors.error : theme.colors.warning};
  line-height: 1.5;
`;

export const WarningActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const WarningButton = styled.button`
  flex: 1;
  padding: 0.75rem 1rem;
  background: ${props => props.$primary ? theme.colors.primaryGradient : '#ffffff'};
  color: ${props => props.$primary ? '#ffffff' : theme.colors.textSecondary};
  border: 2px solid ${theme.colors.purpleLight};
  border-radius: 8px;
  font-size: 0.9375rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:active {
    transform: scale(0.98);
  }
`;

export const Toast = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.colors.primaryGradient};
  color: #ffffff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: ${theme.shadows.glow};
  z-index: 2000;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 0.9375rem;
  max-width: 90%;
  animation: slideDown 0.3s ease-out;
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;
