import styled from '@emotion/styled';
import EmojiPicker from 'emoji-picker-react';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useSendReactions from '../../utils/hooks/useSendReactions';
import EmojiDropDown from './EmojiDropDown';
import useGetReactions from '../../utils/hooks/useGetReactions';
import Outlined36IconButton from '../common/Button/IconButton';
import colors from '../../styles/colors';
import Divider from './Divider';
import ProfileSection from './ProfileSection';
import SharedSection from './SharedSection';
import ToastBar from './ToastBar';
import copyClipboardText from '../../utils/helpers/copyClipboardText';
import addIcon from '../../assets/add-24.svg';

const Service = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 475px) {
    width: 100%;
  }
`;

const SideSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 13px;
`;

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 24px;
  background-color: ${colors['--White']};
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 475px) {
    flex-wrap: wrap;
  }
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: -0.28px;
  color: ${colors['--Gray-800']};
  cursor: default;

  @media (max-width: 475px) {
    font-size: 18px;
  }
`;

const Emoji = styled.div`
  display: flex;
  align-items: center;
`;

const EmojiAdd = styled.div`
  position: relative;
`;

const Picker = styled.div`
  width: 350px;
  position: absolute;
  top: 42px;
  right: 0;

  @media (max-width: 475px) {
    width: 315px;
    transform: translate(20%, 0);
  }
`;

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
    <Container>
      <Content>
        <Name>{`To. ${name}`}</Name>

        <Service>
          <ProfileSection messages={messages} />

          <SideSection>
            <Emoji>
              <EmojiDropDown reactions={reactions?.results} />
              <EmojiAdd ref={dropRef}>
                <Outlined36IconButton onClick={handleEmojiPicker} icon={addIcon}>
                  추가
                </Outlined36IconButton>
                <Picker>
                  {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} emojiStyle="native" width="100%" />}
                </Picker>
              </EmojiAdd>
            </Emoji>

            <Divider vertical />

            <SharedSection onClick={handleCopy} />
          </SideSection>
        </Service>
      </Content>

      {showToast && <ToastBar>{toastMessage}</ToastBar>}
    </Container>
  );
}

export default Header;
