import { Link } from "react-router-dom";
import * as Styled from "./Card.styled";
import BACKGROUND_IMAGE_EFFECT from "../../utils/constants/bgImageEffect";
import backgroundColorConveter from "../../utils/helpers/bgColorConverter";

function Card({ data }) {
  const { name, backgroundColor, backgroundImageURL, messageCount, recentMessages, topReactions } = data;
  const effetct = backgroundImageURL || backgroundColorConveter(backgroundColor);
  const isImage = backgroundImageURL === null;
  return (
    <Link to={`/post/${data.id}`}>
      <Styled.Card $effect={effetct} $isImage={isImage}>
        <Styled.Recipient $isImage={isImage}>
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
            <Styled.DefaultMessage $isImage={isImage}>
              <Styled.TextBoldEffect>따뜻한 마음</Styled.TextBoldEffect>을 전하는
            </Styled.DefaultMessage>
          )}
        </Styled.RecentMessageBox>

        <Styled.MessageCount $isImage={isImage}>
          {messageCount ? (
            <>
              <Styled.TextBoldEffect>{`${messageCount}명`}</Styled.TextBoldEffect>이 작성했어요!
            </>
          ) : (
            <>
              <Styled.TextBoldEffect>첫 글</Styled.TextBoldEffect>을 남겨주세요!
            </>
          )}
        </Styled.MessageCount>

        <Styled.ReactionBox $isImage={isImage}>
          {topReactions?.map((reaction) => {
            const { id, emoji, count } = reaction;
            return <Styled.TopReaction $isImage={isImage} key={id}>{`${emoji} ${count}`}</Styled.TopReaction>;
          })}
          {!topReactions.length && (
            <Styled.DefaultReaction $isImage={isImage}>🙃 이모티콘을 남겨주세요</Styled.DefaultReaction>
          )}
        </Styled.ReactionBox>
        {isImage && <Styled.BackgroundEffect src={BACKGROUND_IMAGE_EFFECT[backgroundColor]} alt="카드 배경 이펙트" />}
      </Styled.Card>
    </Link>
  );
}

export default Card;
