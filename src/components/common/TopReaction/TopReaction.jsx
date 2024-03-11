import * as Styled from './TopReaction.styled';

function TopReaction({ children, isImage = false }) {
  return <Styled.TopReaction $isImage={isImage}>{children}</Styled.TopReaction>;
}

export default TopReaction;
