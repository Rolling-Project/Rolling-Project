import { useEffect, useRef } from 'react';
import Profile from '../Profile/Profile';
import Date from '../Date/Date.styled';
import Divider from '../Divider/Divider.styled';
import { Primary40Button } from '../common/Button/Button';
import formatDate from '../../utils/helpers/dateUtils';
import TextViewer from '../TextViewer/TextViewer';
import * as S from './MessageModal.styled';

function MessageModal({ message, onClose }) {
  const { sender, profileImageURL, relationship, font, content, createdAt } = message;

  const modalRef = useRef(null);

  const handleOutSideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutSideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  });

  return (
    <div>
      <S.Backdrop />
      <S.Modal ref={modalRef}>
        <S.Header>
          <Profile imgUrl={profileImageURL} sender={sender} relationship={relationship} />
          <Date fontSize=".875rem">{formatDate(createdAt)}</Date>
        </S.Header>

        <Divider />

        <S.Content>
          <TextViewer message={content} font={font} />
        </S.Content>

        <S.Footer>
          <Primary40Button w="7.5rem" onClick={() => onClose()}>
            확인
          </Primary40Button>
        </S.Footer>
      </S.Modal>
    </div>
  );
}

export default MessageModal;
