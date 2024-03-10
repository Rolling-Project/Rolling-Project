/* eslint-disable indent */
import styled from '@emotion/styled';
import colors from '../../styles/colors';
import backgroundColorConveter from '../../utils/helpers/bgColorConverter';

export const Card = styled.li`
  display: flex;
  width: ${({ $usage }) => ($usage === 'option' ? '8.4rem' : '13.5rem')};
  height: ${({ $usage }) => ($usage === 'option' ? '8.4rem' : '13rem')};
  border-radius: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: ${({ color, $cardUrl }) =>
    $cardUrl ? `url(${$cardUrl}) center/cover no-repeat` : colors[backgroundColorConveter(color)]};
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
