import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState, useEffect } from "react";

const ContentContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding: 6rem 3rem 3rem;
  background: ${(props) =>
    `linear-gradient(135deg, ${props.$color}10 0%, ${props.$color}05 100%)`};
  position: relative;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Icon = styled(motion.div)`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 900;
  color: ${(props) => props.$color};
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 400;
  color: #555;
  margin: 0 0 0.5rem 0;
  font-style: italic;
`;

const Classes = styled(motion.p)`
  font-size: 1.1rem;
  color: #888;
  font-weight: 600;
  margin: 0.5rem 0 0 0;
`;

const Description = styled(motion.p)`
  font-size: 1.4rem;
  line-height: 2;
  color: #333;
  text-align: center;
  max-width: 900px;
  margin: 2rem auto 4rem;
  font-weight: 500;
`;

// Grid Layout
const GridPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;

const PhotoCard = styled(motion.div)`
  aspect-ratio: 4/3;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background: #f5f5f5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Masonry Layout
const MasonryGrid = styled.div`
  columns: 3;
  column-gap: 2rem;
  max-width: 1400px;
  margin: 3rem auto;

  @media (max-width: 1200px) {
    columns: 2;
  }

  @media (max-width: 768px) {
    columns: 1;
  }
`;

const MasonryItem = styled(motion.div)`
  break-inside: avoid;
  margin-bottom: 2rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background: #f5f5f5;

  img {
    width: 100%;
    display: block;
  }
`;

// Showcase Layout (for prototype)
const ShowcaseContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const HeroImage = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  aspect-ratio: 16/9;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SecondaryImages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Section = styled(motion.div)`
  background: white;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-left: 6px solid ${(props) => props.$color};
  margin: 2rem auto;
  max-width: 1400px;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => props.$color};
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
`;

const ListItem = styled(motion.li)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  padding: 1rem 1.5rem;
  background: ${(props) => props.$color}10;
  border-radius: 12px;
  border-left: 4px solid ${(props) => props.$color};

  &:before {
    content: "${(props) => props.$icon || "▸"}";
    margin-right: 1rem;
    color: ${(props) => props.$color};
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 2rem auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

// Timeline Layout (unique for PREPPING island)
const TimelineContainer = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  position: relative;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(
    to bottom,
    ${(props) => props.$color}40,
    ${(props) => props.$color}
  );
  transform: translateX(-50%);

  @media (max-width: 968px) {
    left: 30px;
  }
`;

const TimelineItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 6rem;
  position: relative;

  &.right {
    direction: rtl;

    > * {
      direction: ltr;
    }
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    margin-left: 80px;
    direction: ltr !important;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: ${(props) => props.$color};
  border: 6px solid white;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 2;

  @media (max-width: 968px) {
    left: 30px;
  }
`;

const TimelineDate = styled.div`
  position: absolute;
  left: 50%;
  top: 70px;
  transform: translateX(-50%);
  background: ${(props) => props.$color};
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: 968px) {
    left: 30px;
    transform: none;
  }
`;

const TimelineContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-top: 6px solid ${(props) => props.$color};

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.$color};
    margin: 0 0 1rem 0;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #333;
    margin: 2rem 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin: 0.8rem 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }

  li {
    padding: 0.6rem 0 0.6rem 1.5rem;
    position: relative;
    font-size: 1.05rem;
    line-height: 1.6;
    color: #444;

    &:before {
      content: "▸";
      position: absolute;
      left: 0;
      color: ${(props) => props.$color};
      font-weight: bold;
    }
  }
`;

const TimelineEmpty = styled.div`
  @media (max-width: 968px) {
    display: none;
  }
`;

const TimelinePhoto = styled(motion.div)`
  margin-top: 2rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 4px solid white;

  img {
    width: 100%;
    display: block;
  }
`;

const HighlightBox = styled(motion.div)`
  background: ${(props) => props.$color}15;
  border-left: 6px solid ${(props) => props.$color};
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;

  h4 {
    color: ${(props) => props.$color};
    font-size: 1.3rem;
    margin: 0 0 1rem 0;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
    margin: 0;
    font-style: italic;
  }
`;

const ModelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ModelCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    ${(props) => props.$color}15,
    ${(props) => props.$color}05
  );
  border: 2px solid ${(props) => props.$color}30;
  border-radius: 16px;
  padding: 1.5rem;

  h5 {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${(props) => props.$color};
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    margin: 0.3rem 0;

    strong {
      font-weight: 600;
      color: #333;
    }
  }
`;

// Notebook Layout (unique for TASTING island)
const NotebookPage = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background: #fdfcf8;
  padding: 4rem;
  border-radius: 12px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 80px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(255, 100, 100, 0.3);
  }
`;

const NotebookHeader = styled.div`
  border-bottom: 3px solid ${(props) => props.$color};
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    font-weight: 900;
    color: ${(props) => props.$color};
    margin: 0 0 0.5rem 0;
    font-family: "Courier New", monospace;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin: 0.5rem 0;
    font-style: italic;
  }
`;

const PostItNote = styled(motion.div)`
  background: ${(props) => props.$bgColor || "#fff59d"};
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: rotate(${(props) => props.$rotate || 0}deg);
  margin: 2rem 0;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 16px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #333;
    margin: 0 0 1rem 0;
  }

  p,
  li {
    font-size: 1rem;
    line-height: 1.6;
    color: #444;
  }
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 3rem 0;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ToolBox = styled(motion.div)`
  background: white;
  border: 3px solid ${(props) => props.$color};
  border-radius: 16px;
  padding: 2rem;
  position: relative;

  &:before {
    content: "${(props) => props.$label}";
    position: absolute;
    top: -15px;
    left: 20px;
    background: ${(props) => props.$color};
    color: white;
    padding: 0.3rem 1.5rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.$color};
    margin: 1rem 0 0.5rem 0;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    margin: 0 0 1.5rem 0;
    font-style: italic;
  }
`;

const ToolItem = styled.div`
  padding: 1rem;
  margin: 0.8rem 0;
  background: ${(props) => props.$color}10;
  border-left: 4px solid ${(props) => props.$color};
  border-radius: 8px;

  strong {
    display: block;
    font-size: 1.1rem;
    color: ${(props) => props.$color};
    margin-bottom: 0.3rem;
  }

  span {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
  }
`;

const MindMapSection = styled(motion.div)`
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  border-radius: 20px;
  padding: 3rem;
  margin: 3rem 0;
  border: 4px dashed ${(props) => props.$color};
  position: relative;

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.$color};
    margin: 0 0 1rem 0;
    text-align: center;
  }
`;

const MindMapCenter = styled.div`
  background: ${(props) => props.$color};
  color: white;
  padding: 2rem;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 900;
  text-align: center;
  margin: 2rem auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

const MindMapBranches = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const BranchCard = styled(motion.div)`
  background: white;
  border: 3px solid ${(props) => props.$branchColor || props.$color};
  border-radius: 16px;
  padding: 1.5rem;

  h5 {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${(props) => props.$branchColor || props.$color};
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.4rem 0;
    font-size: 0.95rem;
    color: #555;

    &:before {
      content: "→";
      margin-right: 0.5rem;
      color: ${(props) => props.$branchColor || props.$color};
    }
  }
`;

const InterviewSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  margin: 3rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-top: 6px solid ${(props) => props.$color};
`;

const QuestionCategory = styled(motion.div)`
  margin: 2rem 0;
  padding: 1.5rem;
  background: ${(props) => props.$color}08;
  border-radius: 12px;
  border-left: 4px solid ${(props) => props.$color};

  h5 {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${(props) => props.$color};
    margin: 0 0 1rem 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.6rem 0;
    padding-left: 1.5rem;
    position: relative;
    font-size: 1.05rem;
    line-height: 1.6;
    color: #444;

    &:before {
      content: "?";
      position: absolute;
      left: 0;
      color: ${(props) => props.$color};
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

const SketchBox = styled(motion.div)`
  background: white;
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  position: relative;

  &:after {
    content: "✏️ Field Notes";
    position: absolute;
    top: -12px;
    right: 20px;
    background: white;
    padding: 0 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #666;
  }
`;

// AR Vision Layout (unique for COOKING island)
const ARVisionContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
  position: relative;
  overflow: hidden;
  padding: 2rem;
`;

const ARGrid = styled.div`
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(100, 200, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100, 200, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: gridMove 20s linear infinite;
  pointer-events: none;

  @keyframes gridMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(40px, 40px);
    }
  }
`;

const ARScanLine = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(100, 200, 255, 0.6) 50%,
    transparent 100%
  );
  box-shadow: 0 0 20px rgba(100, 200, 255, 0.8);
  pointer-events: none;
  z-index: 1000;
`;

const ARHUD = styled.div`
  position: fixed;
  inset: 20px;
  pointer-events: none;
  z-index: 999;
`;

const ARCorner = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;

  &.top-left {
    top: 0;
    left: 0;
    border-top: 3px solid rgba(255, 215, 0, 0.6);
    border-left: 3px solid rgba(255, 215, 0, 0.6);
  }

  &.top-right {
    top: 0;
    right: 0;
    border-top: 3px solid rgba(255, 215, 0, 0.6);
    border-right: 3px solid rgba(255, 215, 0, 0.6);
  }

  &.bottom-left {
    bottom: 0;
    left: 0;
    border-bottom: 3px solid rgba(255, 215, 0, 0.6);
    border-left: 3px solid rgba(255, 215, 0, 0.6);
  }

  &.bottom-right {
    bottom: 0;
    right: 0;
    border-bottom: 3px solid rgba(255, 215, 0, 0.6);
    border-right: 3px solid rgba(255, 215, 0, 0.6);
  }
`;

// Glasses Nose Bridge (to make it clear you're looking through glasses)
const GlassesFrame = styled(motion.div)`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2000;
`;

const NoseBridge = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 180px;
  background: linear-gradient(
    180deg,
    rgba(50, 50, 60, 0.95) 0%,
    rgba(40, 40, 50, 0.98) 50%,
    rgba(30, 30, 40, 1) 100%
  );
  clip-path: polygon(
    30% 0%,
    70% 0%,
    85% 20%,
    90% 40%,
    92% 60%,
    90% 80%,
    85% 90%,
    70% 100%,
    30% 100%,
    15% 90%,
    10% 80%,
    8% 60%,
    10% 40%,
    15% 20%
  );
  box-shadow:
    0 -10px 40px rgba(0, 0, 0, 0.8),
    inset 0 2px 10px rgba(100, 100, 120, 0.3);
  border-top: 2px solid rgba(100, 100, 120, 0.4);

  &:before {
    content: "";
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 40%;
    background: radial-gradient(
      ellipse at center,
      rgba(100, 100, 120, 0.2) 0%,
      transparent 70%
    );
  }
`;

const GlassesRim = styled.div`
  position: absolute;
  inset: 0;
  border: 8px solid rgba(40, 40, 50, 0.7);
  border-radius: 30px;
  box-shadow:
    inset 0 0 30px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(255, 215, 0, 0.1);
`;

const ARStatusBar = styled.div`
  position: absolute;
  top: 10px;
  right: 80px;
  display: flex;
  gap: 1.5rem;
  font-family: "Courier New", monospace;
  font-size: 0.85rem;
  color: rgba(255, 215, 0, 0.9);
`;

const ARContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 4rem;
`;

const ARHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 4rem;
    font-weight: 900;
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
    margin: 0 0 1rem 0;
  }

  h2 {
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }
`;

const ARPanel = styled(motion.div)`
  background: rgba(10, 20, 40, 0.85);
  backdrop-filter: blur(10px);
  border: 2px solid ${(props) => props.$borderColor || "rgba(255, 215, 0, 0.4)"};
  border-radius: 16px;
  padding: 2.5rem;
  margin: 2rem 0;
  box-shadow:
    0 0 30px ${(props) => props.$glowColor || "rgba(255, 215, 0, 0.2)"},
    inset 0 0 20px rgba(255, 215, 0, 0.05);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    height: 40%;
    background: linear-gradient(
      180deg,
      ${(props) => props.$glowColor || "rgba(255, 215, 0, 0.1)"} 0%,
      transparent 100%
    );
    border-radius: 16px 16px 0 0;
    pointer-events: none;
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.$titleColor || "#ffd700"};
    margin: 0 0 1.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-shadow: 0 0 10px
      ${(props) => props.$glowColor || "rgba(255, 215, 0, 0.5)"};
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.9);
    margin: 2rem 0 1rem 0;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.8);
    margin: 1rem 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }

  li {
    padding: 0.8rem 0 0.8rem 2rem;
    position: relative;
    font-size: 1.05rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);

    &:before {
      content: "▸";
      position: absolute;
      left: 0;
      color: ${(props) => props.$titleColor || "#ffd700"};
      font-weight: bold;
      font-size: 1.3rem;
    }
  }
`;

const ARHologramCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(100, 200, 255, 0.15) 0%,
    rgba(100, 200, 255, 0.05) 100%
  );
  border: 2px solid rgba(100, 200, 255, 0.4);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(100, 200, 255, 0.2);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(100, 200, 255, 0.6) 50%,
      transparent 100%
    );
  }

  h5 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #64c8ff;
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.75);
    margin: 0.5rem 0 0 0;
    line-height: 1.6;
  }
`;

const ARFeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ARFeatureCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 215, 0, 0.15) 0%,
    rgba(255, 215, 0, 0.05) 100%
  );
  border: 2px solid rgba(255, 215, 0, 0.5);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.2);
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 215, 0, 0.1) 0%,
      transparent 70%
    );
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  .icon {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    display: block;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
  }

  h5 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #ffd700;
    margin: 0 0 0.8rem 0;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }
`;

const ARVotingBadge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 215, 0, 0.2);
  border: 2px solid rgba(255, 215, 0, 0.6);
  border-radius: 20px;
  padding: 0.4rem 1rem;
  margin: 0.3rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffd700;

  .votes {
    background: rgba(255, 215, 0, 0.3);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
  }
`;

// 3D Pop-up Miniatures
const PopupContainer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1500;
`;

const FloatingPopup = styled(motion.div)`
  position: absolute;
  ${(props) => props.$position};
  pointer-events: auto;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const PopupMiniature = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(100, 200, 255, 0.25) 0%,
    rgba(100, 200, 255, 0.15) 100%
  );
  border: 3px solid rgba(100, 200, 255, 0.6);
  border-radius: 16px;
  padding: 1rem;
  box-shadow:
    0 10px 40px rgba(100, 200, 255, 0.4),
    0 0 20px rgba(100, 200, 255, 0.3),
    inset 0 0 20px rgba(100, 200, 255, 0.1);
  backdrop-filter: blur(10px);
  min-width: 150px;
  transform-style: preserve-3d;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 50%
    );
    border-radius: 16px;
    pointer-events: none;
  }

  .popup-icon {
    font-size: 2rem;
    display: block;
    margin-bottom: 0.5rem;
    text-align: center;
    filter: drop-shadow(0 0 10px rgba(100, 200, 255, 0.8));
  }

  .popup-title {
    font-size: 0.9rem;
    font-weight: 700;
    color: #64c8ff;
    text-align: center;
    text-shadow: 0 0 10px rgba(100, 200, 255, 0.8);
  }

  .popup-count {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    margin-top: 0.3rem;
  }

  img {
    width: 100%;
    border-radius: 8px;
    display: block;
  }
`;

const ExpandedPopup = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  max-height: 90vh;
  background: rgba(10, 20, 40, 0.95);
  border: 4px solid rgba(100, 200, 255, 0.8);
  border-radius: 24px;
  padding: 2rem;
  box-shadow:
    0 20px 80px rgba(100, 200, 255, 0.6),
    0 0 40px rgba(100, 200, 255, 0.4),
    inset 0 0 40px rgba(100, 200, 255, 0.1);
  z-index: 3000;
  overflow: auto;
  backdrop-filter: blur(20px);

  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 100, 100, 0.3);
    border: 2px solid rgba(255, 100, 100, 0.6);
    color: #ff6464;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
    pointer-events: auto;

    &:hover {
      background: rgba(255, 100, 100, 0.5);
      transform: scale(1.1);
    }
  }
`;

const ARButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  margin: 3rem auto;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);

  &:hover {
    box-shadow: 0 12px 32px rgba(102, 126, 234, 0.6);
  }
`;

const Placeholder = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 20px;
  border: 2px dashed ${(props) => props.$color}40;

  p {
    font-size: 1.1rem;
    color: #999;
    margin: 1rem 0 0 0;
  }
`;

export default function IslandContent({ island, onARClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const renderPhotos = () => {
    if (!island.images || island.images.length === 0) {
      return (
        <>
          {island.hasAREffect && (
            <ARButton
              onClick={onARClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span>👓</span> View in AR Mode
            </ARButton>
          )}
          <Placeholder $color={island.color}>
            <span style={{ fontSize: "3rem" }}>📷</span>
            <p>Add your photos to /public/images/chef-journey/{island.id}/</p>
          </Placeholder>
        </>
      );
    }

    if (island.layoutType === "masonry") {
      return (
        <MasonryGrid>
          {island.images.map((img, idx) => (
            <MasonryItem
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <img src={img} alt={`${island.title} - ${idx + 1}`} />
            </MasonryItem>
          ))}
        </MasonryGrid>
      );
    }

    if (island.layoutType === "showcase") {
      return (
        <ShowcaseContainer>
          {island.images[0] && (
            <HeroImage
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={island.images[0]} alt={`${island.title} - Hero`} />
            </HeroImage>
          )}

          {island.hasAREffect && (
            <ARButton
              onClick={onARClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span>👓</span> View in AR Mode
            </ARButton>
          )}

          {island.images.length > 1 && (
            <SecondaryImages>
              {island.images.slice(1, 7).map((img, idx) => (
                <PhotoCard
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <img src={img} alt={`${island.title} - ${idx + 2}`} />
                </PhotoCard>
              ))}
            </SecondaryImages>
          )}
        </ShowcaseContainer>
      );
    }

    // Default: Grid
    return (
      <GridPhotos>
        {island.images.map((img, idx) => (
          <PhotoCard
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <img src={img} alt={`${island.title} - ${idx + 1}`} />
          </PhotoCard>
        ))}
      </GridPhotos>
    );
  };

  // Special render for AR Vision layout (COOKING island)
  if (island.layoutType === "arvision" && island.prototype) {
    const [scanY, setScanY] = useState(0);
    const [expandedPopup, setExpandedPopup] = useState(null);

    useEffect(() => {
      const interval = setInterval(() => {
        setScanY((prev) => (prev + 1) % 100);
      }, 30);
      return () => clearInterval(interval);
    }, []);

    // Pop-up positions (random but fixed)
    const popupPositions = [
      { top: "15%", right: "10%" },
      { top: "40%", left: "8%" },
      { bottom: "25%", right: "12%" },
      { top: "60%", right: "15%" },
      { bottom: "35%", left: "10%" },
    ];

    return (
      <ARVisionContainer>
        <ARGrid />

        <ARScanLine
          style={{ top: `${scanY}%` }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Glasses Frame with Nose Bridge - Animation of putting on glasses */}
        <GlassesFrame
          initial={{ scale: 3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <GlassesRim />
          <NoseBridge />
        </GlassesFrame>

        <ARHUD>
          <ARCorner className="top-left" />
          <ARCorner className="top-right" />
          <ARCorner className="bottom-left" />
          <ARCorner className="bottom-right" />

          <ARStatusBar>
            <span>👓 AR MODE</span>
            <span>⚡ ACTIVE</span>
            <span>📡 CONNECTED</span>
          </ARStatusBar>
        </ARHUD>

        {/* 3D Floating Pop-ups */}
        <PopupContainer>
          {/* Top Voted Ideas Pop-up */}
          {island.voting && island.voting.topVoted && (
            <FloatingPopup
              $position={`top: ${popupPositions[0].top}; right: ${popupPositions[0].right};`}
            >
              <PopupMiniature
                initial={{ scale: 0, rotateY: -90 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{
                  scale: 4,
                  rotateY: 10,
                  z: 100,
                  transition: { duration: 0.4 },
                }}
                onClick={() => setExpandedPopup("voting")}
              >
                <span className="popup-icon">🗳️</span>
                <div className="popup-title">Voting Results</div>
                <div className="popup-count">
                  {island.voting.topVoted.length} ideas
                </div>
              </PopupMiniature>
            </FloatingPopup>
          )}
        </PopupContainer>

        {/* Expanded Pop-up Modal */}
        <AnimatePresence>
          {expandedPopup && (
            <ExpandedPopup
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={() => setExpandedPopup(null)}
            >
              <div className="close-btn">×</div>
              {expandedPopup === "voting" ? (
                <div>
                  <h2
                    style={{
                      color: "#64c8ff",
                      marginBottom: "2rem",
                      textAlign: "center",
                      fontSize: "2.5rem",
                    }}
                  >
                    🗳️ Voting Results
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1rem",
                      justifyContent: "center",
                    }}
                  >
                    {island.voting.topVoted.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "rgba(100, 200, 255, 0.2)",
                          border: `3px solid ${item.votes >= 3 ? "rgba(255, 215, 0, 0.8)" : "rgba(100, 200, 255, 0.6)"}`,
                          padding: "1rem 1.5rem",
                          borderRadius: "16px",
                          fontSize: "1.2rem",
                          color: item.votes >= 3 ? "#ffd700" : "#64c8ff",
                          fontWeight: 700,
                          textShadow: "0 0 10px rgba(100, 200, 255, 0.5)",
                        }}
                      >
                        {item.idea}{" "}
                        {item.votes > 0 &&
                          `(${item.votes} ${item.votes === 1 ? "vote" : "votes"})`}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <img
                  src={island.images[parseInt(expandedPopup.split("-")[1])]}
                  alt="Expanded view"
                />
              )}
            </ExpandedPopup>
          )}
        </AnimatePresence>

        <ARContent>
          <ARHeader
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>
              {island.icon} {island.title}
            </h1>
            <h2>{island.subtitle}</h2>
            <p>{island.classes}</p>
          </ARHeader>

          {/* INTENT STATEMENT */}
          <ARPanel
            $borderColor="rgba(100, 200, 255, 0.5)"
            $glowColor="rgba(100, 200, 255, 0.2)"
            $titleColor="#64c8ff"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>🎯 Intent Statement</h3>
            <p>
              <strong>Intention:</strong> {island.intentStatement.intention}
            </p>
            <p>
              <strong>Opportunities:</strong>{" "}
              {island.intentStatement.opportunities}
            </p>
            <p>
              <strong>New Value:</strong> {island.intentStatement.newValue}
            </p>
            <p>
              <strong>Public:</strong> {island.intentStatement.public}
            </p>
            <p>
              <strong>Risks:</strong> {island.intentStatement.risks}
            </p>
          </ARPanel>

          {/* HMW QUESTIONS */}
          <ARPanel
            $borderColor="rgba(255, 215, 0, 0.5)"
            $glowColor="rgba(255, 215, 0, 0.2)"
            $titleColor="#ffd700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>❓ How Might We Questions</h3>
            {island.hmwQuestions.map((hmw, idx) => (
              <ARHologramCard
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(100, 200, 255, 0.4)",
                }}
              >
                <h5>
                  HMW #{idx + 1}: {hmw.focus}
                </h5>
                <p>{hmw.question}</p>
              </ARHologramCard>
            ))}
          </ARPanel>

          {/* BRAINWRITING */}
          <ARPanel
            $borderColor="rgba(147, 51, 234, 0.5)"
            $glowColor="rgba(147, 51, 234, 0.2)"
            $titleColor="#c084fc"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3>🧠 Brainwriting Session</h3>
            <p>
              <strong>Approach:</strong> {island.brainwriting.approach}
            </p>

            <h4>Rules:</h4>
            <ul>
              {island.brainwriting.rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>

            <h4>Analogical Thinking:</h4>
            <p>{island.brainwriting.analogies.description}</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
                margin: "1rem 0",
              }}
            >
              {island.brainwriting.analogies.examples.map((ex, idx) => (
                <span
                  key={idx}
                  style={{
                    background: "rgba(147, 51, 234, 0.2)",
                    border: "2px solid rgba(147, 51, 234, 0.5)",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    color: "#c084fc",
                    fontWeight: 600,
                  }}
                >
                  {ex}
                </span>
              ))}
            </div>

            <h4>
              Ideas Generated ({island.brainwriting.ideasGenerated.length}+):
            </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                margin: "1rem 0",
              }}
            >
              {island.brainwriting.ideasGenerated.map((idea, idx) => (
                <motion.span
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.9)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  whileHover={{
                    scale: 1.1,
                    background: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {idea}
                </motion.span>
              ))}
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.6)",
                marginTop: "1rem",
              }}
            >
              <em>{island.brainwriting.note}</em>
            </p>
          </ARPanel>

          {/* VOTING RESULTS */}
          <ARPanel
            $borderColor="rgba(34, 197, 94, 0.5)"
            $glowColor="rgba(34, 197, 94, 0.2)"
            $titleColor="#4ade80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>🗳️ Voting Results</h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              {island.voting.topVoted.map((item, idx) => (
                <ARVotingBadge
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    borderColor:
                      item.votes >= 3
                        ? "rgba(255, 215, 0, 0.8)"
                        : item.votes >= 2
                          ? "rgba(255, 215, 0, 0.6)"
                          : "rgba(255, 215, 0, 0.4)",
                  }}
                >
                  <span>{item.idea}</span>
                  {item.votes > 0 && (
                    <span className="votes">{item.votes}</span>
                  )}
                </ARVotingBadge>
              ))}
            </div>
          </ARPanel>

          {/* PROTOTYPE */}
          <ARPanel
            $borderColor="rgba(255, 215, 0, 0.8)"
            $glowColor="rgba(255, 215, 0, 0.3)"
            $titleColor="#ffd700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>👓 {island.prototype.title}</h3>
            <p
              style={{
                fontSize: "1.3rem",
                fontStyle: "italic",
                marginBottom: "2rem",
              }}
            >
              {island.prototype.description}
            </p>

            <ARFeatureGrid>
              {island.prototype.mainFeatures.map((feature, idx) => (
                <ARFeatureCard
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -10 }}
                >
                  <span className="icon">{feature.icon}</span>
                  <h5>{feature.feature}</h5>
                  <p>{feature.description}</p>
                </ARFeatureCard>
              ))}
            </ARFeatureGrid>

            <div
              style={{
                background: "rgba(255, 215, 0, 0.15)",
                border: "2px solid rgba(255, 215, 0, 0.5)",
                borderRadius: "12px",
                padding: "1.5rem",
                marginTop: "2rem",
              }}
            >
              <h4 style={{ color: "#ffd700" }}>💭 User Scenario</h4>
              <p>{island.prototype.userScenario}</p>
            </div>
          </ARPanel>

          {/* REFLECTIONS */}
          {island.reflections && (
            <ARPanel
              $borderColor="rgba(236, 72, 153, 0.5)"
              $glowColor="rgba(236, 72, 153, 0.2)"
              $titleColor="#f472b6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3>💭 Critical Reflections</h3>
              {island.reflections.map((reflection, idx) => (
                <ARHologramCard
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <h5>{reflection.topic}</h5>
                  <p>{reflection.text}</p>
                </ARHologramCard>
              ))}
            </ARPanel>
          )}

          {/* LEARNINGS */}
          {island.learnings && (
            <ARPanel
              $borderColor="rgba(59, 130, 246, 0.5)"
              $glowColor="rgba(59, 130, 246, 0.2)"
              $titleColor="#60a5fa"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>📚 Key Learnings</h3>
              <ul>
                {island.learnings.map((learning, idx) => (
                  <li key={idx}>{learning}</li>
                ))}
              </ul>
            </ARPanel>
          )}

          {/* PHOTOS */}
          {island.images && island.images.length > 0 && (
            <ARPanel
              $borderColor="rgba(168, 85, 247, 0.5)"
              $glowColor="rgba(168, 85, 247, 0.2)"
              $titleColor="#a855f7"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3>📸 Documentation</h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "1.5rem",
                  marginTop: "2rem",
                }}
              >
                {island.images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "2px solid rgba(168, 85, 247, 0.5)",
                      boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
                    }}
                  >
                    <img
                      src={img}
                      alt={`${island.title} - ${idx + 1}`}
                      style={{ width: "100%", display: "block" }}
                    />
                  </motion.div>
                ))}
              </div>
            </ARPanel>
          )}
        </ARContent>
      </ARVisionContainer>
    );
  }

  // Special render for notebook layout (TASTING island)
  if (island.layoutType === "notebook" && island.researchTools) {
    const colors = {
      green: "#4caf50",
      pink: "#e91e63",
      blue: "#2196f3",
      red: "#f44336",
      yellow: "#ffc107",
    };

    return (
      <ContentContainer
        $color={island.color}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Header>
          <Icon variants={itemVariants}>{island.icon}</Icon>
          <Title $color={island.color} variants={itemVariants}>
            {island.title}
          </Title>
          <Subtitle variants={itemVariants}>{island.subtitle}</Subtitle>
          <Classes variants={itemVariants}>{island.classes}</Classes>
          {island.note && (
            <p
              style={{
                fontSize: "0.95rem",
                color: "#999",
                fontStyle: "italic",
                marginTop: "0.5rem",
              }}
            >
              Note: {island.note}
            </p>
          )}
        </Header>

        <Description variants={itemVariants}>{island.description}</Description>

        <NotebookPage>
          <NotebookHeader $color={island.color}>
            <h3>📓 Field Research Journal</h3>
            <p>Class Objective: {island.classObjective}</p>
          </NotebookHeader>

          {/* DIVERGENCE vs CONVERGENCE */}
          <ToolsGrid>
            <ToolBox
              $color="#ff6b6b"
              $label="DIVERGENCE"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4>{island.researchTools.divergence.title}</h4>
              <p>{island.researchTools.divergence.subtitle}</p>
              {island.researchTools.divergence.tools.map((tool, idx) => (
                <ToolItem key={idx} $color="#ff6b6b">
                  <strong>{tool.name}</strong>
                  <span>{tool.description}</span>
                </ToolItem>
              ))}
            </ToolBox>

            <ToolBox
              $color="#4ecdc4"
              $label="CONVERGENCE"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4>{island.researchTools.convergence.title}</h4>
              <p>{island.researchTools.convergence.subtitle}</p>
              {island.researchTools.convergence.tools.map((tool, idx) => (
                <ToolItem key={idx} $color="#4ecdc4">
                  <strong>{tool.name}</strong>
                  <span>{tool.description}</span>
                </ToolItem>
              ))}
            </ToolBox>
          </ToolsGrid>

          {/* MEGA TRENDS POST-IT */}
          <PostItNote
            $bgColor="#fff59d"
            $rotate={-1}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <h4>🌍 Mega-Trends Explored</h4>
            <div style={{ columnCount: 2, columnGap: "2rem" }}>
              {island.megaTrends.explored.map((trend, idx) => (
                <div key={idx} style={{ marginBottom: "0.5rem" }}>
                  • {trend}
                </div>
              ))}
            </div>
            <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
              <em>{island.megaTrends.visualization}</em>
            </p>
          </PostItNote>

          {/* OPPORTUNITY MIND MAP */}
          <MindMapSection
            $color={island.color}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>🗺️ {island.opportunityMindMap.title}</h3>

            <PostItNote
              $bgColor="#e1f5fe"
              $rotate={0.5}
              style={{ margin: "2rem auto", maxWidth: "600px" }}
            >
              <h4>Instructions:</h4>
              <ol style={{ paddingLeft: "1.2rem" }}>
                {island.opportunityMindMap.instructions.map(
                  (instruction, idx) => (
                    <li key={idx} style={{ marginBottom: "0.5rem" }}>
                      {instruction}
                    </li>
                  )
                )}
              </ol>
            </PostItNote>

            <MindMapCenter $color={island.color}>
              {island.opportunityMindMap.central}
            </MindMapCenter>

            <MindMapBranches>
              {island.opportunityMindMap.categories.map((category, idx) => (
                <BranchCard
                  key={idx}
                  $color={island.color}
                  $branchColor={colors[category.color]}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h5>
                    <span style={{ fontSize: "1.5rem" }}>●</span>{" "}
                    {category.name}
                  </h5>
                  <ul>
                    {category.branches.map((branch, bidx) => (
                      <li key={bidx}>{branch}</li>
                    ))}
                  </ul>
                </BranchCard>
              ))}
            </MindMapBranches>

            {/* Mind Map Photo */}
            {island.images && island.images[0] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  margin: "2rem auto",
                  maxWidth: "900px",
                  textAlign: "center",
                }}
              >
                <img
                  src={island.images[0]}
                  alt="Opportunity Mind Map"
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                    boxShadow: `0 15px 50px ${island.color}40`,
                    border: `3px solid ${island.color}50`,
                  }}
                />
                <p
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.95rem",
                    color: "rgba(0, 0, 0, 0.6)",
                    fontStyle: "italic",
                  }}
                >
                  Our Opportunity Mind Map exploring the Future of Work theme
                </p>
              </motion.div>
            )}

            <HighlightBox $color={island.color} style={{ marginTop: "2rem" }}>
              <h4>💡 Key Insight</h4>
              <p>{island.opportunityMindMap.keyInsight}</p>
            </HighlightBox>
          </MindMapSection>

          {/* CHALLENGE FRAMING */}
          <SketchBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 style={{ color: island.color, marginBottom: "1rem" }}>
              🎯 Challenge Framing (IDEO Framework)
            </h4>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#666",
                marginBottom: "1rem",
              }}
            >
              <em>Source: {island.challengeFraming.source}</em>
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {island.challengeFraming.questions.map((q, idx) => (
                <li
                  key={idx}
                  style={{
                    padding: "0.8rem 0",
                    borderBottom: "1px dashed #ddd",
                  }}
                >
                  <strong style={{ color: island.color }}>{idx + 1}.</strong>{" "}
                  {q}
                </li>
              ))}
            </ul>
          </SketchBox>

          {/* USER VS CLIENT */}
          <PostItNote
            $bgColor="#ffccbc"
            $rotate={-0.5}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4>👥 {island.userVsClient.title}</h4>
            <p>
              <strong>Analogy:</strong> {island.userVsClient.analogy}
            </p>
            <p style={{ marginTop: "1rem", fontWeight: 600 }}>
              💡 {island.userVsClient.lesson}
            </p>
          </PostItNote>
        </NotebookPage>

        {/* FIELD RESEARCH & INTERVIEWS */}
        <InterviewSection $color={island.color}>
          <SectionTitle $color={island.color}>
            <span>🎤</span> {island.fieldResearch.title}
          </SectionTitle>

          <div style={{ marginBottom: "2rem" }}>
            <p>
              <strong>Research Contexts:</strong>
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "0.5rem",
              }}
            >
              {island.fieldResearch.contexts.map((context, idx) => (
                <span
                  key={idx}
                  style={{
                    background: `${island.color}15`,
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    border: `2px solid ${island.color}`,
                    fontWeight: 600,
                  }}
                >
                  {context}
                </span>
              ))}
            </div>
          </div>

          <TwoColumn>
            <PostItNote $bgColor="#b2dfdb" $rotate={-0.5}>
              <h4>✅ Structured Approach</h4>
              <ul style={{ paddingLeft: "1.2rem" }}>
                {island.fieldResearch.approach.structured.pros.map(
                  (pro, idx) => (
                    <li key={idx}>{pro}</li>
                  )
                )}
              </ul>
            </PostItNote>

            <PostItNote $bgColor="#ffecb3" $rotate={0.5}>
              <h4>✨ Unstructured Approach</h4>
              <ul style={{ paddingLeft: "1.2rem" }}>
                {island.fieldResearch.approach.unstructured.pros.map(
                  (pro, idx) => (
                    <li key={idx}>{pro}</li>
                  )
                )}
              </ul>
            </PostItNote>
          </TwoColumn>

          <HighlightBox $color={island.color}>
            <h4>Our Approach: {island.fieldResearch.chosen}</h4>
            <p>
              <strong>Storytelling Tip:</strong> "
              {island.fieldResearch.storytellingTip}"
            </p>
          </HighlightBox>

          <h4
            style={{
              fontSize: "1.8rem",
              color: island.color,
              marginTop: "3rem",
              marginBottom: "1.5rem",
            }}
          >
            📋 Interview Questions (Theme: {island.interviewQuestions.theme})
          </h4>

          {island.interviewQuestions.sections.map((section, idx) => (
            <QuestionCategory
              key={idx}
              $color={island.color}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h5>{section.category}</h5>
              <ul>
                {section.questions.map((q, qidx) => (
                  <li key={qidx}>{q}</li>
                ))}
              </ul>
            </QuestionCategory>
          ))}
        </InterviewSection>

        {/* LEARNINGS */}
        {island.learnings && (
          <Section variants={itemVariants} $color={island.color}>
            <SectionTitle $color={island.color}>
              <span>📚</span> Key Learnings
            </SectionTitle>
            <List>
              {island.learnings.map((learning, idx) => (
                <ListItem key={idx} $color={island.color} $icon="→">
                  {learning}
                </ListItem>
              ))}
            </List>
          </Section>
        )}

        {/* PHOTOS */}
        <Section variants={itemVariants} $color={island.color}>
          <SectionTitle $color={island.color}>
            <span>📸</span> Documentation
          </SectionTitle>
          <motion.div>{renderPhotos()}</motion.div>
        </Section>
      </ContentContainer>
    );
  }

  // Special render for timeline layout (PREPPING island)
  if (island.layoutType === "timeline" && island.class1 && island.class2) {
    return (
      <ContentContainer
        $color={island.color}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Header>
          <Icon variants={itemVariants}>{island.icon}</Icon>
          <Title $color={island.color} variants={itemVariants}>
            {island.title}
          </Title>
          <Subtitle variants={itemVariants}>{island.subtitle}</Subtitle>
          <Classes variants={itemVariants}>{island.classes}</Classes>
        </Header>

        <Description variants={itemVariants}>{island.description}</Description>

        {/* TIMELINE */}
        <TimelineContainer>
          <TimelineLine $color={island.color} />

          {/* CLASS 1 - Right side */}
          <TimelineItem
            className="right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TimelineDot $color={island.color} />
            <TimelineDate $color={island.color}>
              {island.class1.date}
            </TimelineDate>

            <TimelineContent $color={island.color}>
              <h3>{island.class1.title}</h3>

              <h4>🎯 {island.class1.icebreaker.title}</h4>
              <p>{island.class1.icebreaker.description}</p>
              <ul>
                {island.class1.icebreaker.roles.map((role, idx) => (
                  <li key={idx}>{role}</li>
                ))}
              </ul>
              <HighlightBox $color={island.color}>
                <h4>Outcome: {island.class1.icebreaker.teamName}</h4>
                <p>{island.class1.icebreaker.outcome}</p>
                <p style={{ marginTop: "1rem" }}>
                  {island.class1.icebreaker.reflection}
                </p>
              </HighlightBox>

              <h4>📚 {island.class1.theory.title}</h4>
              <p>
                <strong>Timeline:</strong>
              </p>
              <ul>
                {island.class1.theory.timeline.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <p>
                <strong>Core Principles:</strong>
              </p>
              <ul>
                {island.class1.theory.corePrinciples.map((principle, idx) => (
                  <li key={idx}>{principle}</li>
                ))}
              </ul>

              {/* Photo 1 - Team photo */}
              {island.images && island.images[0] && (
                <TimelinePhoto
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <img src={island.images[0]} alt="Team - Pasta Lovers" />
                </TimelinePhoto>
              )}
            </TimelineContent>

            <TimelineEmpty />
          </TimelineItem>

          {/* CLASS 2 - Left side */}
          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TimelineDot $color={island.color} />
            <TimelineDate $color={island.color}>
              {island.class2.date}
            </TimelineDate>

            <TimelineEmpty />

            <TimelineContent $color={island.color}>
              <h3>{island.class2.title}</h3>

              <h4>🔍 {island.class2.modelsAnalyzed.title}</h4>
              <ModelGrid>
                {island.class2.modelsAnalyzed.models.map((model, idx) => (
                  <ModelCard
                    key={idx}
                    $color={island.color}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <h5>{model.name}</h5>
                    <p>
                      <strong>Origin:</strong> {model.origin}
                    </p>
                    <p>
                      <strong>Focus:</strong> {model.focus}
                    </p>
                  </ModelCard>
                ))}
              </ModelGrid>

              <h4>🗺️ {island.class2.ourModel.title}</h4>
              <p>{island.class2.ourModel.description}</p>
              <HighlightBox $color={island.color}>
                <h4>Key Concept</h4>
                <p>{island.class2.ourModel.concept}</p>
              </HighlightBox>

              <p>
                <strong>Our 7 Islands:</strong>
              </p>
              <ul>
                {island.class2.ourModel.originalIslands.map(
                  (islandName, idx) => (
                    <li key={idx}>{islandName}</li>
                  )
                )}
              </ul>

              <HighlightBox $color={island.color}>
                <h4>The Non-Linear Insight</h4>
                <p>{island.class2.ourModel.keyInsight}</p>
              </HighlightBox>

              {/* Photo 2 - Chef's Journey Map */}
              {island.images && island.images[1] && (
                <TimelinePhoto
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <img
                    src={island.images[1]}
                    alt="Chef's Journey Process Model"
                  />
                </TimelinePhoto>
              )}
            </TimelineContent>
          </TimelineItem>
        </TimelineContainer>

        {/* REFLECTIONS */}
        {island.reflections && (
          <Section variants={itemVariants} $color={island.color}>
            <SectionTitle $color={island.color}>
              <span>💭</span> Critical Reflections
            </SectionTitle>
            {island.reflections.map((reflection, idx) => (
              <HighlightBox
                key={idx}
                $color={island.color}
                style={{ marginBottom: "1.5rem" }}
              >
                <h4>{reflection.topic}</h4>
                <p>{reflection.text}</p>
              </HighlightBox>
            ))}
          </Section>
        )}

        {/* LEARNINGS */}
        {island.learnings && (
          <Section variants={itemVariants} $color={island.color}>
            <SectionTitle $color={island.color}>
              <span>📚</span> Key Learnings
            </SectionTitle>
            <List>
              {island.learnings.map((learning, idx) => (
                <ListItem key={idx} $color={island.color} $icon="→">
                  {learning}
                </ListItem>
              ))}
            </List>
          </Section>
        )}

        {/* No separate photos section for timeline layout - photos are integrated into timeline */}
      </ContentContainer>
    );
  }

  // ============================================
  // PRESENTATION LAYOUT (PLATING & SERVING - Class 5)
  // ============================================
  if (island.layoutType === "presentation" && island.class5) {
    const StageContainer = styled(motion.div)`
      width: 100%;
      min-height: 100vh;
      background: linear-gradient(
        135deg,
        #1a1a2e 0%,
        #16213e 50%,
        #0f3460 100%
      );
      padding: 4rem 2rem;
      position: relative;
      overflow: hidden;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 150px;
        background: radial-gradient(
          ellipse at top,
          rgba(255, 215, 0, 0.15) 0%,
          transparent 70%
        );
        pointer-events: none;
      }
    `;

    const StageSpotlight = styled(motion.div)`
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(
        circle,
        rgba(255, 215, 0, 0.2) 0%,
        transparent 70%
      );
      pointer-events: none;
      filter: blur(40px);
    `;

    const StageHeader = styled(motion.header)`
      text-align: center;
      margin-bottom: 4rem;
      position: relative;
      z-index: 2;

      h1 {
        font-size: 4rem;
        font-weight: 900;
        background: linear-gradient(135deg, #ffd700, #ffed4e, #ffd700);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
        text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
      }

      p {
        font-size: 1.5rem;
        color: #a8e6cf;
        font-weight: 300;
        margin: 0.5rem 0;
      }

      .date {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.6);
        font-style: italic;
      }
    `;

    const PresentationContent = styled.div`
      max-width: 1400px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    `;

    const PresentationPanel = styled(motion.div)`
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.05) 100%
      );
      backdrop-filter: blur(10px);
      border: 2px solid
        ${(props) => props.$borderColor || "rgba(168, 230, 207, 0.3)"};
      border-radius: 20px;
      padding: 3rem;
      margin-bottom: 3rem;
      box-shadow:
        0 10px 40px rgba(0, 0, 0, 0.3),
        0 0 20px ${(props) => props.$glowColor || "rgba(168, 230, 207, 0.2)"};
      position: relative;
      overflow: hidden;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background: linear-gradient(
          135deg,
          ${(props) => props.$glowColor || "rgba(168, 230, 207, 0.05)"} 0%,
          transparent 50%
        );
        pointer-events: none;
      }

      h2 {
        font-size: 2.5rem;
        color: ${(props) => props.$titleColor || "#a8e6cf"};
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 800;
      }

      h3 {
        font-size: 1.8rem;
        color: ${(props) => props.$titleColor || "#a8e6cf"};
        margin: 2rem 0 1rem 0;
        font-weight: 700;
      }

      p {
        font-size: 1.1rem;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 1.5rem;
      }
    `;

    const QuoteBox = styled(motion.div)`
      background: linear-gradient(
        135deg,
        rgba(255, 215, 0, 0.15),
        rgba(255, 215, 0, 0.05)
      );
      border-left: 5px solid #ffd700;
      padding: 1.5rem 2rem;
      margin: 1.5rem 0;
      border-radius: 10px;
      font-style: italic;

      .quote-text {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.95);
        line-height: 1.7;
        margin-bottom: 0.8rem;
      }

      .quote-author {
        font-size: 1rem;
        color: #ffd700;
        font-weight: 600;
        text-align: right;
      }
    `;

    const StoryFlowContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin: 2rem 0;
    `;

    const StoryStage = styled(motion.div)`
      background: linear-gradient(
        135deg,
        rgba(100, 200, 255, 0.1),
        rgba(100, 200, 255, 0.05)
      );
      border: 2px solid rgba(100, 200, 255, 0.3);
      border-radius: 15px;
      padding: 2rem;

      h4 {
        font-size: 1.5rem;
        color: #64c8ff;
        margin-bottom: 1rem;
        font-weight: 700;
      }

      .symbols {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        font-size: 3rem;
      }

      .symbol-text {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 1rem;
        line-height: 1.6;
      }
    `;

    const BusinessModelGrid = styled.div`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin: 2rem 0;

      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `;

    const BMCard = styled(motion.div)`
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.08),
        rgba(255, 255, 255, 0.03)
      );
      border: 2px solid rgba(168, 230, 207, 0.3);
      border-radius: 12px;
      padding: 1.5rem;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(168, 230, 207, 0.2);
        border-color: rgba(168, 230, 207, 0.6);
      }

      h4 {
        font-size: 1.3rem;
        color: #a8e6cf;
        margin-bottom: 1rem;
        font-weight: 700;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      li {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 0.5rem;
        line-height: 1.5;
      }
    `;

    const BMImageContainer = styled(motion.div)`
      grid-column: 1 / -1;
      background: linear-gradient(
        135deg,
        rgba(255, 215, 0, 0.1),
        rgba(255, 215, 0, 0.05)
      );
      border: 3px solid rgba(255, 215, 0, 0.4);
      border-radius: 20px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 15px 50px rgba(255, 215, 0, 0.2);

      h3 {
        font-size: 2rem;
        color: #ffd700;
        margin-bottom: 2rem;
        font-weight: 800;
      }

      img {
        width: 100%;
        max-width: 1200px;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        border: 3px solid rgba(255, 255, 255, 0.1);
      }

      p {
        margin-top: 1.5rem;
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.7);
        font-style: italic;
      }
    `;

    const ElevatorPitchBox = styled(motion.div)`
      background: linear-gradient(
        135deg,
        rgba(255, 107, 107, 0.15),
        rgba(255, 107, 107, 0.05)
      );
      border: 3px solid rgba(255, 107, 107, 0.4);
      border-radius: 20px;
      padding: 2.5rem;
      margin: 2rem 0;

      h3 {
        font-size: 2rem;
        color: #ff6b6b;
        margin-bottom: 1.5rem;
        font-weight: 800;
      }

      .pitch-steps {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .pitch-step {
        background: rgba(255, 255, 255, 0.05);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        border-left: 4px solid #ff6b6b;
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.9);
      }

      .challenge-note {
        background: rgba(255, 215, 0, 0.1);
        border: 2px solid rgba(255, 215, 0, 0.3);
        border-radius: 10px;
        padding: 1.5rem;
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.7;
      }
    `;

    const ReflectionGrid = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 2rem 0;
    `;

    const ReflectionCard = styled(motion.div)`
      background: linear-gradient(
        135deg,
        rgba(138, 43, 226, 0.15),
        rgba(138, 43, 226, 0.05)
      );
      border: 2px solid rgba(138, 43, 226, 0.4);
      border-radius: 15px;
      padding: 2rem;

      h4 {
        font-size: 1.5rem;
        color: #ba55d3;
        margin-bottom: 1rem;
        font-weight: 700;
      }

      p {
        font-size: 1.05rem;
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.7;
      }
    `;

    const LearningsList = styled.ul`
      list-style: none;
      padding: 0;
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.08),
          rgba(255, 255, 255, 0.03)
        );
        padding: 1.2rem 1.5rem;
        border-radius: 10px;
        border-left: 4px solid #a8e6cf;
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.6;
        transition: all 0.3s;

        &:hover {
          transform: translateX(10px);
          border-left-color: #ffd700;
          background: linear-gradient(
            135deg,
            rgba(255, 215, 0, 0.1),
            rgba(255, 215, 0, 0.05)
          );
        }
      }
    `;

    const PhotoGallery = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 2rem 0;

      .photo-item {
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transition: all 0.3s;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 50px rgba(168, 230, 207, 0.3);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }
    `;

    return (
      <StageContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Spotlights */}
        <StageSpotlight
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -150, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ top: "10%", left: "20%" }}
        />
        <StageSpotlight
          animate={{
            x: [0, -200, 150, 0],
            y: [0, 100, -80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ top: "50%", right: "15%" }}
        />

        {/* Stage Header */}
        <StageHeader
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1>
            {island.icon} {island.title}
          </h1>
          <p>{island.subtitle}</p>
          <p className="date">{island.classes}</p>
        </StageHeader>

        <PresentationContent>
          {/* Storytelling Theory */}
          <PresentationPanel
            $borderColor="rgba(255, 215, 0, 0.4)"
            $glowColor="rgba(255, 215, 0, 0.1)"
            $titleColor="#ffd700"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2>📖 {island.class5.storytellingTheory.title}</h2>
            <p>{island.class5.storytellingTheory.importance}</p>

            {island.class5.storytellingTheory.quotes.map((quote, idx) => (
              <QuoteBox
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.2 }}
              >
                <div className="quote-text">"{quote.text}"</div>
                <div className="quote-author">— {quote.author}</div>
              </QuoteBox>
            ))}
          </PresentationPanel>

          {/* Visual Storytelling */}
          <PresentationPanel
            $borderColor="rgba(100, 200, 255, 0.4)"
            $glowColor="rgba(100, 200, 255, 0.1)"
            $titleColor="#64c8ff"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2>🎨 {island.class5.visualStorytelling.title}</h2>
            <p>{island.class5.visualStorytelling.description}</p>

            <StoryFlowContainer>
              {island.class5.visualStorytelling.ourStory.map((stage, idx) => (
                <StoryStage
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + idx * 0.3 }}
                >
                  <h4>{stage.stage}</h4>
                  <div className="symbols">
                    {stage.symbols.map((symbol, sIdx) => (
                      <span key={sIdx}>{symbol}</span>
                    ))}
                  </div>
                </StoryStage>
              ))}
            </StoryFlowContainer>

            <p
              style={{
                fontStyle: "italic",
                color: "rgba(255, 255, 255, 0.7)",
                marginTop: "2rem",
              }}
            >
              {island.class5.visualStorytelling.reflection}
            </p>

            {/* Visual Storytelling Photo */}
            {island.images && island.images[0] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                style={{ marginTop: "2rem", textAlign: "center" }}
              >
                <img
                  src={island.images[0]}
                  alt="Visual Storytelling"
                  style={{
                    width: "100%",
                    maxWidth: "800px",
                    borderRadius: "15px",
                    boxShadow: "0 15px 50px rgba(100, 200, 255, 0.3)",
                    border: "3px solid rgba(100, 200, 255, 0.3)",
                  }}
                />
              </motion.div>
            )}
          </PresentationPanel>

          {/* Visual Business Model */}
          <PresentationPanel
            $borderColor="rgba(168, 230, 207, 0.4)"
            $glowColor="rgba(168, 230, 207, 0.1)"
            $titleColor="#a8e6cf"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2>📊 {island.class5.visualBusinessModel.title}</h2>
            <p>{island.class5.visualBusinessModel.description}</p>

            <BusinessModelGrid>
              {/*<BMCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                <h4>🤝 Strategic Partners</h4>
                <ul>
                  {island.class5.visualBusinessModel.components.strategicPartners.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </BMCard>

              <BMCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
              >
                <h4>⚙️ Key Activities</h4>
                <ul>
                  {island.class5.visualBusinessModel.components.keyActivities.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </BMCard>

              <BMCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 }}
              >
                <h4>🛠️ Key Resources</h4>
                <ul>
                  {island.class5.visualBusinessModel.components.keyResources.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </BMCard>

              <BMCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
              >
                <h4>💎 Value Proposition</h4>
                <ul>
                  {island.class5.visualBusinessModel.components.valueProposition.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </BMCard>

              <BMCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9 }}
              >
                <h4>🤗 Customer Relationship</h4>
                <ul>
                  {island.class5.visualBusinessModel.components.customerRelationship.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </BMCard>

              <BMCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0 }}
              >
                <h4>📢 Distribution Channels</h4>
                <ul>
                  {island.class5.visualBusinessModel.components.distributionChannels.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </BMCard>

              <BMCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.1 }}
              >
                <h4>👥 Customer Segment</h4>
                <ul>
                  {island.class5.visualBusinessModel.components.customerSegment.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </BMCard>

              <BMCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 }}
              >
                <h4>💰 Cost Structure</h4>
                <ul>
                  {island.class5.visualBusinessModel.components.cost.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </BMCard>

              <BMCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.3 }}
              >
                <h4>💵 Revenue Streams</h4>
                <ul>
                  {island.class5.visualBusinessModel.components.revenues.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </BMCard>
              */}

              {island.images && island.images[2] && (
                <BMImageContainer
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5, duration: 1 }}
                >
                  <h3>📐 Our Visual Business Model Canvas</h3>
                  <img
                    src={island.images[2]}
                    alt="Visual Business Model Canvas"
                  />
                  <p>
                    Our visual representation of the business model, making the
                    entire strategy accessible and understandable at a glance.
                  </p>
                </BMImageContainer>
              )}
            </BusinessModelGrid>

            <p
              style={{
                fontStyle: "italic",
                color: "rgba(255, 255, 255, 0.7)",
                marginTop: "2rem",
              }}
            >
              {island.class5.visualBusinessModel.reflection}
            </p>
          </PresentationPanel>

          {/* Elevator Pitch */}
          <PresentationPanel
            $borderColor="rgba(255, 107, 107, 0.4)"
            $glowColor="rgba(255, 107, 107, 0.1)"
            $titleColor="#ff6b6b"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <h2>🎤 Elevator Pitch</h2>

            <ElevatorPitchBox>
              <h3>{island.class5.elevatorPitch.title}</h3>
              <div className="pitch-steps">
                {island.class5.elevatorPitch.structure.map((step, idx) => (
                  <div key={idx} className="pitch-step">
                    {step}
                  </div>
                ))}
              </div>
              <div className="challenge-note">
                <strong>The Challenge:</strong>{" "}
                {island.class5.elevatorPitch.challenge}
              </div>
            </ElevatorPitchBox>

            {/* Presentation Photo */}
            {island.images && island.images[1] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3, duration: 0.8 }}
                style={{ marginTop: "2rem", textAlign: "center" }}
              >
                <img
                  src={island.images[1]}
                  alt="Presenting the Business Model"
                  style={{
                    width: "100%",
                    maxWidth: "900px",
                    borderRadius: "15px",
                    boxShadow: "0 15px 50px rgba(255, 107, 107, 0.3)",
                    border: "3px solid rgba(255, 107, 107, 0.3)",
                  }}
                />
              </motion.div>
            )}
          </PresentationPanel>

          {/* Reflections */}
          <PresentationPanel
            $borderColor="rgba(138, 43, 226, 0.4)"
            $glowColor="rgba(138, 43, 226, 0.1)"
            $titleColor="#ba55d3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <h2>💭 Reflections</h2>
            <ReflectionGrid>
              {island.reflections.map((reflection, idx) => (
                <ReflectionCard
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5 + idx * 0.2 }}
                >
                  <h4>{reflection.topic}</h4>
                  <p>{reflection.text}</p>
                </ReflectionCard>
              ))}
            </ReflectionGrid>
          </PresentationPanel>

          {/* Key Learnings */}
          <PresentationPanel
            $borderColor="rgba(168, 230, 207, 0.4)"
            $glowColor="rgba(168, 230, 207, 0.1)"
            $titleColor="#a8e6cf"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <h2>📚 Key Learnings</h2>
            <LearningsList>
              {island.learnings.map((learning, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 4 + idx * 0.1 }}
                >
                  {learning}
                </motion.li>
              ))}
            </LearningsList>
          </PresentationPanel>
        </PresentationContent>
      </StageContainer>
    );
  }

  // ============================================
  // DEBATE LAYOUT (FEEDBACK - Class 6)
  // ============================================
  if (island.layoutType === "debate" && island.class6) {
    const DebateContainer = styled(motion.div)`
      width: 100%;
      min-height: 100vh;
      background: linear-gradient(
        135deg,
        #2c3e50 0%,
        #34495e 50%,
        #2c3e50 100%
      );
      padding: 4rem 2rem;
      position: relative;
      overflow: hidden;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 100%;
        background: linear-gradient(
          180deg,
          transparent 0%,
          rgba(255, 255, 255, 0.3) 20%,
          rgba(255, 255, 255, 0.3) 80%,
          transparent 100%
        );
      }
    `;

    const DebateHeader = styled(motion.header)`
      text-align: center;
      margin-bottom: 4rem;
      position: relative;
      z-index: 2;

      h1 {
        font-size: 4rem;
        font-weight: 900;
        background: linear-gradient(135deg, #95e1d3, #7dd3c0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.5rem;
        color: #95e1d3;
        font-weight: 300;
        margin: 0.5rem 0;
      }

      .date {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.6);
        font-style: italic;
      }
    `;

    const DebateContent = styled.div`
      max-width: 1400px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    `;

    const DebatePanel = styled(motion.div)`
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.05) 100%
      );
      backdrop-filter: blur(10px);
      border: 2px solid
        ${(props) => props.$borderColor || "rgba(149, 225, 211, 0.3)"};
      border-radius: 20px;
      padding: 3rem;
      margin-bottom: 3rem;
      box-shadow:
        0 10px 40px rgba(0, 0, 0, 0.3),
        0 0 20px ${(props) => props.$glowColor || "rgba(149, 225, 211, 0.2)"};

      h2 {
        font-size: 2.5rem;
        color: ${(props) => props.$titleColor || "#95e1d3"};
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 800;
      }

      h3 {
        font-size: 1.8rem;
        color: ${(props) => props.$titleColor || "#95e1d3"};
        margin: 2rem 0 1rem 0;
        font-weight: 700;
      }

      p {
        font-size: 1.1rem;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 1.5rem;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
      }

      li {
        font-size: 1.05rem;
        color: rgba(255, 255, 255, 0.85);
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;

        &:before {
          content: "→";
          position: absolute;
          left: 0;
          color: ${(props) => props.$titleColor || "#95e1d3"};
          font-weight: bold;
        }
      }
    `;

    const VersusContainer = styled.div`
      display: grid;
      grid-template-columns: 1fr 80px 1fr;
      gap: 2rem;
      margin: 3rem 0;
      align-items: start;

      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    `;

    const VersusSymbol = styled(motion.div)`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.3);
      align-self: center;

      @media (max-width: 1024px) {
        display: none;
      }
    `;

    const ArgumentSide = styled(motion.div)`
      background: linear-gradient(
        135deg,
        ${(props) => props.$bgColor + "20"} 0%,
        ${(props) => props.$bgColor + "10"} 100%
      );
      border: 3px solid ${(props) => props.$borderColor};
      border-radius: 20px;
      padding: 2.5rem;
      box-shadow: 0 15px 50px ${(props) => props.$shadowColor};

      h3 {
        font-size: 2rem;
        color: ${(props) => props.$textColor};
        margin-bottom: 1.5rem;
        font-weight: 800;
        text-align: center;
      }

      .speaker-info {
        text-align: center;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 2rem;
        font-style: italic;
      }
    `;

    const ArgumentCard = styled(motion.div)`
      background: rgba(255, 255, 255, 0.05);
      border-left: 4px solid ${(props) => props.$color};
      border-radius: 10px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;

      h4 {
        font-size: 1.3rem;
        color: ${(props) => props.$color};
        margin-bottom: 0.8rem;
        font-weight: 700;
      }

      p {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.6;
        margin: 0;
      }
    `;

    const ChefJourneyFlowContainer = styled(motion.div)`
      background: linear-gradient(
        135deg,
        rgba(255, 215, 0, 0.15),
        rgba(255, 215, 0, 0.05)
      );
      border: 3px solid rgba(255, 215, 0, 0.4);
      border-radius: 20px;
      padding: 3rem;
      margin: 3rem 0;
      box-shadow: 0 15px 50px rgba(255, 215, 0, 0.2);

      h3 {
        font-size: 2.5rem;
        color: #ffd700;
        margin-bottom: 1.5rem;
        text-align: center;
        font-weight: 800;
      }

      .description {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.85);
        text-align: center;
        margin-bottom: 2rem;
        line-height: 1.7;
      }

      .changes {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 2rem;

        span {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
        }
      }
    `;

    const FlowSteps = styled.div`
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin: 2rem 0;
    `;

    const FlowStep = styled(motion.div)`
      display: flex;
      align-items: center;
      gap: 1.5rem;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.08),
        rgba(255, 255, 255, 0.03)
      );
      border: 2px solid rgba(255, 215, 0, 0.3);
      border-radius: 15px;
      padding: 1.5rem;
      transition: all 0.3s;

      &:hover {
        transform: translateX(10px);
        border-color: rgba(255, 215, 0, 0.6);
        box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
      }

      .step-number {
        font-size: 2rem;
        font-weight: 900;
        color: #ffd700;
        min-width: 50px;
        text-align: center;
      }

      .step-content {
        flex: 1;

        h4 {
          font-size: 1.5rem;
          color: #ffd700;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .step-subtitle {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.8rem;
          font-style: italic;
        }

        .step-activities {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;

          span {
            background: rgba(255, 215, 0, 0.2);
            border: 1px solid rgba(255, 215, 0, 0.4);
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.9);
          }
        }
      }
    `;

    const SuccessCasesList = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin: 2rem 0;

      .case-card {
        background: rgba(76, 175, 80, 0.1);
        border: 2px solid rgba(76, 175, 80, 0.3);
        border-radius: 10px;
        padding: 1rem;
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.85);
        text-align: center;
        transition: all 0.3s;

        &:hover {
          background: rgba(76, 175, 80, 0.2);
          border-color: rgba(76, 175, 80, 0.6);
          transform: scale(1.05);
        }
      }
    `;

    const ReflectionGrid = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 2rem 0;
    `;

    const ReflectionCard = styled(motion.div)`
      background: linear-gradient(
        135deg,
        rgba(138, 43, 226, 0.15),
        rgba(138, 43, 226, 0.05)
      );
      border: 2px solid rgba(138, 43, 226, 0.4);
      border-radius: 15px;
      padding: 2rem;

      h4 {
        font-size: 1.5rem;
        color: #ba55d3;
        margin-bottom: 1rem;
        font-weight: 700;
      }

      p {
        font-size: 1.05rem;
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.7;
        margin: 0;
      }
    `;

    const LearningsList = styled.ul`
      list-style: none;
      padding: 0;
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.08),
          rgba(255, 255, 255, 0.03)
        );
        padding: 1.2rem 1.5rem;
        border-radius: 10px;
        border-left: 4px solid #95e1d3;
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.6;
        transition: all 0.3s;

        &:hover {
          transform: translateX(10px);
          border-left-color: #ffd700;
          background: linear-gradient(
            135deg,
            rgba(255, 215, 0, 0.1),
            rgba(255, 215, 0, 0.05)
          );
        }
      }
    `;

    const PhotoSection = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin: 3rem 0;

      .photo-wrapper {
        text-align: center;

        img {
          width: 100%;
          border-radius: 15px;
          box-shadow: 0 15px 50px rgba(149, 225, 211, 0.3);
          border: 3px solid rgba(149, 225, 211, 0.3);
          transition: all 0.3s;

          &:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 60px rgba(149, 225, 211, 0.5);
          }
        }

        p {
          margin-top: 1rem;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
        }
      }
    `;

    return (
      <DebateContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <DebateHeader
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1>
            {island.icon} {island.title}
          </h1>
          <p>{island.subtitle}</p>
          <p className="date">{island.classes}</p>
        </DebateHeader>

        <DebateContent>
          {/* Wrap-Up Section */}
          <DebatePanel
            $borderColor="rgba(149, 225, 211, 0.4)"
            $glowColor="rgba(149, 225, 211, 0.1)"
            $titleColor="#95e1d3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2>📚 {island.class6.wrapUp.title}</h2>
            <p>{island.class6.wrapUp.description}</p>
            <ul>
              {island.class6.wrapUp.ourJourney.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </DebatePanel>

          {/* Critical Reflection: Natasha Jen */}
          <DebatePanel
            $borderColor="rgba(231, 76, 60, 0.4)"
            $glowColor="rgba(231, 76, 60, 0.1)"
            $titleColor="#e74c3c"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2>💥 {island.class6.criticalReflection.title}</h2>
            <h3
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                fontStyle: "italic",
                color: "#e74c3c",
                marginTop: "-0.5rem",
                marginBottom: "1rem",
              }}
            >
              "{island.class6.criticalReflection.subtitle}"
            </h3>
            <p
              style={{
                textAlign: "center",
                fontSize: "1rem",
                fontStyle: "italic",
                marginBottom: "1.5rem",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              {island.class6.criticalReflection.speaker} —{" "}
              {island.class6.criticalReflection.event}
            </p>
            <p>{island.class6.criticalReflection.description}</p>
            <p
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                background: "rgba(76, 175, 80, 0.1)",
                borderLeft: "4px solid #4caf50",
                borderRadius: "8px",
                fontSize: "1.05rem",
                lineHeight: "1.7",
              }}
            >
              <strong style={{ color: "#4caf50" }}>Our Course Context:</strong>{" "}
              {island.class6.criticalReflection.context}
            </p>
          </DebatePanel>

          {/* Versus: Arguments Against vs. For DT */}
          <VersusContainer>
            {/* Arguments Against */}
            <ArgumentSide
              $bgColor="rgba(231, 76, 60"
              $borderColor="rgba(231, 76, 60, 0.5)"
              $shadowColor="rgba(231, 76, 60, 0.2)"
              $textColor="#e74c3c"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h3>⚠️ What DT Should NOT Be</h3>
              <div className="speaker-info">
                Natasha's critique of mainstream DT trivialization
              </div>
              {island.class6.criticalReflection.natashaArguments.map(
                (arg, idx) => (
                  <ArgumentCard
                    key={idx}
                    $color="#e74c3c"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + idx * 0.1 }}
                  >
                    <h4>{arg.point}</h4>
                    <p>{arg.explanation}</p>
                  </ArgumentCard>
                )
              )}
            </ArgumentSide>

            <VersusSymbol
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 1.5, type: "spring" }}
            >
              VS
            </VersusSymbol>

            {/* Arguments For */}
            <ArgumentSide
              $bgColor="rgba(76, 175, 80"
              $borderColor="rgba(76, 175, 80, 0.5)"
              $shadowColor="rgba(76, 175, 80, 0.2)"
              $textColor="#4caf50"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h3>✅ What DT SHOULD Be</h3>
              <div className="speaker-info">
                When done right, DT can be powerful and transformative
              </div>
              {island.class6.criticalReflection.argumentsForDT.map(
                (arg, idx) => (
                  <ArgumentCard
                    key={idx}
                    $color="#4caf50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + idx * 0.1 }}
                  >
                    <p>{arg}</p>
                  </ArgumentCard>
                )
              )}
            </ArgumentSide>
          </VersusContainer>

          {/* Success Cases */}
          <DebatePanel
            $borderColor="rgba(76, 175, 80, 0.4)"
            $glowColor="rgba(76, 175, 80, 0.1)"
            $titleColor="#4caf50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <h2>🏆 Proven Success Cases</h2>
            <SuccessCasesList>
              {island.class6.criticalReflection.successCases.map(
                (caseItem, idx) => (
                  <motion.div
                    key={idx}
                    className="case-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 + idx * 0.1 }}
                  >
                    {caseItem}
                  </motion.div>
                )
              )}
            </SuccessCasesList>
          </DebatePanel>

          {/* Chef's Journey Final Version */}
          <ChefJourneyFlowContainer
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <h3>👨‍🍳 {island.class6.chefsJourneyFinal.title}</h3>
            <p className="description">
              {island.class6.chefsJourneyFinal.description}
            </p>

            <div className="changes">
              {island.class6.chefsJourneyFinal.changes.map((change, idx) => (
                <span key={idx}>{change}</span>
              ))}
            </div>

            <FlowSteps>
              {island.class6.chefsJourneyFinal.finalFlow.map((step, idx) => (
                <FlowStep
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.5 + idx * 0.2 }}
                >
                  <div className="step-number">{idx + 1}</div>
                  <div className="step-content">
                    <h4>{step.island}</h4>
                    <p className="step-subtitle">{step.subtitle}</p>
                    <div className="step-activities">
                      {step.activities.map((activity, aIdx) => (
                        <span key={aIdx}>{activity}</span>
                      ))}
                    </div>
                  </div>
                </FlowStep>
              ))}
            </FlowSteps>

            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255, 255, 255, 0.75)",
                fontStyle: "italic",
                textAlign: "center",
                marginTop: "2rem",
                lineHeight: "1.7",
              }}
            >
              {island.class6.chefsJourneyFinal.reflection}
            </p>
          </ChefJourneyFlowContainer>

          {/* Photos */}
          {island.images && island.images.length > 0 && (
            <DebatePanel
              $borderColor="rgba(149, 225, 211, 0.4)"
              $glowColor="rgba(149, 225, 211, 0.1)"
              $titleColor="#95e1d3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
              <h2>📸 Our Journey Documented</h2>
              <PhotoSection>
                {island.images[0] && (
                  <motion.div
                    className="photo-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.2 }}
                  >
                    <img
                      src={island.images[0]}
                      alt="Chef's Journey Final Model"
                    />
                    <p>Our final Chef's Journey model (revised)</p>
                  </motion.div>
                )}
                {island.images[1] && (
                  <motion.div
                    className="photo-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.4 }}
                  >
                    <img src={island.images[1]} alt="Team Photo" />
                    <p>Pasta Lovers in front of our Chef's Journey poster</p>
                  </motion.div>
                )}
              </PhotoSection>
            </DebatePanel>
          )}

          {/* Reflections */}
          <DebatePanel
            $borderColor="rgba(138, 43, 226, 0.4)"
            $glowColor="rgba(138, 43, 226, 0.1)"
            $titleColor="#ba55d3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <h2>💭 Final Reflections</h2>
            <ReflectionGrid>
              {island.reflections.map((reflection, idx) => (
                <ReflectionCard
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5 + idx * 0.2 }}
                >
                  <h4>{reflection.topic}</h4>
                  <p>{reflection.text}</p>
                </ReflectionCard>
              ))}
            </ReflectionGrid>
          </DebatePanel>

          {/* Learning Outcomes */}
          <DebatePanel
            $borderColor="rgba(149, 225, 211, 0.4)"
            $glowColor="rgba(149, 225, 211, 0.1)"
            $titleColor="#95e1d3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.8 }}
          >
            <h2>🎓 Competences Developed</h2>
            <ul>
              {island.class6.learningOutcomes.outcomes.map((outcome, idx) => (
                <li key={idx}>{outcome}</li>
              ))}
            </ul>
          </DebatePanel>

          {/* Key Learnings */}
          <DebatePanel
            $borderColor="rgba(255, 215, 0, 0.4)"
            $glowColor="rgba(255, 215, 0, 0.1)"
            $titleColor="#ffd700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4 }}
          >
            <h2>📚 Key Learnings from This Journey</h2>
            <LearningsList>
              {island.learnings.map((learning, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 4.2 + idx * 0.1 }}
                >
                  {learning}
                </motion.li>
              ))}
            </LearningsList>
          </DebatePanel>
        </DebateContent>
      </DebateContainer>
    );
  }

  // ============================================
  // DEFAULT LAYOUT (for islands without specific layout)
  // ============================================
  return (
    <ContentContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Header variants={itemVariants}>
        <Title>
          <span>{island.icon}</span>
          {island.title}
        </Title>
        <Subtitle>{island.subtitle}</Subtitle>
        <Description>{island.description}</Description>
      </Header>

      {island.activities && (
        <Section variants={itemVariants} $color={island.color}>
          <SectionTitle $color={island.color}>
            <span>🎯</span> Activities
          </SectionTitle>
          <List>
            {island.activities.map((activity, idx) => (
              <ListItem key={idx} $color={island.color} $icon="✓">
                {activity}
              </ListItem>
            ))}
          </List>
        </Section>
      )}

      {island.businessModelAspects && (
        <Section variants={itemVariants} $color={island.color}>
          <SectionTitle $color={island.color}>
            <span>💼</span> Business Model
          </SectionTitle>
          <List>
            {island.businessModelAspects.map((aspect, idx) => (
              <ListItem key={idx} $color={island.color} $icon="→">
                {aspect}
              </ListItem>
            ))}
          </List>
        </Section>
      )}

      {island.criticalReflection && (
        <TwoColumn>
          <Section variants={itemVariants} $color="#e74c3c">
            <SectionTitle $color="#e74c3c">
              <span>⚠️</span> Critical View (Natasha Jen)
            </SectionTitle>
            <List>
              {island.criticalReflection[
                "Natasha Jen - Design Thinking is Bullshit"
              ].map((point, idx) => (
                <ListItem key={idx} $color="#e74c3c" $icon="−">
                  {point}
                </ListItem>
              ))}
            </List>
          </Section>
          <Section variants={itemVariants} $color="#27ae60">
            <SectionTitle $color="#27ae60">
              <span>✓</span> Our Defense of DT
            </SectionTitle>
            <List>
              {island.criticalReflection["Our defense of DT"].map(
                (point, idx) => (
                  <ListItem key={idx} $color="#27ae60" $icon="+">
                    {point}
                  </ListItem>
                )
              )}
            </List>
          </Section>
        </TwoColumn>
      )}

      {island.learnings && (
        <Section variants={itemVariants} $color={island.color}>
          <SectionTitle $color={island.color}>
            <span>📚</span> Key Learnings
          </SectionTitle>
          <List>
            {island.learnings.map((learning, idx) => (
              <ListItem key={idx} $color={island.color} $icon="→">
                {learning}
              </ListItem>
            ))}
          </List>
        </Section>
      )}

      <motion.div variants={itemVariants}>{renderPhotos()}</motion.div>
    </ContentContainer>
  );
}
