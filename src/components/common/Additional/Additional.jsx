import * as Styeld from './Additional.styled';

// 추가적으로 몇 명이 더 작성했는지
function Additional({ children, isBig = false }) {
  return <Styeld.Additional $isBig={isBig}>{children}</Styeld.Additional>;
}

export default Additional;
