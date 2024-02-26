import * as Styled from "./Card.styled";
import PurpleBackgroundImg from "../../../assets/purple-circle.svg";
import BeigeBackgroundImg from "../../../assets/beige-rectangle.svg";
import GreenBackgroundImg from "../../../assets/green-circle.svg";
import BlueBackgroundImg from "../../../assets/blue-triangle.svg";
import backgroundColorConveter from "../../../utils/helpers/backgroundColorConverter";

const BACKGROUND_IMAGE_EFFECT = {
  purple: PurpleBackgroundImg,
  beige: BeigeBackgroundImg,
  green: GreenBackgroundImg,
  blue: BlueBackgroundImg
};

function Card({ data }) {
  const { name, backgroundColor, backgroundImageURL, messageCount, recentMessages, topReactions } = data;
  const isColor = backgroundColor === null;
  return (
    <Styled.Card $color={backgroundColorConveter(backgroundColor)} $b={backgroundImageURL}>
      <Styled.Recipient $isColor={isColor}>
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
          <Styled.DefaultMessage $isColor={isColor}>
            <Styled.TextBoldEffect>따뜻한 마음</Styled.TextBoldEffect>
            을 전하는
          </Styled.DefaultMessage>
        )}
      </Styled.RecentMessageBox>

      <Styled.MessageCount $isColor={isColor}>
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

      <Styled.ReactionBox $isColor={isColor}>
        {topReactions?.map((reaction) => {
          const { id, emoji, count } = reaction;
          return <Styled.TopReaction $isColor={isColor} key={id}>{`${emoji} ${count}`}</Styled.TopReaction>;
        })}
        {!topReactions.length && <Styled.DefaultReaction>🙃 이모티콘을 남겨주세요</Styled.DefaultReaction>}
      </Styled.ReactionBox>
      {/* {backgroundColor && <Styled.BackgroundEffect src={BACKGROUND_IMAGE_EFFECT[backgroundColor]} />} */}
    </Styled.Card>
  );
}

export default Card;
