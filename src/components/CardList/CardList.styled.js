import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const ListTitle = styled.h2`
  color: ${colors.Black};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  margin: 2rem 0 0.8rem;

  &:nth-of-type(2){
    margin-top: 2.5rem;
  }
`;

export const CardWrap = styled.section`
  width: 74.35rem;
  height: auto;
  position: relative;
`;

export const CardContainer = styled.div`
  overflow: hidden;
`;

export const CardList = styled.ul`
  display: flex;
  gap: 1.25rem;
  transition: 0.7s;
`;

export const SliderButton = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid ${colors["Gray-300"]};
  padding: 0.5rem;
  cursor: pointer;
`;
export const PrevButton = styled(SliderButton)`
  left: 0;
`;
export const NextButton = styled(SliderButton)`
  right: -2.1rem;
`;
