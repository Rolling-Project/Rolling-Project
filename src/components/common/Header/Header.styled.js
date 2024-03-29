import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import colors from '../../../styles/colors';

export const HeaderBox = styled.header`
  width: 100%;
  min-width: 20rem;
  height: 4rem;
  border-bottom: 0.0625rem solid ${colors['--Gray-270']};
  background-color: ${colors['--White']};
  position: ${({ $isStatic }) => ($isStatic ? 'static' : 'sticky')};
  top: 0;
  z-index: 999;
`;

export const Header = styled.nav`
  max-width: 120rem;
  width: 75rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: auto;
    padding: 0 1.5rem;
  }
`;

export const HeaderButton = styled(Link)`
  border: 1px solid ${colors['--Gray-300']};
  border-radius: 0.375rem;
  padding: 0.6rem 1rem 0.4rem;
  font-weight: 700;
  color: ${colors['--Gray-900']};
  text-align: center;
  line-height: 1.625rem;
  letter-spacing: -0.01rem;

  @media (max-width: 360px) {
    line-height: 1.25rem;
  }
`;

export const HeaderLogoBox = styled(Link)`
  display: flex;
  gap: 0.5rem;
  color: ${colors['--gray-light-gray-90']};
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogoImage = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`;

export const HeaderLogoText = styled.span`
  padding-top: 0.3rem;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 900;
`;
