import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const MapContainer = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
  overflow: hidden;
`;

const Ocean = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 60% 30%, rgba(96, 165, 250, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(147, 197, 253, 0.25) 0%, transparent 50%);
  animation: wave 15s ease-in-out infinite;
  
  @keyframes wave {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-10px) scale(1.02); }
  }
`;

const Clouds = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Cloud = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 100px;
  filter: blur(40px);
  animation: float ${props => props.$duration || 30}s linear infinite;
  
  @keyframes float {
    0% { transform: translateX(-100px); }
    100% { transform: translateX(calc(100vw + 100px)); }
  }
`;

const IslandGroup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Island = styled(motion.div)`
  position: absolute;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
`;

const IslandShape = styled.div`
  width: 120px;
  height: 120px;
  background: ${props => props.$color};
  border-radius: 60% 40% 55% 45% / 60% 50% 50% 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 4px solid rgba(139, 92, 46, 0.6);
  
  &:before {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 30px;
    background: rgba(139, 92, 46, 0.3);
    border-radius: 50%;
    filter: blur(10px);
  }
`;

const IslandIcon = styled.div`
  font-size: 3rem;
  position: relative;
  z-index: 1;
  animation: bounce 2s ease-in-out infinite;
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const IslandName = styled(motion.div)`
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.85rem;
  white-space: nowrap;
  backdrop-filter: blur(10px);
`;

const PathLine = styled(motion.svg)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Title = styled(motion.h1)`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  font-weight: 900;
  color: white;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  z-index: 10;
`;

const Subtitle = styled(motion.p)`
  position: absolute;
  top: calc(10% + 5rem);
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  z-index: 10;
`;

export default function IslandMap({ islands, onIslandClick, autoNavigate = false, currentIndex = 0 }) {
  // Auto navigate to first island after delay
  useEffect(() => {
    if (autoNavigate && onIslandClick) {
      const timer = setTimeout(() => {
        onIslandClick(0);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoNavigate, onIslandClick]);

  // Calculate path between islands
  const getPath = (from, to) => {
    const fromIsland = islands[from];
    const toIsland = islands[to];
    
    const x1 = `${fromIsland.position.x}%`;
    const y1 = `${fromIsland.position.y}%`;
    const x2 = `${toIsland.position.x}%`;
    const y2 = `${toIsland.position.y}%`;
    
    // Create a curved path
    const midX = (fromIsland.position.x + toIsland.position.x) / 2;
    const midY = Math.min(fromIsland.position.y, toIsland.position.y) - 5;
    
    return `M ${x1} ${y1} Q ${midX}% ${midY}% ${x2} ${y2}`;
  };

  return (
    <MapContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Ocean />
      
      <Clouds>
        <Cloud style={{ width: 200, height: 80, top: '15%', left: -100 }} $duration={30} />
        <Cloud style={{ width: 150, height: 60, top: '25%', left: -150, animationDelay: '-10s' }} $duration={40} />
        <Cloud style={{ width: 180, height: 70, top: '70%', left: -120, animationDelay: '-20s' }} $duration={35} />
      </Clouds>

      <Title
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Chef's Journey
      </Title>

      <Subtitle
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Navigate through our Design Thinking adventure
      </Subtitle>

      {/* Draw paths between islands */}
      <PathLine>
        {islands.map((island, idx) => {
          if (idx < islands.length - 1) {
            return (
              <motion.path
                key={`path-${idx}`}
                d={getPath(idx, idx + 1)}
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="3"
                strokeDasharray="10 5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8 + idx * 0.2, duration: 0.8 }}
              />
            );
          }
          return null;
        })}
      </PathLine>

      <IslandGroup>
        {islands.map((island, idx) => (
          <Island
            key={island.id}
            $x={island.position.x}
            $y={island.position.y}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 + idx * 0.15, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onIslandClick && onIslandClick(idx)}
          >
            <IslandShape $color={island.color}>
              <IslandIcon>{island.icon}</IslandIcon>
            </IslandShape>
            <IslandName
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + idx * 0.15 }}
            >
              {island.title}
            </IslandName>
          </Island>
        ))}
      </IslandGroup>
    </MapContainer>
  );
}

