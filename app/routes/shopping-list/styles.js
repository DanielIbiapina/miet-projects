import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding-bottom: 6rem;
`;

export const Header = styled.div`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  padding: 1.5rem;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
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
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const StoreInfo = styled.div`
  opacity: 0.9;
`;

export const StoreName = styled.span`
  font-size: 0.875rem;
`;

export const AddItemSection = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Input = styled.input`
  color: black;
  flex: 1;
  padding: 0.875rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.95);
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    background: white;
    border-color: white;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const AddButton = styled.button`
  width: 48px;
  height: 48px;
  background: white;
  color: #6366f1;
  border: none;
  border-radius: 12px;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ListSection = styled.div`
  padding: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

export const Item = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: ${(props) => (props.checked ? 0.6 : 1)};

  &:active {
    transform: scale(0.98);
  }
`;

export const Checkbox = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid ${(props) => (props.checked ? "#6366f1" : "#d1d5db")};
  border-radius: 6px;
  background: ${(props) => (props.checked ? "#6366f1" : "white")};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  flex-shrink: 0;

  ${(props) =>
    props.checked &&
    `
    &:after {
      content: '✓';
      position: absolute;
      color: white;
      font-size: 1rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}
`;

export const ItemContent = styled.div`
  flex: 1;
`;

export const ItemName = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #1f2937;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

export const ItemBrand = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.125rem;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 3rem);
  max-width: 343px;
  padding: 1rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 12px 28px rgba(99, 102, 241, 0.5);
  }

  &:active {
    transform: translateX(-50%) translateY(0);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #6b7280;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: #374151;
  }

  p {
    font-size: 0.875rem;
  }
`;
