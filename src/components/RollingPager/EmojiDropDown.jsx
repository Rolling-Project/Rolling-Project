import styled from '@emotion/styled';
import { useState } from 'react';
import arrowDownIcon from '../../assets/arrow_down.svg';

const DropDown = styled.div`
  padding: 24px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  color: white;
  gap: 2px;
`;

const Bar = styled.div`
  display: flex;
  gap: 8px;
`;

// PC 일때는 4 col
// mobile 3
const ExpandBox = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 8px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background-color: white;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  top: 56px;

  @media (max-width: 360px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function EmojiDropDown({ reactions }) {
  if (!reactions) return;

  const [isDropDown, setIsDropDown] = useState(false);

  const handleDropDown = () => {
    setIsDropDown((prev) => !prev);
  };

  return (
    <DropDown onClick={handleDropDown}>
      <Bar>
        {reactions
          .filter((ele, idx) => idx < 3)
          .map(({ id, emoji, count }) => (
            <Item key={id}>{`${emoji} ${count}`}</Item>
          ))}
        <img src={arrowDownIcon} />
      </Bar>

      {isDropDown && (
        <ExpandBox>
          {reactions.map(({ id, emoji, count }) => (
            <Item key={id}>{`${emoji} ${count}`}</Item>
          ))}
        </ExpandBox>
      )}
    </DropDown>
  );
}

export default EmojiDropDown;
