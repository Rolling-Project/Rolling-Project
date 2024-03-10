/* eslint-disable indent */
import styled from '@emotion/styled';
import colors from '../../styles/colors';
import backgroundColorConveter from '../../utils/helpers/bgColorConverter';

export const Card = styled.div`
  display: flex;
  width: ${({ $usage }) => ($usage === 'option' ? '16.8rem' : '27.5rem')};
  height: ${({ $usage }) => ($usage === 'option' ? '16.8rem' : '26rem')};
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: ${({ color, $cardUrl }) =>
    $cardUrl ? `url(${$cardUrl}) center/cover` : colors[backgroundColorConveter(color)]};
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
