import * as Styeld from './Additional.styled';

function Additional({ children, isBig = false }) {
  return <Styeld.Additional $isBig={isBig}>{children}</Styeld.Additional>;
}

export default Additional;
