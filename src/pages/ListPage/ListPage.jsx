import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import ListButtonBox from "../../components/ListButtonBox/ListButtonBox";
import * as Styled from "./ListPage.styled";

function ListPage() {
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchCardList = async () => {
      try {
        const response = await fetch("https://rolling-api.vercel.app/2-6/recipients/?limit=20", { signal });
        if (!response.ok) {
          throw new Error("에러발생");
        }
        const result = await response.json();
        setCardList(result.results);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCardList();
    return () => controller.abort();
  }, []);
  return (
    <Styled.Wrap>
      <CardList title="🔥 인기 롤링 페이퍼 TOP 20" cardList={cardList} />
      <CardList title="⭐️ 최신 롤링 페이퍼 TOP 20" cardList={cardList} />
      <ListButtonBox />
    </Styled.Wrap>
  );
}

export default ListPage;
