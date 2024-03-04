import styled from '@emotion/styled';
import colors from '../../styles/colors';
import Avatar from './Avatar';
import BADGE_COLORS from '../../utils/constants/badgeColors';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Name = styled.div`
  font-size: 20px;
  margin-bottom: 6px;
  span {
    font-weight: bold;
  }
`;

const Badge = styled.div`
  display: inline-block;
  padding: 0 8px;
  background-color: ${(props) => colors[BADGE_COLORS[props.relationship]?.backgroundColor]};
  color: ${(props) => colors[BADGE_COLORS[props.relationship]?.color]};
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.07px;
`;

function Profile({ imgUrl, sender = '김동훈', relationship = '동료' }) {
  return (
    <Container>
      <Avatar imgUrl={imgUrl} width={'56px'} height={'56px'} />
      <div>
        <Name>
          From.
          <span>{` ${sender}`}</span>
        </Name>
        <Badge relationship={relationship}>{relationship}</Badge>
      </div>
    </Container>
  );
}

export default Profile;
