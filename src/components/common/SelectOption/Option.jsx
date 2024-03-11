/* eslint-disable jsx-quotes */
import { useState } from 'react';
import * as S from './Option.styled';
import ExampleCard from '../Example/ExampleCard';

function Option({ background, onSelect }) {
  const cards = [
    { key: 'beige', color: 'beige' },
    { key: 'purple', color: 'purple' },
    { key: 'blue', color: 'blue' },
    { key: 'green', color: 'green' }
  ];
  const imgUrls = [
    'https://picsum.photos/id/10/3840/2160',
    'https://picsum.photos/id/11/3840/2160',
    'https://picsum.photos/id/13/3840/2160',
    'https://picsum.photos/id/16/3840/2160'
  ];

  const initState = {
    beige: false,
    purple: false,
    blue: false,
    green: false
  };

  const initImg = {
    0: false,
    1: false,
    2: false,
    3: false
  };

  const [check, setCheck] = useState({
    ...initState,
    beige: true
  });

  const [checkImg, setCheckImg] = useState({
    ...initImg,
    0: true
  });

  const handleCheckColor = (color) => {
    setCheck(() => ({
      ...initState,
      [color]: true
    }));
    onSelect('color', color);
  };

  const handleCheckImg = (img) => {
    const imgIndex = imgUrls.indexOf(img);
    setCheckImg(() => ({
      ...initImg,
      [imgIndex]: true
    }));
    onSelect('img', img);
  };

  return (
    <S.Root>
      {background === 'color' ? (
        <S.Div>
          {cards.map((card) => (
            <ExampleCard
              key={card.key}
              usage="option"
              color={card.color}
              onClick={() => handleCheckColor(card.color)}
              isChecked={check[card.color]}
            />
          ))}
        </S.Div>
      ) : (
        <S.Div>
          {imgUrls.map((img, idx) => (
            <ExampleCard
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              usage="option"
              cardUrl={img}
              onClick={() => handleCheckImg(img)}
              isChecked={checkImg[idx]}
            />
          ))}
        </S.Div>
      )}
    </S.Root>
  );
}

export default Option;
