import styled from '@emotion/styled';
import { useState } from 'react';
import arrowDownIcon from '../../assets/arrow_down.svg';
import colors from '../../styles/colors';

const DropDown = styled.div`
  position: relative;
  margin: 0 8px 0 28px;
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
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const ExpandBox = styled.div`
  position: absolute;
  top: 42px;
  right: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 8px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background-color: ${colors['--White']};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

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
