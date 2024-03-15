import styled from '@emotion/styled';
import colors from '../../styles/colors';
import BaseDropDown from '../DropDown/DropDown.styled';

export const DropDown = styled.div`
  position: relative;
  margin: 0 0.5rem 0 1.75rem;

  @media (max-width: 648px) {
    display: none;
  }

  @media (max-width: 475px) {
    display: block;
  }
`;

export const Item = styled.div`
  width: 4rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.54);
  color: ${colors['--White']};
  gap: 0.31rem;
  span {
    transform: translate(0, 0.09rem);
  }
  @media (max-width: 475px) {
    width: 3.3rem;
    height: 1.75rem;
    font-size: 0.8rem;
  }
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const ExpandBox = styled(BaseDropDown)`
  position: absolute;
  top: 2.62rem;
  right: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.62rem 0.5rem;
  padding: 1.5rem;

  @media (max-width: 443px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
