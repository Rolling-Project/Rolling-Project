import * as Styeld from './RecentUserProfile.styled';

function RecentUserProfile({ src, isBig = false }) {
  return <Styeld.RecentUserProfile src={src} alt="글 작성해준 유저의 프로필 이미지" $isBig={isBig} loading="lazy" />;
}

export default RecentUserProfile;
