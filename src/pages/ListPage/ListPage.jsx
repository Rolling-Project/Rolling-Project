import { useQuery } from '@tanstack/react-query';
import Header from '../../components/common/Header/Header';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import CardList from '../../components/CardList/CardList';
import ListButtonBox from '../../components/ListButtonBox/ListButtonBox';
import fetchTwentyCard from '../../services/fetchTwetyCard';
import * as Styled from './ListPage.styled';

const POPULAR_OPTION = '&sort=like';

function ListPage() {
  const fetchData = async () => {
    const [dataCount, latestData, popularData] = await fetchTwentyCard(POPULAR_OPTION);
    return { dataCount, latestData, popularData };
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['recipients'],
    queryFn: fetchData
  });

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  const { dataCount, latestData, popularData } = data;

  return (
    <>
      <Header isStatic={false} />
      <Styled.Container>
        <CardList title="🔥 인기 롤링 페이퍼 TOP 20" cardList={popularData} />
        <CardList title="⭐️ 최신 롤링 페이퍼 TOP 20" cardList={latestData} />
        <ListButtonBox dataCount={dataCount} />
      </Styled.Container>
    </>
  );
}

export default ListPage;
