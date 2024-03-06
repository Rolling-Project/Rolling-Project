import * as Styled from './TopButton.styled';
import TopButtonIcon from '../../assets/scroll-top.svg';

function TopButton({ onClick }) {
  return <Styled.TopButton onClick={onClick} src={TopButtonIcon} alt="웹 페이지 상단으로 가기 버튼" />;
}

export default TopButton;
