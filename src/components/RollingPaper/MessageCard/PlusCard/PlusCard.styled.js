import styled from '@emotion/styled';
import colors from '../../../../styles/colors';
import BaseCard from '../BaseCard.styled';
import Circle from '../../Circle/Circle.styled';

export const Card = styled(BaseCard)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Plus = styled(Circle)`
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${colors['--Gray-500']};
`;
