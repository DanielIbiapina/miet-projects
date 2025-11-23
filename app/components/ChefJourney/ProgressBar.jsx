import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem 2rem;
`;

const ProgressContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    font-size: 2rem;
  }
  
  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0;
    color: #333;
    white-space: nowrap;
  }
`;

const IslandsNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: relative;
`;

const IslandDot = styled(motion.button)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${props => props.$active ? props.$color : '#ddd'};
  background: ${props => props.$active ? props.$color : 'white'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.3);
    border-color: ${props => props.$color};
  }
  
  &:after {
    content: '${props => props.$label}';
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.7rem;
    font-weight: 600;
    color: ${props => props.$active ? props.$color : '#999'};
    white-space: nowrap;
    opacity: ${props => props.$active ? 1 : 0.6};
    transition: opacity 0.3s ease;
  }
  
  &:hover:after {
    opacity: 1;
  }
`;

const ProgressLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: #eee;
  z-index: -1;
  transform: translateY(-50%);
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #FF6B6B, #4ECDC4, #FFE66D, #95E1D3, #A8E6CF);
  border-radius: 2px;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const NavButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  border: 2px solid ${props => props.$color || '#ddd'};
  background: white;
  color: ${props => props.$color || '#999'};
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    background: ${props => props.$color};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.$color}40;
  }
`;

const Counter = styled.div`
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
  white-space: nowrap;
`;

export default function ProgressBar({ islands, currentIndex, onNavigate }) {
  const progress = ((currentIndex + 1) / islands.length) * 100;

  return (
    <ProgressContainer>
      <ProgressContent>
        <Logo>
          <span>👨‍🍳</span>
          <h1>Chef's Journey</h1>
        </Logo>

        <IslandsNav>
          <ProgressLine>
            <ProgressFill
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </ProgressLine>
          {islands.map((island, idx) => (
            <IslandDot
              key={island.id}
              $active={idx === currentIndex}
              $color={island.color}
              $label={island.id.toUpperCase()}
              onClick={() => onNavigate(idx)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </IslandsNav>

        <Counter>
          {currentIndex + 1} / {islands.length}
        </Counter>

        <NavButtons>
          <NavButton
            onClick={() => onNavigate(currentIndex - 1)}
            disabled={currentIndex === 0}
            $color="#666"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Anterior
          </NavButton>
          <NavButton
            onClick={() => onNavigate(currentIndex + 1)}
            disabled={currentIndex === islands.length - 1}
            $color={islands[currentIndex]?.color}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Próximo →
          </NavButton>
        </NavButtons>
      </ProgressContent>
    </ProgressContainer>
  );
}

