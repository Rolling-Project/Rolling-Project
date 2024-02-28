import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const ErrorWrap = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.05);
  position: relative;
`;

export const LodingContent = styled.section`
  width: 50rem;
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

export const ErrorTitle = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;
  font-style: italic;
  color: ${colors["--Purple-900"]};
  font-weight: 900;
  letter-spacing: 0.25rem;
`;

export const ErrorTextRedEffect = styled.span`
  color: ${colors["--Error"]};
`;

export const ErrorTextPurpleEffect = styled.span`
  color: ${colors["--Purple-900"]};
`;

export const ErrorText = styled.h2`
  font-size: 2.5rem;
  margin-top: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.0938rem;
`;
