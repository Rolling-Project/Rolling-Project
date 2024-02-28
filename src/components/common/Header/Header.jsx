import * as Styled from './Header.styled';
import HeaderLogoIcon from '../../../../public/logo.svg';

function Header({ isStatic = true, isButotnVisible = true }) {
  return (
    <Styled.HeaderBox $isStatic={isStatic}>
      <Styled.Header>
        <Styled.HeaderLogoBox>
          <img src={HeaderLogoIcon} alt="헤더 로고" />
          <Styled.HeaderLogoText>Rolling</Styled.HeaderLogoText>
        </Styled.HeaderLogoBox>
        {isButotnVisible && <Styled.HeaderButton to="/post">롤링 페이퍼 만들기</Styled.HeaderButton>}
      </Styled.Header>
    </Styled.HeaderBox>
  );
}

export default Header;
