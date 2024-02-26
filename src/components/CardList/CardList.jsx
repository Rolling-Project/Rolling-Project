import { useEffect, useState } from "react";
import * as Styled from "./CardList.styled";
import PrevButton from "../../assets/arrow-left.svg";
import NextButton from "../../assets/arrow-right.svg";
import Card from "../common/Card/Card";

function CardList({ title, cardList }) {
  const [scrollX, setScrollX] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const [buttonVisible, setButtonVisible] = useState({
    prev: false,
    next: true
  });

  const handlePrevCard = () => {
    setScrollX((prevScrollX) => prevScrollX + 18.87);
    setCurrentCount((prevCount) => prevCount - 1);
  };

  const handleNextCard = () => {
    setScrollX((prevScrollX) => prevScrollX - 18.87);
    setCurrentCount((prevCount) => prevCount + 1);
  };

  const check = () => {
    if (cardList.length < 4) {
      // 리스트의 길이가 4보다 크다면
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

    if (currentCount === 0) {
      // 리스트의 처음을 볼 때
      setButtonVisible({
        prev: false,
        next: true
      });
      return;
    }

    setButtonVisible({
      prev: true,
      next: true
    });
  };

  useEffect(() => {
    check();
  }, [currentCount]);

  return (
    <>
      <Styled.ListTitleBox>
        <Styled.ListTitle>{title}</Styled.ListTitle>
        <Styled.CardDetail>카드를 클릭하면 자세히 보거나 글을 남길 수 있습니다.</Styled.CardDetail>
      </Styled.ListTitleBox>
      <Styled.CardWrap>
        <Styled.CardContainer>
          <Styled.CardList style={{ marginLeft: `${scrollX}rem` }}>
            {cardList?.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </Styled.CardList>
        </Styled.CardContainer>
        {buttonVisible.prev && <Styled.PrevButton onClick={() => handlePrevCard()} src={PrevButton} />}
        {buttonVisible.next && <Styled.NextButton onClick={() => handleNextCard()} src={NextButton} />}
      </Styled.CardWrap>
    </>
  );
}

export default CardList;
