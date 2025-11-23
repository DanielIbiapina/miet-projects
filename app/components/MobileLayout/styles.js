import styled from 'styled-components';

export const MobileContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const MobileFrame = styled.div`
  width: 100%;
  max-width: 375px;
  height: 812px;
  background: #000;
  border-radius: 40px;
  padding: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    max-width: 100%;
    height: 100vh;
    border-radius: 0;
    padding: 0;
  }
  
  .notch {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 30px;
    background: #000;
    border-radius: 0 0 20px 20px;
    z-index: 1000;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StatusBar = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #000;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileScreen = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 30px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  padding-top: 30px;
  
  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  @media (max-width: 768px) {
    border-radius: 0;
    padding-top: 0;
  }
`;

