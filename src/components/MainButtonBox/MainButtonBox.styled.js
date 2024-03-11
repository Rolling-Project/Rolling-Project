import styled from '@emotion/styled';

export const MainButtonBox = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin: 0 auto;
`;

export const MainButton = styled.button`
  border: none;
  width: 20rem;
  height: 3.5rem;
  border-radius: 0.8rem;
  background: var(--Purple-600, #9935ff);
  color: white;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 700;
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 93vw;
  }
  @media (max-width: 768px) {
    width: 86vw;
  }
`;
