import * as Styled from './IntroEmoji.styled';
import downButton from '../../assets/images/icons/down.svg';
import smile from '../../assets/images/icons/smile.svg';
import click from '../../assets/images/icons/click.svg';

function IntroEmoji() {
  return (
    <Styled.EmojiWrap>
      <Styled.AddEmojiBox>
        <Styled.AddEmoji>
          <Styled.Emoji>👍10</Styled.Emoji>
          <Styled.Emoji>24</Styled.Emoji>
          <Styled.Emoji>😍24</Styled.Emoji>
          <Styled.DownButton>
            <img width="0.8125rem" height="0.5rem" src={downButton} alt="아래방향 화살표" />
          </Styled.DownButton>
          <Styled.AddButton>
            <img width="1.375rem" height="1.375rem" src={smile} alt="웃는얼굴" />
            추가
          </Styled.AddButton>
          <Styled.ClickIcon>
            <img width="2.0625rem" height="2.0625rem" src={click} alt="클릭아이콘" />
          </Styled.ClickIcon>
          <Styled.EmojiTypeBox>
            <Styled.EmojiBox>
              <Styled.EmojiContent>
                <Styled.EmojiContentType>👍 24</Styled.EmojiContentType>
                <Styled.EmojiContentType>😍 12</Styled.EmojiContentType>
                <Styled.EmojiContentType>🎉 24</Styled.EmojiContentType>
              </Styled.EmojiContent>
              <Styled.EmojiContent>
                <Styled.EmojiContentType>🥺 10</Styled.EmojiContentType>
                <Styled.EmojiContentType>🥳 8</Styled.EmojiContentType>
                <Styled.EmojiContentType>👏 10</Styled.EmojiContentType>
              </Styled.EmojiContent>
            </Styled.EmojiBox>
          </Styled.EmojiTypeBox>
        </Styled.AddEmoji>
      </Styled.AddEmojiBox>

      <Styled.EmojiContentBox>
        <Styled.EmojiNum>Point.02</Styled.EmojiNum>
        <Styled.EmojiContentTitle>
          서로에게 이모지로 감정을 <br />
          표현해보세요
        </Styled.EmojiContentTitle>
        <Styled.EmojiContentDescription>롤링 페이퍼에 이모지를 추가할 수 있어요.</Styled.EmojiContentDescription>
      </Styled.EmojiContentBox>
    </Styled.EmojiWrap>
  );
}

export default IntroEmoji;
