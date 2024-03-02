import styled from '@emotion/styled';
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSendReactions from '../../utils/hooks/useSendReactions';
import EmojiDropDown from './EmojiDropDown';
import useGetReactions from '../../utils/hooks/useGetReactions';

function Header() {
  const { id: recipientId } = useParams();

  const { data: reactions, isLoading, error } = useGetReactions(recipientId);

  const [isClickedAddButton, setIsClickedAddButton] = useState(false);

  const { mutate } = useSendReactions();

  const onEmojiClick = (emojiData, event) => {
    mutate({ id: recipientId, emoji: emojiData.emoji, type: 'increase' });
  };

  const handleClickedAddButton = () => {
    setIsClickedAddButton((prev) => !prev);
  };

  return (
    <Container>
      <Content>
        <div>To. Ashley Kim</div>
        <EmojiDropDown reactions={reactions?.results} />
        <EmojiAdd>
          <button onClick={handleClickedAddButton}>추가</button>
          <Picker>{isClickedAddButton && <EmojiPicker onEmojiClick={onEmojiClick} />}</Picker>
        </EmojiAdd>
      </Content>
    </Container>
  );
}

export default Header;

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
  align-items: center;
`;

const EmojiAdd = styled.div`
  position: relative;
`;

const Picker = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
`;
