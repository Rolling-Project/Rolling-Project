/* eslint-disable react/jsx-curly-brace-presence */
import { useState } from 'react';
import * as S from './CreateTo.styled';
import Input from '../../common/Input/Input';
import Option from '../../common/SelectOption/Option';
import { Primary56Button } from '../../common/Button/Button';

function CreateTo() {
  const [name, setName] = useState('');
  const [toggleValue, setToggleValue] = useState('컬러');
  const [background, setBackground] = useState({ color: 'beige', ing: null });

  const handleChangeInput = (value) => {
    setName(value);
  };

  const handleToggleValue = (value) => {
    setToggleValue(value);
  };

  const handleBackground = (type, value) => {
    setBackground((prev) => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <S.Div>
      <S.To>
        <S.Title>To.</S.Title>
        <Input
          placeholder={'받는 사람 이름을 입력해 주세요'}
          value={name}
          onChange={(value) => handleChangeInput(value)}
        />
      </S.To>

      <S.Background>
        <S.Title>배경화면을 선택해 주세요.</S.Title>
        <S.SubTitle>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</S.SubTitle>

        <S.Toggle onToggle={handleToggleValue} />

        <Option background={toggleValue === '컬러' ? 'color' : 'img'} onSelect={handleBackground} />
      </S.Background>

      <Primary56Button styled={{ width: '100%', marginBottom: '2.4rem' }}>생성하기</Primary56Button>
    </S.Div>
  );
}

export default CreateTo;
