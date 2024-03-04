import styled from '@emotion/styled';
import Avatar from './Avatar';
import Circle from './Circle';
import formatNumber from '../../utils/helpers/numberUtils';
import colors from '../../styles/colors';

function ProfileSection({ messages }) {
  if (!messages) return;
  const [senders] = messages;
  const [count, profiles] = [senders.count, senders.result];

  return (
    <Container>
      <Profiles count={count}>
        {profiles
          .filter((ele, idx) => idx < 3)
          .map((sender) => (
            <Item key={sender.id}>
              <Avatar imgUrl={sender.profileImageURL} width={'28px'} height={'28px'} hasBorder />
            </Item>
          ))}
        {count > 3 && (
          <Item>
            <Others>
              <Count>{`+${formatNumber(count - 3)}`}</Count>
            </Others>
          </Item>
        )}
      </Profiles>

      <Text>
        <span>{count}</span>명이 작성했어요!
      </Text>
    </Container>
  );
}

export default ProfileSection;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 28px;
`;

const Profiles = styled.div`
  position: relative;
  display: flex;
  width: ${({ count }) => `${28 + (count - 1) * 16}px`};
  height: 28px;
`;

const Others = styled(Circle)`
  width: 28px;
  height: 28px;
  background-color: ${colors['--White']};
  border: 1px solid ${colors['--Gray-250']};
`;

const Item = styled.div`
  position: absolute;

  &:nth-of-type(2) {
    position: absolute;
    left: 16px;
  }

  &:nth-of-type(3) {
    position: absolute;
    left: 32px;
  }

  &:nth-of-type(4) {
    position: absolute;
    left: 48px;
  }
`;

const Count = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  color: #484848;
  font-size: 12px;
  font-weight: 500;
  transform: translate(-52%, -41%);
`;

const Text = styled.p`
  font-size: 18px;
  transform: translate(0, 2px);
  span {
    font-weight: 700;
  }
`;
