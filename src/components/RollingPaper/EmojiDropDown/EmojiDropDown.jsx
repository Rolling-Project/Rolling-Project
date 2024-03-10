import { useState, useEffect, useRef } from 'react';
import arrowDownIcon from '../../../assets/images/icons/arrow_down.svg';
import formatDate from '../../../utils/helpers/numberUtils';
import * as S from './EmojiDropDown.styled';

function EmojiDropDown({ reactions }) {
  const dropRef = useRef(null);

  const [isDropDown, setIsDropDown] = useState(false);

  const handleDropDown = () => {
    if (reactions.length > 3) {
      setIsDropDown((prev) => !prev);
    }
  };

  const handleOutSideClick = (e) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutSideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  });

  if (!reactions) return null;

  return (
    <S.DropDown ref={dropRef}>
      <S.Bar onClick={handleDropDown}>
        {reactions.slice(0, 3).map(({ id, emoji, count }) => (
          <S.Item key={id}>
            <span>{emoji}</span>
            <span>{formatDate(count)}</span>
          </S.Item>
        ))}
        {reactions.length > 3 && <img src={arrowDownIcon} alt="화살표 이미지" />}
      </S.Bar>

      {isDropDown && (
        <S.ExpandBox>
          {reactions.slice(3).map(({ id, emoji, count }) => (
            <S.Item key={id}>
              <span>{emoji}</span>
              <span>{formatDate(count)}</span>
            </S.Item>
          ))}
        </S.ExpandBox>
      )}
    </S.DropDown>
  );
}

export default EmojiDropDown;
