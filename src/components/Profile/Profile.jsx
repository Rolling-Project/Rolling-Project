import Avatar from '../Avatar/Avatar';
import useDeleteMessages from '../../utils/hooks/useDeleteMessages';
import { Outlined36Button } from '../common/Button/Button';
import deletedIcon from '../../assets/images/icons/deleted.svg';
import * as S from './Profile.styled';

function Profile({ id: messageId, imgUrl, sender, relationship, isEditPage }) {
  const { mutate } = useDeleteMessages();

  const handleDelete = (e) => {
    e.stopPropagation();
    mutate({ id: messageId });
  };

  return (
    <S.Container>
      <S.Content>
        <Avatar imgUrl={imgUrl} width="3.5rem" height="3.5rem" />
        <div>
          <S.Name>
            From.
            <span>{` ${sender}`}</span>
          </S.Name>
          <S.Badge relationship={relationship}>{relationship}</S.Badge>
        </div>
      </S.Content>

      {isEditPage && (
        <Outlined36Button onClick={handleDelete} small>
          <img src={deletedIcon} alt="삭제 아이콘" />
        </Outlined36Button>
      )}
    </S.Container>
  );
}

export default Profile;
