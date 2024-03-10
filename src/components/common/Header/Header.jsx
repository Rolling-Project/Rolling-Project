import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './Header.styled';
import HeaderLogoIcon from '../../../../public/logo.svg';

function Header() {
  const location = useLocation();
  const [isStatic, setIsStatic] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const shouldCheckEffect = () => {
    const { pathname } = location;
    if (pathname.includes('post')) {
      setIsStatic(true);
      setIsButtonVisible(false);
      return;
    }
    setIsStatic(false);
    setIsButtonVisible(true);
  };

  useEffect(() => {
    shouldCheckEffect();
  }, [location.pathname]);

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
