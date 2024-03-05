import styled from '@emotion/styled';
import EmojiPicker from 'emoji-picker-react';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useSendReactions from '../../utils/hooks/useSendReactions';
import EmojiDropDown from './EmojiDropDown';
import useGetReactions from '../../utils/hooks/useGetReactions';
import { Outlined36IconButton } from '../../components/common/Button/Button';
import colors from '../../styles/colors';
import Divider from './Divider';
import ProfileSection from './ProfileSection';
import SharedSection from './SharedSection';
import ToastBar from './ToastBar';
import copyClipboardText from '../../utils/helpers/copyClipboardText';

const Service = styled.div`
  display: flex;
  align-items: center;
`;

const SideSection = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-color: ${colors['--White']};
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: -0.28px;
  color: ${colors['--Gray-800']};
  cursor: default;
`;

const Emoji = styled.div`
  display: flex;
  align-items: center;
`;

const EmojiAdd = styled.div`
  position: relative;
`;

const Picker = styled.div`
  position: absolute;
  top: 42px;
  right: 0;
`;

function Header(props) {
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
      setShowToast(true);
      setToastMessage('URL이 복사 되었습니다.');
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } else {
      setToastMessage('URL 복사를 실패했습니다.');
    }
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
        <Name>To. Ashley Kim</Name>

        <Service>
          <ProfileSection {...props} />

          <Divider vertical />

          <SideSection>
            <Emoji>
              <EmojiDropDown reactions={reactions?.results} />
              <EmojiAdd ref={dropRef}>
                <Outlined36IconButton onClick={handleEmojiPicker} width={'90px'}>
                  추가
                </Outlined36IconButton>
                <Picker>{showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}</Picker>
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
