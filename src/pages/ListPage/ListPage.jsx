import CardList from "../../components/CardList/CardList"
import ListButtonBox from "../../components/ListButtonBox/ListButtonBox";
import * as Styled from "./ListPage.styled";

function ListPage(){
  return (
    <Styled.Wrap>
      <CardList title="🔥 인기 롤링 페이퍼 TOP 20"/>
      <CardList title="⭐️ 최근 롤링 페이퍼"/>
      <ListButtonBox/>
    </Styled.Wrap>
  )
}

export default ListPage;