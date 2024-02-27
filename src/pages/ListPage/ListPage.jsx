import Header from "../../components/Header/Header";
import CardList from "../../components/CardList/CardList";
import ListButtonBox from "../../components/ListButtonBox/ListButtonBox";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import useFetch from "../../utils/hooks/useFetch";
import * as Styled from "./ListPage.styled";

function ListPage() {
  const { data, isLoading, isError } = useFetch("https://rolling-api.vercel.app/2-6/recipients/?limit=20");
  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Styled.Wrap>
        <CardList title="🔥 인기 롤링 페이퍼 TOP 20" cardList={data} />
        <CardList title="⭐️ 최신 롤링 페이퍼 TOP 20" cardList={data} />
        <ListButtonBox />
      </Styled.Wrap>
    </>
  );
}

export default ListPage;
