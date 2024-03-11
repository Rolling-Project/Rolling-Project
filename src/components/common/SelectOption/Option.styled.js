import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.ul`
  display: grid;
  align-items: flex-start;
  gap: 0.8rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
