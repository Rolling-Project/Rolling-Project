import styled from '@emotion/styled';
import colors from '../../../styles/colors';

// 최근 메세지 3명
export const RecentMessage = styled.img`
  width: ${({ $isBig }) => ($isBig ? '2rem' : '1.75rem')};
  height: ${({ $isBig }) => ($isBig ? '2rem' : '1.75rem')};
  border-radius: 3.125rem;
  border: 1.5px solid ${colors['--White']};

  &:nth-of-type(2) {
    position: absolute;
    left: 1.1rem;
  }

  &:nth-of-type(3) {
    position: absolute;
    left: 2.2rem;
  }
`;
