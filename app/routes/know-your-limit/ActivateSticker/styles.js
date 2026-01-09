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
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InstructionCard = styled.div`
  background: #ffffff;
  border: 1px solid ${theme.colors.border};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const InstructionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const InstructionText = styled.p`
  font-size: 0.9375rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const InstructionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InstructionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: ${theme.colors.primaryGradient};
    color: #ffffff;
    font-weight: 700;
    font-size: 0.875rem;
    flex-shrink: 0;
  }
  
  > div {
    flex: 1;
    font-size: 0.9375rem;
    color: #374151;
    line-height: 1.6;
    padding-top: 0.25rem;
  }
`;

export const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: #ffffff;
  border: 1px solid ${theme.colors.border};
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const QRCodePlaceholder = styled.div`
  width: 200px;
  height: 200px;
  background: #ffffff;
  border: 2px solid ${theme.colors.border};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  
  svg {
    display: block;
  }
`;

export const QRCodeText = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  text-align: center;
`;

export const ScanButton = styled.button`
  width: 100%;
  padding: 1.125rem 1.5rem;
  font-size: 1.0625rem;
  font-weight: 700;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${theme.colors.primaryGradient};
  color: #ffffff;
  box-shadow: ${theme.shadows.md};
  
  &:active {
    transform: scale(0.98);
    box-shadow: ${theme.shadows.sm};
  }
  
  &:hover {
    box-shadow: ${theme.shadows.glow};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ButtonText = styled.span`
  display: block;
`;

export const StatusCard = styled.div`
  background: #ffffff;
  border: 2px solid #10b981;
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
`;

export const StatusIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #10b981;
  
  svg {
    display: block;
  }
`;

export const StatusTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #059669;
  margin-bottom: 1rem;
`;

export const StatusMessage = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const StickerInfo = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
  margin-top: 1.5rem;
`;

export const StickerName = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const StickerModel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

