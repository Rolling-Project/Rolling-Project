import { useNavigate } from 'react-router-dom';
import * as Styled from './Card.styled';
import Additional from '../common/Additional/Additional';
import RecentUserProfile from '../common/RecentUserProfile/RecentUserProfile';
import TopReaction from '../common/TopReaction/TopReaction';
import backgroundColorConveter from '../../utils/helpers/bgColorConverter';

function Card({ data, isBig = false }) {
  const { name, backgroundColor, backgroundImageURL, messageCount, recentMessages, topReactions } = data;
  const effect = backgroundImageURL || backgroundColorConveter(backgroundColor);
  const isImage = backgroundImageURL === null;
  const navigate = useNavigate();

  const handlePageMove = (id) => {
    navigate(`/post/${id}`, {
      state: {
        name, // 유저 이름
        effect // 배경색 or 배경 이미지
      }
    });
  };
  return (
    <Styled.Card onClick={() => handlePageMove(data.id)} $effect={effect} $isImage={isImage} $isBig={isBig} color={backgroundColor}>
      <Styled.Recipient $isImage={isImage} $isBig={isBig}>
        {`To. ${name}`}
      </Styled.Recipient>
      <Styled.RecentMessageBox $isBig={isBig}>
        {recentMessages.length ? (
          recentMessages.map((message) => {
            const { id, profileImageURL } = message;
            return (
              <RecentUserProfile
                key={id}
                src={profileImageURL}
                alt="글 작성해준 유저의 프로필 이미지"
                loading="lazy"
                isBig={isBig}
              />
            );
          })
        ) : (
          <Styled.DefaultMessage $isImage={isImage} $isBig={isBig}>
            <Styled.TextBoldEffect>따뜻한 마음</Styled.TextBoldEffect>을 전하는
          </Styled.DefaultMessage>
        )}
        {messageCount > 3 && <Additional isBig={isBig}>{`+${messageCount - 3}`}</Additional>}
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
        {topReactions.length ? (
          topReactions.map((reaction) => {
            const { id, emoji, count } = reaction;
            return <TopReaction isImage={isImage} key={id}>{`${emoji} ${count}`}</TopReaction>;
          })
        ) : (
          <Styled.DefaultReaction $isImage={isImage}>🙃 이모티콘을 남겨주세요</Styled.DefaultReaction>
        )}
      </Styled.ReactionBox>
    </Styled.Card>
  );
}

export default Card;
