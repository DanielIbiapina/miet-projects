import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const ARContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ARFrame = styled(motion.div)`
  position: relative;
  width: 90vw;
  height: 90vh;
  border: 8px solid rgba(100, 200, 255, 0.5);
  border-radius: 40px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(20, 20, 40, 0.9) 0%, rgba(40, 40, 80, 0.9) 100%);
  box-shadow: 
    0 0 100px rgba(100, 200, 255, 0.5),
    inset 0 0 100px rgba(100, 200, 255, 0.1);
`;

const ARGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(100, 200, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100, 200, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
  
  @keyframes gridMove {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
  }
`;

const ScanLine = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(100, 200, 255, 0.8) 50%, 
    transparent 100%
  );
  box-shadow: 0 0 20px rgba(100, 200, 255, 0.8);
`;

const HUD = styled.div`
  position: absolute;
  inset: 20px;
  pointer-events: none;
`;

const HUDCorner = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  
  &.top-left {
    top: 0;
    left: 0;
    border-top: 3px solid rgba(100, 200, 255, 0.8);
    border-left: 3px solid rgba(100, 200, 255, 0.8);
  }
  
  &.top-right {
    top: 0;
    right: 0;
    border-top: 3px solid rgba(100, 200, 255, 0.8);
    border-right: 3px solid rgba(100, 200, 255, 0.8);
  }
  
  &.bottom-left {
    bottom: 0;
    left: 0;
    border-bottom: 3px solid rgba(100, 200, 255, 0.8);
    border-left: 3px solid rgba(100, 200, 255, 0.8);
  }
  
  &.bottom-right {
    bottom: 0;
    right: 0;
    border-bottom: 3px solid rgba(100, 200, 255, 0.8);
    border-right: 3px solid rgba(100, 200, 255, 0.8);
  }
`;

const HUDInfo = styled(motion.div)`
  position: absolute;
  ${props => props.$position};
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(100, 200, 255, 0.5);
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  color: rgba(100, 200, 255, 1);
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  
  &:before {
    content: '>';
    margin-right: 0.5rem;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const ContentArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem;
  z-index: 1;
`;

const ARTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 900;
  color: rgba(100, 200, 255, 1);
  text-shadow: 0 0 20px rgba(100, 200, 255, 0.8);
  margin-bottom: 2rem;
  text-align: center;
`;

const ARDescription = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(200, 220, 255, 0.9);
  text-align: center;
  max-width: 800px;
  line-height: 1.8;
  margin-bottom: 3rem;
`;

const FeaturesList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
`;

const Feature = styled(motion.div)`
  background: rgba(100, 200, 255, 0.1);
  border: 2px solid rgba(100, 200, 255, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: left;
  backdrop-filter: blur(5px);
  
  h3 {
    color: rgba(100, 200, 255, 1);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: rgba(200, 220, 255, 0.8);
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 30px;
  right: 30px;
  background: rgba(100, 200, 255, 0.2);
  border: 2px solid rgba(100, 200, 255, 0.5);
  color: rgba(100, 200, 255, 1);
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  z-index: 10;
  
  &:hover {
    background: rgba(100, 200, 255, 0.3);
    border-color: rgba(100, 200, 255, 0.8);
  }
`;

export default function AROverlay({ isOpen, onClose, product }) {
  const [scanLineY, setScanLineY] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setScanLineY(prev => (prev + 2) % 100);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ARContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ARFrame
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <ARGrid />
            
            <ScanLine
              style={{ top: `${scanLineY}%` }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <HUD>
              <HUDCorner className="top-left" />
              <HUDCorner className="top-right" />
              <HUDCorner className="bottom-left" />
              <HUDCorner className="bottom-right" />

              <HUDInfo
                $position="top: 20px; left: 120px;"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                AR VIEW ACTIVE
              </HUDInfo>

              <HUDInfo
                $position="top: 20px; right: 120px;"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                PROTOTYPE DETECTED
              </HUDInfo>

              <HUDInfo
                $position="bottom: 20px; left: 120px;"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                SCANNING... 100%
              </HUDInfo>
            </HUD>

            <CloseButton
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXIT AR MODE
            </CloseButton>

            <ContentArea>
              <ARTitle
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {product?.name || "Smart Glasses Prototype"}
              </ARTitle>

              <ARDescription
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Augmented Reality Glasses designed to empower elderly people with digital literacy
                through voice-controlled assistance and visual guidance.
              </ARDescription>

              <FeaturesList>
                {product?.features?.map((feature, idx) => (
                  <Feature
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 + idx * 0.1, type: "spring" }}
                  >
                    <h3>Feature {idx + 1}</h3>
                    <p>{feature}</p>
                  </Feature>
                )) || (
                  <>
                    <Feature
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                    >
                      <h3>Voice Assistant</h3>
                      <p>Alexa-like personal assistant for hands-free interaction</p>
                    </Feature>
                    <Feature
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.9, type: "spring" }}
                    >
                      <h3>Medication Reminders</h3>
                      <p>Voice alerts for medication schedules</p>
                    </Feature>
                    <Feature
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.0, type: "spring" }}
                    >
                      <h3>Quick Calls</h3>
                      <p>Instant connection with family members</p>
                    </Feature>
                  </>
                )}
              </FeaturesList>
            </ContentArea>
          </ARFrame>
        </ARContainer>
      )}
    </AnimatePresence>
  );
}

