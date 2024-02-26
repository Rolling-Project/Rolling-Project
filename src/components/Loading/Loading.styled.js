import styled from "@emotion/styled";

export const LoadingWrap = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const LodingContent = styled.section`
  width: 40rem;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const LogoImage = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const LoadingTitle = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;
  font-style: italic;
  font-weight: 900;
  letter-spacing: .3125rem
`;

export const LoadingTitleEffect = styled.span`
  display: inline-block;
  animation: loading 1.4s infinite alternate;

  &:nth-of-type(2) {
    animation-delay: .2s;
  }
  &:nth-of-type(3) {
    animation-delay: .2s;
  }
  &:nth-of-type(4) {
    animation-delay: .3s;
  }
  &:nth-of-type(5) {
    animation-delay: .4s;
  }
  &:nth-of-type(6) {
    animation-delay: .5s;
  }
  &:nth-of-type(7) {
    animation-delay: .6s;
  }
  @keyframes loading {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const LoadingText = styled.h2`
  font-size: 2.5rem;
  margin-top: 2rem;
  font-weight: 700;
  letter-spacing: .0938rem;
`;

export const LoadingEffect = styled.span`
  display: inline-block;
  animation: textLoading 1.5s infinite alternate;

  &:nth-of-type(2) {
    animation-delay: .5s;
  }
  &:nth-of-type(3) {
    animation-delay: 1s;
  }


  @keyframes textLoading {
    0%, 100%{
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
   }
  }
`;
