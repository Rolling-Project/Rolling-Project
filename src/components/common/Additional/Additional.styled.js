import styled from '@emotion/styled';
import colors from '../../../styles/colors';

export const Additional = styled.div`
  padding: ${({ $isBig }) => ($isBig ? '0.5rem 0.5rem 0.26rem' : '0.34rem 0.5rem 0.24rem')};
  border-radius: 1.875rem;
  background: ${colors['--White']};
  border: 1px solid ${colors['--Gray-250']};
  position: absolute;
  left: 3.3rem;
  color: ${colors['--Gray-500']};
  font-size: ${({ $isBig }) => ($isBig ? '0.9rem' : '0.8rem')};
  line-height: 1.125rem;
`;
