import styled from '@emotion/styled';
import colors from '../../../styles/colors';
import BaseDropDown from '../DropDown/DropDown.styled';

export const DropDown = styled.div`
  position: relative;
  margin: 0 8px 0 28px;

  @media (max-width: 648px) {
    display: none;
  }

  @media (max-width: 475px) {
    display: block;
  }
`;

export const Item = styled.div`
  width: 63px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  color: ${colors['--White']};
  gap: 5px;
  span {
    transform: translate(0px, 1.5px);
  }
  @media (max-width: 475px) {
    width: 53px;
    height: 28px;
    font-size: 14px;
  }
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const ExpandBox = styled(BaseDropDown)`
  position: absolute;
  top: 42px;
  right: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 8px;
  padding: 24px;

  @media (max-width: 360px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
