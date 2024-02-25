import * as Styled from "./Button.styled";

function Button({ type, children, color, hoverColor }) {
  return (
    <Styled.Button $hoverColor={hoverColor} $color={color} type={type}>
      {children}
    </Styled.Button>
  );
}

export default Button;
