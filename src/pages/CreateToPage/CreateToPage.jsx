import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as S from './CreateTo.styled';
import Input from '../../components/common/Input/Input';
import Option from '../../components/common/SelectOption/Option';
import HiddenLabel from '../../components/common/HiddenLabel/HiddenLabel';
import { Primary56Button } from '../../components/common/Button/Button';
import API_PATH from '../../services/api-path';
import backgroundColorConveter from '../../utils/helpers/bgColorConverter';

function CreateTo() {
  const [name, setName] = useState('');
  const [toggleValue, setToggleValue] = useState('컬러');
  const [color, setColor] = useState('beige');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleChangeInput = (value) => {
    setName(value);
  };

  const handleToggleValue = (value) => {
    setToggleValue(value);
  };

  const handleBackground = (type, value) => {
    if (type === 'color') {
      setColor(value);
    }
    setImage(value);
  };

  const handleSubmit = async () => {
    if (!name) {
      return;
    }
    await fetch(API_PATH.CREATE_TO, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        backgroundColor: color,
        backgroundImageURL: toggleValue === '컬러' ? null : image
      })
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/post/${data.id}`, {
          state: {
            name: data.name,
            effect: data.backgroundImageURL ?? backgroundColorConveter(data.backgroundColor)
          }
        });
      })
      .catch((error) => error);
  };

  return (
    <>
      <Helmet>
        <title>Rolling | 롤링 페이퍼 생성하기</title>
      </Helmet>
      <S.Div>
        <S.Title>To.</S.Title>
        <S.To>
          <HiddenLabel htmlFor="name" />
          <Input
            placeholder="받는 사람 이름을 입력해 주세요"
            value={name}
            onInputChange={(value) => handleChangeInput(value)}
          />
        </S.To>

        <S.Title>배경화면을 선택해 주세요.</S.Title>
        <S.SubTitle>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</S.SubTitle>

        <S.Background>
          <S.Toggle onToggle={handleToggleValue} />

          <Option background={toggleValue === '컬러' ? 'color' : 'img'} onSelect={handleBackground} />
        </S.Background>

        <Primary56Button w="35rem" styled={{ marginBottom: '2.4rem' }} onClick={handleSubmit}>
          생성하기
        </Primary56Button>
      </S.Div>
    </>
  );
}

export default CreateTo;
