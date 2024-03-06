import { Link } from 'react-router-dom';
import * as Styled from './Card.styled';
import Additional from '../common/Additional/Additional';
import RecentMessage from '../common/RecentMessage/RecentMessage';
import TopReaction from '../common/TopReaction/TopReaction';
import BACKGROUND_IMAGE_EFFECT from '../../utils/constants/bgImageEffect';
import backgroundColorConveter from '../../utils/helpers/bgColorConverter';

function Card({ data, isBig = false }) {
  const { name, backgroundColor, backgroundImageURL, messageCount, recentMessages, topReactions } = data;
  const effetct = backgroundImageURL || backgroundColorConveter(backgroundColor);
  const isImage = backgroundImageURL === null;
  return (
    <Styled.Card $effect={effetct} $isImage={isImage} $isBig={isBig}>
      <Link to={`/post/${data.id}`}>
        <Styled.Recipient $isImage={isImage} $isBig={isBig}>
          To.
          {name}
        </Styled.Recipient>
        <Styled.RecentMessageBox $isBig={isBig}>
          {recentMessages?.map((message) => {
            const { id, profileImageURL } = message;
            return (
              <RecentMessage
                key={id}
                src={profileImageURL}
                alt='글 작성해준 유저의 프로필 이미지'
                loading='lazy'
                isBig={isBig}
              />
            );
          })}
          {messageCount > 3 && <Additional isBig={isBig}>{`+${messageCount - 3}`}</Additional>}
          {!recentMessages.length && (
            <Styled.DefaultMessage $isImage={isImage} $isBig={isBig}>
              <Styled.TextBoldEffect>따뜻한 마음</Styled.TextBoldEffect>을 전하는
            </Styled.DefaultMessage>
          )}
        </Styled.RecentMessageBox>

        <Styled.MessageCount $isImage={isImage} $isBig={isBig}>
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

        <Styled.ReactionBox $isImage={isImage} $isBig={isBig}>
          {topReactions?.map((reaction) => {
            const { id, emoji, count } = reaction;
            return <TopReaction isImage={isImage} key={id}>{`${emoji} ${count}`}</TopReaction>;
          })}
          {!topReactions.length && (
            <Styled.DefaultReaction $isImage={isImage}>🙃 이모티콘을 남겨주세요</Styled.DefaultReaction>
          )}
        </Styled.ReactionBox>
        {isImage && (
          <Styled.BackgroundEffect src={BACKGROUND_IMAGE_EFFECT[backgroundColor]} alt='카드 배경 효과' loading='lazy' />
        )}
      </Link>
    </Styled.Card>
  );
}

export default Card;
