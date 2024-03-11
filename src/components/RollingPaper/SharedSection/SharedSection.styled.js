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
  top: 2.625rem;
  right: 0;
  padding: .625rem .0625rem;
  cursor: pointer;
  span {
    width: 8.625rem;
    padding: .75rem 1rem;
    &:hover {
      background-color: ${colors['--Gray-100']};
    }
  }
`;

export const Icon = styled.img`
  @media (max-width: 475px) {
    width: 1.25rem;
  }
`;
