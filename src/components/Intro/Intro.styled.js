import styled from '@emotion/styled';

export const IntroWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 75rem;
  background-color: #f6f8ff;
  justify-content: center;
  padding: 3.75rem 3.75rem;
  border-radius: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    flex-direction: column;
    overflow: hidden;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  @media (max-width: 768px) {
    margin: 0 -43px;
    padding-bottom: 40px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
    padding: 1.13rem 1.8rem;
  }
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
  @media (min-width: 768px) and (max-width: 1200px) {
    br {
      display: none;
    }
  }
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
  padding: 1.3125rem 1.5rem 1.314rem 2.5rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    padding: 1.13rem 4rem;
    width: 100%;
  }
`;
