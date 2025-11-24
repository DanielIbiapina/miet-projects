import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import IslandMap from "../../components/ChefJourney/IslandMap";
import IslandContent from "../../components/ChefJourney/IslandContent";
import AROverlay from "../../components/ChefJourney/AROverlay";
import { islands, projectInfo } from "./islands";

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000;
  font-family: "Inter", "Segoe UI", sans-serif;
  position: relative;
`;

const IntroScreen = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
  color: white;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2rem 1rem;

  /* Custom scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const IntroIcon = styled(motion.div)`
  font-size: 8rem;
  margin-bottom: 2rem;
`;

const IntroTitle = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 900;
  margin: 0 0 1rem 0;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const IntroSubtitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 400;
  margin: 0 0 3rem 0;
  opacity: 0.95;
`;

const IntroInfo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem 3rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;

  p {
    margin: 0.8rem 0;
    font-size: 1.2rem;

    strong {
      font-weight: 700;
    }
  }
`;

const StartButton = styled(motion.button)`
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  font-weight: 700;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ScrollIndicator = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  z-index: 101;

  .arrow {
    font-size: 1.5rem;
  }
`;

const ViewContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  overflow: hidden;
  isolation: isolate;
`;

const IslandView = styled(motion.div)`
  position: absolute;
  inset: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${(props) => (props.$transparent ? "transparent" : "white")};
  padding-bottom: 120px; /* Espaço para os botões */

  /* Hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavigationBar = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  z-index: 99999 !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  pointer-events: auto !important;
  isolation: isolate;
`;

const NavButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background: ${(props) =>
    props.$active ? props.$color : "rgba(255, 255, 255, 0.1)"};
  color: white;
  border: 2px solid
    ${(props) => (props.$active ? props.$color : "rgba(255, 255, 255, 0.3)")};
  border-radius: 30px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  white-space: nowrap;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.$color}cc;
    border-color: ${(props) => props.$color};
  }
`;

const MapButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const IslandDots = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
`;

const Dot = styled(motion.button)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.$active ? props.$color : "rgba(255, 255, 255, 0.3)"};
  border: 2px solid
    ${(props) => (props.$active ? props.$color : "rgba(255, 255, 255, 0.5)")};
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;

export default function ChefJourney() {
  const [view, setView] = useState("intro"); // intro, map, island
  const [currentIsland, setCurrentIsland] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showAR, setShowAR] = useState(false);

  const handleStart = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setView("map");
      setIsTransitioning(false);
    }, 1200); // Increased to match new exit animation duration
  };

  const handleIslandClick = (index) => {
    setIsTransitioning(true);
    setCurrentIsland(index);

    // Zoom animation delay
    setTimeout(() => {
      setView("island");
      setIsTransitioning(false);
    }, 1000);
  };

  const handleBackToMap = () => {
    setIsTransitioning(true);

    // Deszoom animation delay
    setTimeout(() => {
      setView("map");
      setIsTransitioning(false);
    }, 800);
  };

  const handleNextIsland = () => {
    if (currentIsland < islands.length - 1) {
      setIsTransitioning(true);

      // Deszoom then zoom
      setTimeout(() => setView("map"), 600);
      setTimeout(() => {
        setCurrentIsland(currentIsland + 1);
        setView("island");
        setIsTransitioning(false);
      }, 1400);
    }
  };

  const handlePrevIsland = () => {
    if (currentIsland > 0) {
      setIsTransitioning(true);

      // Deszoom then zoom
      setTimeout(() => setView("map"), 600);
      setTimeout(() => {
        setCurrentIsland(currentIsland - 1);
        setView("island");
        setIsTransitioning(false);
      }, 1400);
    }
  };

  const handleDotClick = (index) => {
    if (index !== currentIsland) {
      setIsTransitioning(true);

      // Deszoom then zoom
      setTimeout(() => setView("map"), 600);
      setTimeout(() => {
        setCurrentIsland(index);
        setView("island");
        setIsTransitioning(false);
      }, 1400);
    }
  };

  const currentIslandData =
    currentIsland !== null ? islands[currentIsland] : null;

  return (
    <PageContainer data-chef-journey>
      <AnimatePresence mode="wait">
        {view === "intro" && (
          <IntroScreen
            key="intro"
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 3,
              rotateZ: 10,
            }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <IntroIcon
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
            >
              👨‍🍳🏝️
            </IntroIcon>

            <IntroTitle
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Chef's Journey
            </IntroTitle>

            <IntroSubtitle
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A Design Thinking Adventure
            </IntroSubtitle>

            <IntroInfo
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p>
                <strong>Course:</strong> {projectInfo.course}
              </p>
              <p>
                <strong>Institution:</strong> {projectInfo.institution}
              </p>
            </IntroInfo>

            <StartButton
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 32px rgba(0, 0, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStart}
            >
              <span>🚀</span> Start Journey
            </StartButton>
          </IntroScreen>
        )}

        {view === "map" && (
          <ViewContainer
            key="map"
            initial={{ scale: currentIsland !== null ? 2 : 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <IslandMap
              islands={islands}
              onIslandClick={handleIslandClick}
              currentIndex={currentIsland}
            />
          </ViewContainer>
        )}

        {view === "island" && currentIslandData && (
          <ViewContainer
            key={`island-${currentIsland}`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <IslandView
              $transparent={
                currentIslandData?.layoutType === "debate" ||
                currentIslandData?.layoutType === "arvision" ||
                currentIslandData?.layoutType === "presentation"
              }
            >
              <IslandContent
                island={currentIslandData}
                onARClick={() => setShowAR(true)}
              />
            </IslandView>

            <NavigationBar
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                zIndex: 99999,
                pointerEvents: "auto",
                position: "fixed",
              }}
            >
              <NavButton
                onClick={handlePrevIsland}
                disabled={currentIsland === 0 || isTransitioning}
                $color={currentIslandData.color}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Previous
              </NavButton>

              <IslandDots>
                {islands.map((island, idx) => (
                  <Dot
                    key={island.id}
                    $active={idx === currentIsland}
                    $color={island.color}
                    onClick={() => handleDotClick(idx)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </IslandDots>

              <MapButton
                onClick={handleBackToMap}
                disabled={isTransitioning}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>🗺️</span> Map
              </MapButton>

              <NavButton
                onClick={handleNextIsland}
                disabled={
                  currentIsland === islands.length - 1 || isTransitioning
                }
                $color={currentIslandData.color}
                $active
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next →
              </NavButton>
            </NavigationBar>
          </ViewContainer>
        )}
      </AnimatePresence>

      <AROverlay
        isOpen={showAR}
        onClose={() => setShowAR(false)}
        product={{
          name: projectInfo.finalProduct,
          features: projectInfo.productFeatures,
        }}
      />
    </PageContainer>
  );
}
