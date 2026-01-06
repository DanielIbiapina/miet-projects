import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  color: white;
  padding: 3rem 1.5rem;
  overflow-y: auto;
  
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Hero = styled.div`
  text-align: center;
  padding: 2rem 0 3rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -1px;
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  opacity: 0.8;
  font-weight: 400;
`;

export const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

export const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.08);
    border-color: ${props => props.$color || 'rgba(255, 255, 255, 0.2)'};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(-2px);
  }
`;

export const ProjectIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
`;

export const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
`;

export const ProjectDescription = styled.p`
  font-size: 0.95rem;
  opacity: 0.8;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const ArrowIcon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.5rem;
  opacity: 0.6;
  transition: all 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
    transform: translateX(4px);
  }
`;

