import Profile from '../../Profile/Profile';
import Date from '../../Date/Date.styled';
import Divider from '../../Divider/Divider.styled';
import formatDate from '../../../utils/helpers/dateUtils';
import TextViewer from '../../TextViewer/TextViewer';
import * as S from './MessageCard.styled';

function MessageCard({ message, isEditPage, onClick }) {
  const { id, sender, profileImageURL, relationship, font, content, createdAt } = message;
  return (
    <S.Card onClick={() => onClick(message)}>
      <S.Header>
        <Profile id={id} imgUrl={profileImageURL} sender={sender} relationship={relationship} isEditPage={isEditPage} />
      </S.Header>

      <Divider />

      <S.Message>
        <TextViewer message={content} font={font} />
      </S.Message>

      <Date fontSize="12px">{formatDate(createdAt)}</Date>
    </S.Card>
  );
}

export default MessageCard;
