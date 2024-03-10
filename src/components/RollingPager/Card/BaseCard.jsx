import styled from '@emotion/styled';
import colors from '../../../styles/colors';

const BaseCard = styled.li`
  height: 280px;
  border-radius: 16px;
  background: ${colors['--White']};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

export default BaseCard;
