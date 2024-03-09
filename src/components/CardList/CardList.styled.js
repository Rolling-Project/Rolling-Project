import styled from '@emotion/styled';
import colors from '../../styles/colors';

export const ListTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0 0.7rem;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 4rem;
  }
`;

export const ListTitle = styled.h2`
  color: ${colors['--Black']};
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: 360px) {
    font-size: 1.3rem;
  }
`;

export const CardDetailBox = styled.div`
  padding: 0.3rem 0.5rem 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardDetail = styled.span`
  padding-top: 0.5rem;
  display: inline-block;
  color: ${colors['--Gray-600']};
  font-size: 0.8rem;

  @media (max-width: 360px) {
    font-size: 0.7rem;
  }
`;

export const CardWrap = styled.section`
  position: relative;
`;

export const CardContainer = styled.div`
  overflow-y: hidden;
  overflow-x: auto; // 가로방향 스크롤
  scrollbar-width: none; // 스크롤바 표시 x
  scroll-behavior: smooth; // 스크롤 부드럽게
  scroll-snap-type: x mandatory; // 스크롤이 스냅 지점에 정렬
`;

export const CardList = styled.ul`
  display: flex;
  gap: 1.2rem;
  transition: 0.7s;
`;

export const SliderButton = styled.img`
  position: absolute;
  top: 55%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid ${colors['--Gray-300']};
  padding: 0.5rem;
  cursor: pointer;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const PrevButton = styled(SliderButton)`
  left: -0.1rem;
`;
export const NextButton = styled(SliderButton)`
  right: -2.2rem;
`;
