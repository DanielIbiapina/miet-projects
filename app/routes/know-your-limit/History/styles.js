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
  gap: 1.5rem;
`;

export const NightCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const NightHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const NightDate = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

export const NightStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const NightStat = styled.div`
  text-align: center;
`;

export const NightStatLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
`;

export const NightStatValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
`;

export const ChartSection = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 0.5rem 0;
  -webkit-overflow-scrolling: touch;
`;

export const LineChart = styled.div`
  width: 100%;
  min-width: 400px;
  height: 190px;
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
  stroke: ${props => props.stroke || '#ef4444'};
  stroke-width: ${props => props.strokeWidth || '3'};
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const ChartPoint = styled.circle`
  fill: ${props => props.fill || '#ef4444'};
  stroke: ${props => props.stroke || '#ffffff'};
  stroke-width: ${props => props.strokeWidth || '2'};
`;

export const ChartAxis = styled.line`
  stroke: #e5e7eb;
  stroke-width: 1;
`;

export const ChartLabel = styled.text`
  font-size: 10px;
  fill: #6b7280;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

export const EmptyIcon = styled.div`
  color: #9ca3af;
  margin-bottom: 1.5rem;
  opacity: 0.5;
`;

export const EmptyText = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;
