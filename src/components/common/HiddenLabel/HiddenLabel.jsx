import * as Styled from './HiddenLabel.styled';

function HiddenLabel({ htmlFor, children }) {
  return <Styled.HiddenLabel htmlFor={htmlFor}>{children}</Styled.HiddenLabel>;
}

export default HiddenLabel;
