import styled from '@emotion/styled';
import colors from '../../../styles/colors';
import BaseDropDown from '../DropDown/DropDown.styled';

export const Shared = styled.div`
  position: relative;
`;

export const SharedDropDown = styled(BaseDropDown)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 42px;
  right: 0;
  padding: 10px 1px;
  cursor: pointer;
  span {
    width: 138px;
    padding: 12px 16px;
    &:hover {
      background-color: ${colors['--Gray-100']};
    }
  }
`;

export const Icon = styled.img`
  @media (max-width: 475px) {
    width: 20px;
  }
`;
