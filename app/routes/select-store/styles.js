import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding-bottom: 2rem;
`;

export const Header = styled.div`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  padding: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  flex: 1;
`;

export const SearchBar = styled.input`
  width: calc(100% - 3rem);
  margin: 1.5rem;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

export const StoreList = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StoreCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const StoreLogo = styled.div`
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  border-radius: 12px;
`;

export const StoreInfo = styled.div`
  flex: 1;
`;

export const StoreName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

export const StoreDistance = styled.span`
  font-size: 0.875rem;
  color: #6366f1;
  font-weight: 500;
`;

export const StoreAddress = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
`;

export const ArrowIcon = styled.div`
  font-size: 1.5rem;
  color: #9ca3af;
`;

