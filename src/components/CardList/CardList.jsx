import { useEffect, useState } from "react";
import * as Styled from "./CardList.styled";
import PrevButton from "../../assets/arrow-left.svg";
import NextButton from "../../assets/arrow-right.svg";
import Card from "../Card/Card";

function CardList({ title, cardList }) {
  const [scrollX, setScrollX] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const [buttonVisible, setButtonVisible] = useState({
    prev: false,
    next: false
  });

  const handlePrevCard = () => {
    setScrollX((prevScrollX) => prevScrollX + 18.4);
    setCurrentCount((prevCount) => prevCount - 1);
  };

  const handleNextCard = () => {
    setScrollX((prevScrollX) => prevScrollX - 18.4);
    setCurrentCount((prevCount) => prevCount + 1);
  };

  const currentCheck = () => {
    if (cardList.length < 5) {
      // 리스트의 길이가 5보다 작다면
      setButtonVisible({
        prev: false,
        next: false
      });
      return;
    }

    if (currentCount === 0) {
      // 리스트의 처음을 볼 때
      setButtonVisible({
        prev: false,
        next: true
      });
      return;
    }

    if (currentCount === cardList.length - 4) {
      // 리스트의 마지막을 볼 때
      setButtonVisible({
        prev: true,
        next: false
      });
      return;
    }

    setButtonVisible({
      prev: true,
      next: true
    });
  };

  useEffect(() => {
    currentCheck();
  }, [cardList, currentCount]);

  return (
    <Styled.CardWrap>
      <Styled.ListTitleBox>
        <Styled.ListTitle>{title}</Styled.ListTitle>
        <Styled.CardDetailBox>
          <Styled.CardDeviceDetail>좌, 우를 스와이프하여 카드 목록을 확인 할 수 있습니다.</Styled.CardDeviceDetail>
          <Styled.CardDetail>카드를 클릭하여 자세히 보거나 글을 남길 수 있습니다.</Styled.CardDetail>
        </Styled.CardDetailBox>
      </Styled.ListTitleBox>

      <Styled.CardContainer>
        <Styled.CardList style={{ marginLeft: `${scrollX}rem` }}>
          {cardList?.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </Styled.CardList>
      </Styled.CardContainer>
      {buttonVisible.prev && <Styled.PrevButton onClick={() => handlePrevCard()} src={PrevButton} alt="이전 버튼" />}
      {buttonVisible.next && <Styled.NextButton onClick={() => handleNextCard()} src={NextButton} alt="다음 버튼" />}
    </Styled.CardWrap>
  );
}

export default CardList;
