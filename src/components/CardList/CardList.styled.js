import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const ListTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2.25rem;
  margin: 2.8rem 0 0.9rem;
`;

export const ListTitle = styled.h2`
  color: ${colors.Black};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const CardDetail = styled.span`
  color: ${colors["Gray-400"]}; 
  font-size: 0.8rem;
  padding: 0 1rem 0 0;
  letter-spacing: 0.03rem;
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
