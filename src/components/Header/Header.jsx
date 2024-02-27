import * as Styled from "./Header.styled";
import HeaderLogoIcon from "../../../public/logo.svg";

function Header() {
  return (
    <Styled.HeaderBox>
      <Styled.Header>
        <Styled.HeaderLogoBox>
          <img src={HeaderLogoIcon} alt="헤더 로고" />
          <Styled.HeaderLogoText>Rolling</Styled.HeaderLogoText>
        </Styled.HeaderLogoBox>
        <Styled.HeaderButton>롤링 페이퍼 만들기</Styled.HeaderButton>
      </Styled.Header>
    </Styled.HeaderBox>
  );
}

export default Header;
