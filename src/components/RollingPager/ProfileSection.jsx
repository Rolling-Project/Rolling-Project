import styled from '@emotion/styled';
import Avatar from './Avatar';
import Circle from './Circle';
import formatNumber from '../../utils/helpers/numberUtils';
import colors from '../../styles/colors';
import Divider from './Divider';

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 866px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 28px;
`;

const Profiles = styled.div`
  position: relative;
  display: flex;
  width: ${({ count }) => (count <= 4 ? `${28 + (count - 1) * 16}px` : '76px')};
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
  strong {
    font-weight: 700;
  }

  @media (max-width: 1019px) {
    display: none;
  }
`;

function ProfileSection({ messages }) {
  if (!messages) return null;

  const [senders] = messages;
  const { count, result: profiles } = senders;

  return (
    <Container>
      <Content>
        <Profiles count={count}>
          {profiles.slice(0, 3).map((sender) => (
            <Item key={sender.id}>
              <Avatar imgUrl={sender.profileImageURL} width="28px" height="28px" hasBorder />
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
          <strong>{formatNumber(count)}</strong>명이 작성했어요!
        </Text>
      </Content>
      <Divider vertical />
    </Container>
  );
}

export default ProfileSection;
