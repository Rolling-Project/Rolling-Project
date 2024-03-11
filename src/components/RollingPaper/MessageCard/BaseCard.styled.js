import styled from '@emotion/styled';
import colors from '../../../styles/colors';

const BaseCard = styled.li`
  height: 17.5rem;
  border-radius: 1rem;
  background: ${colors['--White']};
  box-shadow: 0 .125rem .75rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

export default BaseCard;
