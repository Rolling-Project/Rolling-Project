import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export const Button = styled.button`
  display: block;
  outline: none;
  border: none;
  width: 20rem;
  height: 3.5rem;
  padding: 0.85rem 1.5rem;
  border-radius: 0.8rem;
  text-align: center;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: ${({ $color }) => $color};

  &:hover {
    background-color: ${({ $hoverColor }) => $hoverColor};
    transition: 0.7s;
    color: ${colors.White};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
