import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding-bottom: 2rem;
`;

export const Header = styled.div`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  padding: 1.5rem;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const StoreInfo = styled.div`
  flex: 1;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: white;
  width: ${props => props.progress}%;
  transition: width 0.5s ease;
`;

export const ProgressText = styled.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  opacity: 0.9;
`;

export const MapContainer = styled.div`
  padding: 1.5rem;
  position: relative;
`;

export const MapGrid = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
  height: 320px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  margin-bottom: 1rem;
  border: 2px solid #e2e8f0;
`;

export const Aisle = styled.div`
  position: absolute;
  background: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%);
    border-radius: 6px 0 0 6px;
  }
`;

export const AisleLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  color: #4b5563;
  letter-spacing: 0.3px;
`;

export const ProductMarker = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  transform: translate(-50%, -50%);
  z-index: 10;
  animation: bounce 2s ease-in-out infinite;
  
  @keyframes bounce {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
`;

export const CurrentLocationMarker = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  animation: pulse 2s ease-in-out infinite;
  transform: translate(-50%, -50%) rotate(0deg);
  z-index: 20;
  border: 3px solid white;
  
  &:before {
    content: '▲';
    color: white;
    font-size: 1.125rem;
    transform: rotate(0deg);
    display: block;
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
    }
    50% {
      box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
    }
  }
`;

export const PathLine = styled.div`
  position: absolute;
  background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
  height: 4px;
  z-index: 5;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
  
  &:after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid #10b981;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
  }
`;

export const InstructionCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const InstructionIcon = styled.div`
  font-size: 2rem;
`;

export const InstructionText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
`;

export const InstructionDistance = styled.div`
  font-size: 0.875rem;
  color: #6366f1;
  margin-top: 0.25rem;
`;

export const ItemsList = styled.div`
  padding: 0 1.5rem;
  margin-top: 1.5rem;
`;

export const ItemCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &:active {
    transform: scale(0.98);
  }
`;

export const NextItemIndicator = styled.div`
  position: absolute;
  top: -8px;
  right: 1rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ItemCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid ${props => props.checked ? '#6366f1' : '#d1d5db'};
  border-radius: 6px;
  background: ${props => props.checked ? '#6366f1' : 'white'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  flex-shrink: 0;
`;

export const ItemName = styled.div`
  flex: 1;
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  opacity: ${props => props.checked ? 0.5 : 1};
`;

export const FloatingActions = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 100;
`;

export const ActionButton = styled.button`
  background: white;
  color: #1f2937;
  border: none;
  border-radius: 24px;
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const CompleteButton = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 3rem);
  max-width: 343px;
  padding: 1rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
  transition: all 0.3s ease;
  z-index: 100;
  
  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 12px 28px rgba(16, 185, 129, 0.5);
  }
  
  &:active {
    transform: translateX(-50%) translateY(0);
  }
`;

