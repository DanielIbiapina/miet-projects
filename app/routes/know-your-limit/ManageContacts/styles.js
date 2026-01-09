import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  color: #1f2937;
  position: relative;
  overflow-x: hidden;
  padding-bottom: 80px;
`;

export const SafeArea = styled.div`
  max-width: 428px;
  margin: 0 auto;
  min-height: 100vh;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  background: #f9fafb;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 1rem 1.5rem;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
  padding-top: calc(env(safe-area-inset-top, 0.5rem) + 1rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #1f2937;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 0.2s ease;
  
  &:active {
    background: #f3f4f6;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

export const Content = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactItem = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const ContactInfo = styled.div`
  flex: 1;
`;

export const ContactName = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PrimaryBadge = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  color: #ef4444;
  background: #fef2f2;
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ContactPhone = styled.div`
  font-size: 0.9375rem;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

export const ContactRelation = styled.div`
  font-size: 0.8125rem;
  color: #9ca3af;
  font-weight: 500;
`;

export const ContactActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const DeleteButton = styled.button`
  background: #fef2f2;
  border: 1px solid #fca5a5;
  color: #ef4444;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:active {
    background: #fee2e2;
    transform: scale(0.95);
  }
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #D47FE3 0%, #7B1CC7 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(123, 28, 199, 0.3);
  transition: all 0.2s ease;
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 8px rgba(123, 28, 199, 0.4);
  }
  
  &:hover {
    box-shadow: 0 0 20px rgba(212, 127, 227, 0.5);
  }
`;

export const AddButtonText = styled.span`
  font-weight: 700;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

export const EmptyText = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #6b7280;
`;

