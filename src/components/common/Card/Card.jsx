import * as Styled from "./Card.styled";
import a from "../../../assets/user-profile.png";
import PurpleBackgroundImg from "../../../assets/purple-circle.svg";
import BeigeBackgroundImg from "../../../assets/beige-rectangle.svg";
import GreenBackgroundImg from "../../../assets/green-circle.svg";
import BlueBackgroundImg from "../../../assets/blue-triangle.svg";

const backgroundImg = {
  purple: PurpleBackgroundImg,
  beige: BeigeBackgroundImg,
  green: GreenBackgroundImg,
  blue: BlueBackgroundImg
};

const colorConveter = (color) => {
  switch (color) {
    case "beige":
      return "Orange-200";

    case "blue":
      return "Blue-200";

    case "green":
      return "Green-200";

    default:
      return "Purple-200";
  }
};

function Card({ data }) {
  const { name, backgroundColor, backgroundImageURL, messageCount, recentMessages, topReactions } = data;
  return (
    <Styled.Card $color={colorConveter(backgroundColor)}>
      <Styled.Recipient>
        To.
        {name}
      </Styled.Recipient>

      <Styled.RecentMessageBox>
        {recentMessages?.map((message) => {
          const { id, profileImageURL } = message;
          return <Styled.RecentMessage key={id} src={profileImageURL} />;
        })}
        {messageCount > 3 && <Styled.Additional>{`+${messageCount - 3}`}</Styled.Additional>}
        {!recentMessages.length && (
          <Styled.DefaultMessage>
            <Styled.TextBoldEffect>따뜻한 마음</Styled.TextBoldEffect>
            을 전하는
          </Styled.DefaultMessage>
        )}
      </Styled.RecentMessageBox>

      <Styled.MessageCount>
        {
          messageCount
            ? (
              <>
                <Styled.TextBoldEffect>{`${messageCount}명`}</Styled.TextBoldEffect>
                이 작성했어요!
              </>
            )
            : (
              <>
                <Styled.TextBoldEffect>첫 글</Styled.TextBoldEffect>
                을 남겨주세요!
              </>
            )
        }
      </Styled.MessageCount>

      <Styled.ReactionBox>
        {topReactions?.map((reaction) => {
          const { id, emoji, count } = reaction;
          return <Styled.TopReaction>{`${emoji} ${count}`}</Styled.TopReaction>;
        })}
        {!topReactions.length && <Styled.DefaultReaction>🙃 이모티콘을 남겨주세요</Styled.DefaultReaction>}
      </Styled.ReactionBox>
      <Styled.Back src={backgroundImg[backgroundColor]} />
    </Styled.Card>
  );
}

export default Card;
