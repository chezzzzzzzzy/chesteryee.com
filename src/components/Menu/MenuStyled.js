import styled from 'styled-components';

export const StyledMenu = styled.nav`
  z-index: 900;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1D1D1D ;
  height: 100%;
  width: 100%;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 768px) {
    width: 100%;
  }

 
`;