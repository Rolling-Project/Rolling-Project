import { useEffect } from 'react';
import * as Styled from './Header.styled';
import HeaderLogoIcon from '../../../../public/logo.svg';

let isButtonVisible;
let isStatic;
const URL = window.location.href;

function Header() {
  const shouldCheckEffect = () => {
    if (URL.includes('post')) {
      isStatic = true;
      isButtonVisible = false;
    }
    isStatic = false;
    isButtonVisible = true;
  };

  shouldCheckEffect();

  return (
    <Styled.HeaderBox $isStatic={isStatic}>
      <Styled.Header>
        <Styled.HeaderLogoBox to="/">
          <Styled.HeaderLogoImage src={HeaderLogoIcon} alt="헤더 롤링 로고" />
          <Styled.HeaderLogoText>Rolling</Styled.HeaderLogoText>
        </Styled.HeaderLogoBox>
        {isButtonVisible && <Styled.HeaderButton to="/post">롤링 페이퍼 만들기</Styled.HeaderButton>}
      </Styled.Header>
    </Styled.HeaderBox>
  );
}

export default Header;
