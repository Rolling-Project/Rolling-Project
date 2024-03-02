import styled from '@emotion/styled';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSendReactions from '../../utils/hooks/useSendReactions';

const Container = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const Emoji = styled.div`
  position: relative;
`;

const EmojiBox = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
`;

function Header() {
  const { id: recipientId } = useParams();
  const [isClickedAddButton, setIsClickedAddButton] = useState(false);

  const onEmojiClick = (emojiData, event) => {
    mutate({ id: recipientId, emoji: emojiData.emoji, type: 'increase' });
  };

  const handleClickedAddButton = () => {
    setIsClickedAddButton((prev) => !prev);
  };

  const { mutate } = useSendReactions();

  return (
    <Container>
      <Content>
        <div>To. Ashley Kim</div>
        <Emoji>
          <button onClick={handleClickedAddButton}>추가</button>
          <EmojiBox>{isClickedAddButton && <EmojiPicker onEmojiClick={onEmojiClick} />}</EmojiBox>
        </Emoji>
      </Content>
    </Container>
  );
}

export default Header;
