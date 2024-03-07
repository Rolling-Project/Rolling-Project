import * as Styled from './ScrollToTopButton.styled';
import TopButtonIcon from '../../../assets/scroll-top.svg';

function ScrollToTopButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      <Styled.ScrollToTopImage src={TopButtonIcon} alt="웹 페이지 상단으로 가기 버튼" />
    </button>
  );
}

export default ScrollToTopButton;
