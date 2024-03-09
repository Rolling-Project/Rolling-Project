import React, { useState } from 'react';
import * as S from './ToggleButton.styled';

function ToggleButton({ className, onToggle }) {
  const initialToggle = {
    컬러: false,
    이미지: false
  };
  const [isToggled, setIsToggled] = useState({ ...initialToggle, 컬러: true });

  const handleToggle = (value) => {
    setIsToggled(() => ({
      ...initialToggle,
      [value]: true
    }));
    onToggle(value);
  };

  return (
    <S.ToggleDiv className={className}>
      <S.Toggle $isToggled={isToggled['컬러']} onClick={() => handleToggle('컬러')}>
        컬러
      </S.Toggle>
      <S.Toggle $isToggled={isToggled['이미지']} onClick={() => handleToggle('이미지')}>
        이미지
      </S.Toggle>
    </S.ToggleDiv>
  );
}

export default ToggleButton;
