import React from "react";
import * as Styled from "./Input.styled"; // 스타일 컴포넌트 임포트

/* eslint-disable react/jsx-props-no-spreading */

function Input({ placeholder = "Placeholder", errorMessage, ...props }) {
  return (
    <Styled.InputContainer className={errorMessage ? "error" : ""}>
      <Styled.StyledInput placeholder={placeholder} {...props} />
      {errorMessage && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
    </Styled.InputContainer>
  );
}

export default Input;
