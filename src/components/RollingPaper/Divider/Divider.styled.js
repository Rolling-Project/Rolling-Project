import styled from '@emotion/styled';
import colors from '../../../styles/colors';

const Divider = styled.div`
  width: ${({ vertical }) => (vertical ? '0.06rem' : '100%')};
  height: ${({ vertical }) => (vertical ? '1.75rem' : '0.06rem')};
  background-color: ${colors['--Gray-200']};
`;

export default Divider;
