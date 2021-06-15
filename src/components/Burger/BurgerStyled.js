import styled from 'styled-components'

export const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 20px;

  div {
    width: 20px;
    height: 0.12rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    color: black;
    z-index: 1000;
    background: ${({ theme, open }) => (open ? 'black' : 'black')};

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
