import styled from '@emotion/styled';
import { useState, useEffect, useRef } from 'react';
import arrowDownIcon from '../../assets/arrow_down.svg';
import colors from '../../styles/colors';
import BaseDropDown from './DropDown';

const DropDown = styled.div`
  position: relative;
  margin: 0 8px 0 28px;

  @media (max-width: 648px) {
    display: none;
  }

  @media (max-width: 475px) {
    display: block;
  }
`;

const Item = styled.div`
  width: 63px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  color: ${colors['--White']};
  gap: 5px;
  span {
    transform: translate(0px, 1.5px);
  }
  @media (max-width: 475px) {
    width: 53px;
    height: 28px;
    font-size: 14px;
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const ExpandBox = styled(BaseDropDown)`
  position: absolute;
  top: 42px;
  right: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 8px;
  padding: 24px;

  @media (max-width: 360px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function EmojiDropDown({ reactions }) {
  const dropRef = useRef(null);

  const [isDropDown, setIsDropDown] = useState(false);

  const handleDropDown = () => {
    setIsDropDown((prev) => !prev);
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

  if (!reactions) return;

  return (
    <DropDown ref={dropRef}>
      <Bar onClick={handleDropDown}>
        {reactions.slice(0, 3).map(({ id, emoji, count }) => (
          <Item key={id}>
            <span>{emoji}</span>
            <span>{count}</span>
          </Item>
        ))}
        {reactions.length > 3 && <img src={arrowDownIcon} />}
      </Bar>

      {isDropDown && (
        <ExpandBox>
          {reactions.slice(3).map(({ id, emoji, count }) => (
            <Item key={id}>
              <span>{emoji}</span>
              <span>{count}</span>
            </Item>
          ))}
        </ExpandBox>
      )}
    </DropDown>
  );
}

export default EmojiDropDown;
