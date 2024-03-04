import styled from '@emotion/styled';

export const TopButton = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  border-radius: 50%;
  z-index: 999;

  &:hover {
    animation: up-down 0.5s infinite ease-in-out alternate;
  }

  @media screen and (max-width: 1400px) {
    right: 1rem;
  }

  @media screen and (max-width: 1200px) {
    width: 3rem;
    height: 3rem;
  }

  @keyframes up-down {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translatey(-10px);
    }
  }
`;
