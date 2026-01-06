import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  padding: 2rem 1.5rem 3rem;
  overflow-y: auto;
  
  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const Hero = styled.div`
  text-align: center;
  padding: 2rem 0 3rem;
`;

export const LogoIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
  
  svg {
    color: white;
    width: 48px;
    height: 48px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -1px;
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  opacity: 0.95;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Tagline = styled.p`
  font-size: 0.9rem;
  opacity: 0.85;
  font-weight: 400;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 3rem;
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.25rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const StatNumber = styled.div`
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
  line-height: 1;
`;

export const StatLabel = styled.div`
  font-size: 0.75rem;
  opacity: 0.9;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const FeaturesSection = styled.div`
  margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  opacity: 0.95;
`;

export const FeaturesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const FeatureNumber = styled.div`
  display: inline-flex;
  width: 40px;
  height: 40px;
  background: white;
  color: #6366f1;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.625rem;
  line-height: 1.3;
`;

export const FeatureText = styled.p`
  font-size: 0.9375rem;
  opacity: 0.92;
  line-height: 1.6;
`;

export const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  color: #6366f1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  color: white;
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.6);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const Footer = styled.div`
  text-align: center;
  padding: 2rem 0 0;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`;

export const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }
`;

