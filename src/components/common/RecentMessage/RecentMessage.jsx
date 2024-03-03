import * as Styeld from './RecentMessage.styled';

function RecentMessage({ src, isBig = false }) {
  return <Styeld.RecentMessage src={src} alt="글 작성해준 유저의 프로필 이미지" $isBig={isBig} loading="lazy" />;
}

export default RecentMessage;
