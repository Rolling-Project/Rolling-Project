import EmojiPicker from 'emoji-picker-react';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useSendReactions from '../../utils/hooks/useSendReactions';
import EmojiDropDown from '../EmojiDropDown/EmojiDropDown';
import useGetReactions from '../../utils/hooks/useGetReactions';
import Outlined36IconButton from '../common/Button/IconButton';
import Divider from '../Divider/Divider.styled';
import ProfileSection from '../ProfileSection/ProfileSection';
import SharedSection from '../SharedSection/SharedSection';
import ToastBar from '../ToastBar/ToastBar';
import copyClipboardText from '../../utils/helpers/copyClipboardText';
import addIcon from '../../assets/images/icons/add-24.svg';
import * as S from './HeaderService.styled';

function Header({ messages, name }) {
  const { id: recipientId } = useParams();

  const { data: reactions, isLoading, error } = useGetReactions(recipientId);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const [toastMessage, setToastMessage] = useState(null);

  const { mutate } = useSendReactions();

  const dropRef = useRef(null);

  const handleCopy = async () => {
    const isCopied = await copyClipboardText();

    if (isCopied) {
      setToastMessage('URL이 복사 되었습니다.');
    } else {
      setToastMessage('URL 복사를 실패했습니다.');
    }

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const onEmojiClick = (emojiData, event) => {
    mutate({ id: recipientId, emoji: emojiData.emoji, type: 'increase' });
  };

  const handleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  const handleOutSideClick = (e) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutSideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  });

  return (
    <S.Container>
      <S.Content>
        <S.Name>{`To. ${name}`}</S.Name>

        <S.Service>
          <ProfileSection messages={messages} />

          <S.SideSection>
            <S.Emoji>
              <EmojiDropDown reactions={reactions?.results} />
              <S.EmojiAdd ref={dropRef}>
                <Outlined36IconButton onClick={handleEmojiPicker} icon={addIcon}>
                  추가
                </Outlined36IconButton>
                <S.Picker>
                  {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} emojiStyle="native" width="100%" />}
                </S.Picker>
              </S.EmojiAdd>
            </S.Emoji>

            <Divider vertical />

            <SharedSection onClick={handleCopy} />
          </S.SideSection>
        </S.Service>
      </S.Content>

      {showToast && <ToastBar>{toastMessage}</ToastBar>}
    </S.Container>
  );
}

export default Header;
