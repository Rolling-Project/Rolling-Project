import styled from '@emotion/styled';
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSendReactions from '../../utils/hooks/useSendReactions';
import EmojiDropDown from './EmojiDropDown';
import useGetReactions from '../../utils/hooks/useGetReactions';
import { Outlined36Button, Outlined36IconButton } from '../../components/common/Button/Button';
import shardIcon from '../../assets/share-24.svg';
import colors from '../../styles/colors';
import Divider from './Divider';

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
        <Name>To. Ashley Kim</Name>

        <Wrapper>
          <Emoji>
            <EmojiDropDown reactions={reactions?.results} />

            <EmojiAdd>
              <Outlined36IconButton onClick={handleClickedAddButton} width={'90px'}>
                추가
              </Outlined36IconButton>
              <Picker>{isClickedAddButton && <EmojiPicker onEmojiClick={onEmojiClick} />}</Picker>
            </EmojiAdd>
          </Emoji>

          <Divider vertical />

          <Outlined36Button w={'56px'}>
            <img src={shardIcon} />
          </Outlined36Button>
        </Wrapper>
      </Content>
    </Container>
  );
}

export default Header;

const Wrapper = styled.div`
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
