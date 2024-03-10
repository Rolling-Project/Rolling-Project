import styled from '@emotion/styled';
import colors from '../../../styles/colors';

const Date = styled.div`
  color: ${colors['--Gray-400']};
  font-size: ${(props) => props?.fontSize ?? '14px'};
  line-height: 18px;
  letter-spacing: -0.06px;
`;

export default Date;
