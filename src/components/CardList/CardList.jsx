import * as Styled from "./CardList.styled";
import PrevButton from "../../assets/arrow-left.svg";
import NextButton from "../../assets/arrow-right.svg";
import Card from "../common/Card/Card";
import { useEffect, useState } from "react";

function CardList({ title, list }) {
  const [scrollX, setScrollX] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const [buttonVisible, setButtonVisible] = useState({
    prev: false,
    next: true,
  })

  const handlePrevCard = () => {
    setScrollX((prevScrollX) => prevScrollX + 18.87);
    setCurrentCount((prevCount) => prevCount - 1);
  };

  const handleNextCard = () => {
    setScrollX((prevScrollX) => prevScrollX - 18.87);
    setCurrentCount((prevCount) => prevCount + 1);
  };

  const check = (list) => {
    if(list.length < 4){ // 리스트의 길이가 4보다 크다면
      setButtonVisible({
        prev: false,
        next: true
      })
      return;
    }

    if(currentCount === list.length - 4){ // 리스트의 마지막을 볼 때
      setButtonVisible({
        prev: true,
        next: false,
      })
      return;
    }

    if(currentCount === 0){ // 리스트의 처음을 볼 때
      setButtonVisible({
        prev: false,
        next: true,
      })
      return
    }

    setButtonVisible({
      prev: true,
      next: true,
    })
  }
  
  useEffect(() => {
    check(list);
  }, [currentCount])
  
  return (
    <>
      <Styled.ListTitle>{title}</Styled.ListTitle>
      <Styled.CardWrap>
        <Styled.CardContainer>
          <Styled.CardList style={{ marginLeft: `${scrollX}rem` }}>
           {list?.map((data, idx) => {
            return <Card key={idx} data={data}/>
           })}
          </Styled.CardList>
        </Styled.CardContainer>
        {buttonVisible.prev && <Styled.PrevButton onClick={() => handlePrevCard()} src={PrevButton} />}
        {buttonVisible.next && <Styled.NextButton onClick={() => handleNextCard()} src={NextButton} />}
      </Styled.CardWrap>
      </>
  );
}

export default CardList;
