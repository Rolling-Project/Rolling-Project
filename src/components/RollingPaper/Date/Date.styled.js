import styled from '@emotion/styled';
import colors from '../../../styles/colors';

const Date = styled.div`
  color: ${colors['--Gray-400']};
  font-size: ${(props) => props?.fontSize ?? '0.87rem'};
  line-height: 1.125rem;
`;

export default Date;
