import styled from 'styled-components';
import { Link } from 'react-router';

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 0.75rem 0 max(0.75rem, env(safe-area-inset-bottom));
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  
  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 0;
  }
`;

export const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${props => props.active ? '#6366f1' : '#9ca3af'};
  transition: all 0.3s ease;
  flex: 1;
  padding: 0.5rem;
  
  &:hover {
    color: #6366f1;
  }
`;

export const NavIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
`;

export const NavLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
`;

