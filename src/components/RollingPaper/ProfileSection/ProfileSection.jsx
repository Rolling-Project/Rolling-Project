import Avatar from '../Avatar/Avatar';
import formatNumber from '../../../utils/helpers/numberUtils';
import Divider from '../Divider/Divider.styled';
import * as S from './ProfileSection.styled';

function ProfileSection({ messages }) {
  if (!messages) return null;

  const [senders] = messages;
  const { count, result: profiles } = senders;

  return (
    <S.Container>
      <S.Content>
        <S.Profiles count={count}>
          {profiles.slice(0, 3).map((sender) => (
            <S.Item key={sender.id}>
              <Avatar imgUrl={sender.profileImageURL} width="1.75rem" height="1.75rem" hasBorder />
            </S.Item>
          ))}
          {count > 3 && (
            <S.Item>
              <S.Others>
                <S.Count>{`+${formatNumber(count - 3)}`}</S.Count>
              </S.Others>
            </S.Item>
          )}
        </S.Profiles>

        <S.Text>
          <strong>{formatNumber(count)}</strong>명이 작성했어요!
        </S.Text>
      </S.Content>
      <Divider vertical />
    </S.Container>
  );
}

export default ProfileSection;
