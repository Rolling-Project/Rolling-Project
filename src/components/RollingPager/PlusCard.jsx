import styled from '@emotion/styled';
import colors from '../../styles/colors';
import BaseCard from './BaseCard';
import Circle from './Circle';
import plusIcon from '../../assets/images/ic_plus.svg';

const Card = styled(BaseCard)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Plus = styled(Circle)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors['--Gray-500']};
`;

const PlusCard = () => (
  <Card>
    <Plus>
      <img src={plusIcon} alt="플러스 아이콘" />
    </Plus>
  </Card>
);

export default PlusCard;
