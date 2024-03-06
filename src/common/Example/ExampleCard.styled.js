/* eslint-disable indent */
import styled from '@emotion/styled';
import colors from '../../styles/colors';

export const Card = styled.div`
  display: flex;
  width: ${({ $usage }) => ($usage === 'option' ? '16.8rem' : '27.5rem')};
  height: ${({ $usage }) => ($usage === 'option' ? '16.8rem' : '26rem')};
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: ${({ color, theme, $cardUrl }) =>
    $cardUrl
      ? `url(${$cardUrl}) center/cover`
      : (() => {
          switch (color) {
            case 'beige':
              return colors['--Orange-200'];
            case 'purple':
              return colors['--Purple-200'];
            case 'blue':
              return colors['--Blue-200'];
            case 'green':
              return colors['--Green-200'];
            default:
              return 'none';
          }
        })()};
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
