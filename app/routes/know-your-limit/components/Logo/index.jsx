import styled from 'styled-components';
import { theme } from '../../utils/theme';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${props => props.$size || '64px'};
  height: ${props => props.$size || '64px'};
`;

const CirclesContainer = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Circle = styled.circle`
  fill: none;
  stroke: ${props => props.$color || theme.colors.purpleLight};
  stroke-width: ${props => props.$strokeWidth || '2'};
`;

const LetterO = styled.text`
  font-size: ${props => props.$fontSize || '32px'};
  font-weight: 700;
  fill: ${theme.colors.purpleLight};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  dominant-baseline: middle;
  text-anchor: middle;
`;

const WavePath = styled.path`
  fill: ${theme.colors.black};
  opacity: 0.95;
`;

export function OmniFeelingLogo({ size = '64px', showText = false }) {
  const centerX = 32;
  const centerY = 32;
  const baseRadius = 28;
  
  return (
    <LogoContainer $size={size}>
      <CirclesContainer viewBox="0 0 64 64">
        {/* 4 círculos concêntricos */}
        <Circle
          cx={centerX}
          cy={centerY}
          r={baseRadius}
          $color={theme.colors.purpleLight}
          $strokeWidth="2"
        />
        <Circle
          cx={centerX}
          cy={centerY}
          r={baseRadius - 4}
          $color={theme.colors.purpleDark}
          $strokeWidth="2"
        />
        <Circle
          cx={centerX}
          cy={centerY}
          r={baseRadius - 8}
          $color={theme.colors.purpleLight}
          $strokeWidth="1.5"
        />
        <Circle
          cx={centerX}
          cy={centerY}
          r={baseRadius - 12}
          $color={theme.colors.purpleDark}
          $strokeWidth="1.5"
        />
        
        {/* Letra O no centro */}
        <LetterO
          x={centerX}
          y={centerY}
          $fontSize="28px"
        >
          O
        </LetterO>
        
        {/* Onda cortando o O - criando um efeito de onda que corta a letra horizontalmente */}
        <WavePath
          d={`M ${centerX - 16} ${centerY - 4} 
              Q ${centerX - 8} ${centerY - 8}, ${centerX} ${centerY - 4}
              T ${centerX + 16} ${centerY - 4}
              L ${centerX + 16} ${centerY + 4}
              Q ${centerX + 8} ${centerY + 8}, ${centerX} ${centerY + 4}
              T ${centerX - 16} ${centerY + 4}
              Z`}
        />
      </CirclesContainer>
      {showText && (
        <div style={{
          marginLeft: '0.75rem',
          fontSize: '1.25rem',
          fontWeight: 700,
          background: theme.colors.primaryGradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Omni Feeling
        </div>
      )}
    </LogoContainer>
  );
}

