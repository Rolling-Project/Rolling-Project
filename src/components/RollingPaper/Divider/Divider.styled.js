import styled from '@emotion/styled';
import colors from '../../../styles/colors';

const Divider = styled.div`
  width: ${({ vertical }) => (vertical ? '1px' : '100%')};
  height: ${({ vertical }) => (vertical ? '28px' : '1px')};
  background-color: ${colors['--Gray-200']};
`;

export default Divider;
