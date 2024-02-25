import * as Styled from "./CardList.styled";
import a from "../../assets/arrow-left.svg";
import b from "../../assets/arrow-right.svg";
import Card from "../common/Card/Card";
import { useState } from "react";

function CardList({title}) {
  const [scrollX, setScrollX] = useState(0);

  const as = () => {
    setScrollX((prevScrollX) => prevScrollX - 18.88);
  };

  const ab = () => {
    setScrollX((prevScrollX) => prevScrollX + 18.88);
  };

  return (
    <>
      <Styled.ListTitle>{title}</Styled.ListTitle>
      <Styled.CardWrap>
        <Styled.CardContainer>
          <Styled.CardList style={{ marginLeft: `${scrollX}rem` }}>
            <Card text="짱구" color="Orange-200" />
            <Card text="훈이" color="Purple-200" />
            <Card text="맹구" color="Blue-200" />
            <Card text="유리" color="Green-200" />
            <Card text="짱구" color="Orange-200" />
            <Card text="훈이" color="Purple-200" />
            <Card text="맹구" color="Blue-200" />
            <Card text="유리" color="Green-200" />
          </Styled.CardList>
        </Styled.CardContainer>
        <Styled.PrevButton onClick={() => ab()} src={a} />
        <Styled.NextButton onClick={() => as()} src={b} />
      </Styled.CardWrap>
      </>
  );
}

export default CardList;
