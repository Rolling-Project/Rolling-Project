import styled from '@emotion/styled';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3.75rem;
  margin-left: 3.75rem;
`;

export const ContentBox = styled.div`
  width: 20rem;
  height: 6.75rem;
  gap: 16px;
  @media (max-width: 768px) {
    width: auto;
    display: flex;
    flex-direction: column;
  }
`;

export const Num = styled.div`
  width: 5rem;
  height: 2rem;
  border-radius: 3.125rem;
  background-color: #9935ff;
  color: #fff;
  padding: 0.375rem 0.75rem;
  gap: 0.625rem;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
`;

export const Content = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  color: #181818;
  margin-top: 0.75rem;
  margin-bottom: 0.625rem;
  width: 20.625rem;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75rem;
  color: #555555;
`;

export const Example = styled.div`
  width: 45rem;
  height: 12.75rem;
  left: 25rem;
  bottom: 7rem;
  position: relative;
`;
