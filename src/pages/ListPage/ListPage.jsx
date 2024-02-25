import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList"
import ListButtonBox from "../../components/ListButtonBox/ListButtonBox";
import * as Styled from "./ListPage.styled";

function ListPage(){
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async()=>{
      try{
        const res = await fetch("https://rolling-api.vercel.app/2-6/recipients/?limit=20");
        if(!res.ok){
          throw new Error("에러발생");
        }
        const result = await res.json();
        setList(result.results);
      }catch(e){
        console.error(e);
      }
    }
    fetchData();
  }, [])
  return (
    <Styled.Wrap>
      <CardList title="🔥 인기 롤링 페이퍼 TOP 20" list={list}/>
      <CardList title="⭐️ 최신 롤링 페이퍼 TOP 20" list={list}/>
      <ListButtonBox/>
    </Styled.Wrap>
  )
}

export default ListPage;