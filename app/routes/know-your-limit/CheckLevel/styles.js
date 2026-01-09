import styled from 'styled-components';
import { theme } from '../utils/theme';

export const Container = styled.div`
  min-height: 100vh;
  background: #ffffff;
  color: #111827;
  position: relative;
  overflow-x: hidden;
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
  padding: 1rem 1.5rem;
  background: #ffffff;
  border-bottom: 1px solid ${theme.colors.border};
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

export const MeasurementContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  text-align: center;
`;

export const DeviceInfo = styled.div`
  margin-bottom: 3rem;
  padding: 1rem 1.5rem;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
`;

export const DeviceName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

export const DeviceStatus = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;

export const ProgressContainer = styled.div`
  margin-bottom: 3rem;
  position: relative;
`;

export const ProgressCircle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
`;

export const ProgressText = styled.div`
  position: absolute;
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: -0.75rem;
`;

export const ProgressLabel = styled.div`
  position: absolute;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 1.5rem;
  white-space: nowrap;
`;

export const StatusIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${theme.colors.purpleLight};
  animation: pulse 1.5s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.1);
    }
  }
  
  svg {
    display: block;
    width: 64px;
    height: 64px;
  }
`;

export const StatusMessage = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.success};
  margin-bottom: 0.5rem;
`;

export const StatusText = styled.div`
  font-size: 1rem;
  color: #4b5563;
  font-weight: 500;
`;

export const MeasuringText = styled.div`
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
  margin-top: 1rem;
  max-width: 280px;
  line-height: 1.5;
`;

export const LoadingDots = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  color: ${theme.colors.purpleLight};
  
  span {
    animation: bounce 1.4s ease-in-out infinite;
    
    &:nth-child(1) {
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
  
  @keyframes bounce {
    0%, 80%, 100% {
      transform: translateY(0);
      opacity: 0.5;
    }
    40% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }
`;
