import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const ListTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 72.5rem; */
  margin: 2.8rem 0 0.9rem;
  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 3.8rem;
  }
`;

export const ListTitle = styled.h2`
  color: ${colors.Black};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const CardDetailBox = styled.div`
  @media (max-width: 1200px) {
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
  }
`;

export const CardDetail = styled.span`
  padding-top: 0.5rem;
  display: inline-block;
  color: ${colors["Gray-400"]};
  font-size: 0.8rem;
`;

export const CardDeviceDetail = styled(CardDetail)`
  display: none;
  @media (max-width: 1200px) {
    display: inline;
  }
`;

export const CardWrap = styled.section`
  position: relative;
`;

export const CardContainer = styled.div`
  overflow: hidden;

  @media (max-width: 1200px) {
    scrollbar-width: none;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }
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
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const PrevButton = styled(SliderButton)`
  left: 0;
`;
export const NextButton = styled(SliderButton)`
  right: -2.2rem;
`;
