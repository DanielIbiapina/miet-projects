import styled from 'styled-components';
import { Link } from 'react-router';

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 428px;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0 max(0.75rem, env(safe-area-inset-bottom));
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #e5e7eb;
  z-index: 1000;
  
  @media (max-width: 428px) {
    max-width: 100%;
  }
`;

export const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${props => props.$active ? '#ef4444' : '#6b7280'};
  transition: all 0.2s ease;
  flex: 1;
  padding: 0.5rem;
  border-radius: 8px;
  
  &:active {
    background: #f3f4f6;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
  color: ${props => props.$active ? '#ef4444' : '#6b7280'};
  transition: color 0.2s ease;
  
  svg {
    display: block;
  }
`;

export const NavLabel = styled.span`
  font-size: 0.75rem;
  font-weight: ${props => props.$active ? '600' : '500'};
  color: ${props => props.$active ? '#ef4444' : '#6b7280'};
  transition: all 0.2s ease;
`;

