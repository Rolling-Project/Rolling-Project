import * as Styled from './ScrollToTopButton.styled';
import TopButtonIcon from '../../../assets/images/icons/scroll-top.svg';

function ScrollToTopButton({ onClick }) {
  return (
    <Styled.ScrollToTopBtn type="button" onClick={onClick}>
      <Styled.ScrollToTopImage src={TopButtonIcon} alt="웹 페이지 상단으로 가기 버튼" />
    </Styled.ScrollToTopBtn>
  );
}

export default ScrollToTopButton;
