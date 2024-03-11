import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;
  max-width: 75rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.25rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 475px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
