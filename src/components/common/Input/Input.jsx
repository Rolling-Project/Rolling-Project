/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import colors from '../../../styles/colors';

const Styled = {
  Input: styled.input`
    width: 100%;
    max-width: 35rem;
    padding: 0.6rem 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;
    border: ${({ $isEmpty }) => ($isEmpty ? `1px solid ${colors['--Error']}` : `1px solid ${colors['--Gray-300']}`)};
    background: ${colors['--White']};

    color: ${colors['--Gray-900']};
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3rem; /* 162.5% */
    letter-spacing: -0.008rem;

    &::placeholder {
      color: ${colors['--Gray-500']};
    }

    &:active {
      border: ${colors['--Gray-700']};
    }
    &:hover {
      border: ${colors['--Gray-500']};
    }
    &:focus {
      border: ${colors['--Gray-500']};
    }
  `,

  InputError: styled.span`
    display: flex;
    max-width: 36rem;
    width: 50%;
    color: ${`1px solid ${colors['--Error']}`};
    font-size: 0.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.9rem; /* 150% */
  `
};

function Input({ value, placeholder, onInputChange }) {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleInputChange = (e) => {
    setIsEmpty(false);
    onInputChange(e.target.value);
  };
  const handleInputBlur = (e) => {
    if (!e.target.value) setIsEmpty(true);
  };

  return (
    <>
      <Styled.Input
        type="text"
        id="name"
        value={value}
        placeholder={placeholder}
        $isEmpty={isEmpty}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      {isEmpty && <Styled.InputError>값을 입력해 주세요.</Styled.InputError>}
    </>
  );
}

export default Input;
