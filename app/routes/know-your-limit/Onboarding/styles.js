import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  color: #1f2937;
  position: relative;
  overflow-x: hidden;
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
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

export const Content = styled.div`
  flex: 1;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${props => props.$active ? '#ef4444' : '#e5e7eb'};
  color: ${props => props.$active ? '#ffffff' : '#6b7280'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
`;

export const StepLabel = styled.div`
  position: absolute;
  top: 40px;
  font-size: 0.75rem;
  color: ${props => props.$active ? '#ef4444' : '#9ca3af'};
  font-weight: 500;
  white-space: nowrap;
`;

export const FormSection = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const FormDescription = styled.p`
  font-size: 0.9375rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 2px solid ${props => props.$error ? '#ef4444' : '#e5e7eb'};
  border-radius: 12px;
  background: #ffffff;
  color: #111827;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$error ? '#ef4444' : '#ef4444'};
    box-shadow: 0 0 0 3px ${props => props.$error ? '#fef2f2' : '#fef2f2'};
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
  color: #111827;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #ef4444;
    box-shadow: 0 0 0 3px #fef2f2;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const RadioLabel = styled.span`
  font-size: 0.9375rem;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
`;

export const RadioButton = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  
  &:checked + ${RadioLabel} {
    color: #ef4444;
    font-weight: 600;
  }
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  flex: 1;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #ef4444;
    background: #fef2f2;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1.125rem 1.5rem;
  font-size: 1.0625rem;
  font-weight: 700;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.$secondary ? '#ffffff' : '#ef4444'};
  color: ${props => props.$secondary ? '#1f2937' : '#ffffff'};
  border: ${props => props.$secondary ? '2px solid #e5e7eb' : 'none'};
  box-shadow: ${props => props.$secondary ? 'none' : '0 4px 12px rgba(239, 68, 68, 0.25)'};
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ButtonText = styled.span`
  display: block;
`;

export const ErrorMessage = styled.div`
  font-size: 0.875rem;
  color: #ef4444;
  margin-top: 0.5rem;
  font-weight: 500;
`;

