import styled from '@emotion/styled';

export const MainButtonBox = styled.div`
  display: flex;
  width: 75.0625rem;
  height: 6.5rem;
  padding: 1.5rem 0rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 0 auto;
  margin-top: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const MainButton = styled.button`
  display: flex;
  width: 17.5rem;
  padding: 0.875rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: 0.0625rem solid transparent;
  border-radius: 0.75rem;
  background: var(--Purple-600, #9935ff);
  color: white;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: -0.0112rem;
`;
