import styled from '@emotion/styled';
import colors from '../../styles/colors';

const BaseCard = styled.li`
  height: 17.5rem;
  border-radius: 1rem;
  background: ${colors['--White']};
  box-shadow: 0 0.12rem 0.75rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
`;

export default BaseCard;
