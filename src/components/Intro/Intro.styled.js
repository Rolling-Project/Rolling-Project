import styled from '@emotion/styled';

export const IntroWrap = styled.div`
  display: flex;
  padding: 3.75rem 0rem 3.75rem 3.75rem;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 9.5rem;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const Num = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 3.125rem;
  background: var(--Purple-600, #9935ff);
  color: var(--white, #fff);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: -0.0044rem;
`;

export const Content = styled.h1`
  color: var(--gray-900, #181818);

  /* Font/24 Bold */
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem; /* 150% */
  letter-spacing: -0.015rem;
`;

export const Description = styled.p`
  color: var(--gray-500, #555);
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: -0.0112rem;
`;

export const Example = styled.div`
  display: flex;
  width: 45rem;
  height: 12.75rem;
  padding: 1.3125rem 2.5rem 1.314rem 2.5rem;
  justify-content: center;
  align-items: center;
`;
