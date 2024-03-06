import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  padding: 60px 0px 60px 60px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 152px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  }
`;

export const Num = styled.div`
  display: flex;
  padding: 6px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: var(--Purple-600, #9935ff);
  color: var(--white, #fff);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.07px;
`;

export const Content = styled.h1`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
  letter-spacing: -0.24px;
`;

export const Description = styled.p`
  color: var(--gray-500, #555);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.18px;
`;

export const Example = styled.div`
  display: flex;
  width: 720px;
  height: 204px;
  padding: 21px 40px 21.024px 40px;
  justify-content: center;
  align-items: center;
`;
