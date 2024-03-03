/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Root = styled.div`
  margin: 5.7rem auto 0rem;
  padding: 0rem 2.4rem 2.4rem;
  width: 100%;
  max-width: 76.8rem;

  @media screen and (max-width: 1199px) {
    margin-top: 5rem;
  }

  @media screen and (max-width: 767px) {
    padding: 0rem 2rem 2rem;
  }
`;

export const Form = styled.div`
  display: flex;
  gap: 5rem;
  flex-direction: column;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 4.2rem; /* 175% */
  color: var(--gray-900, #181818);
  letter-spacing: -0.02rem;
`;

export const SubTitle = styled.h2`
  margin-bottom: 2.4rem;
  font-size: 1.6rem;
  line-height: 2.6rem; /* 162.5% */
  color: var(--gray-500, #555);
  letter-spacing: -0.016rem;
`;

export const Button = styled.button`
  width: 100%;
`;

export const DisplayNone = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
