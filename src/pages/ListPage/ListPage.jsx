import { useQuery } from '@tanstack/react-query';
import Header from '../../components/common/Header/Header';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import CardList from '../../components/CardList/CardList';
import ListButtonBox from '../../components/ListButtonBox/ListButtonBox';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ListPage() {
  const fetchData = async () => {
    const popularResponse = await fetch(`${BASE_URL}recipients/?limit=20&sort=like`);
    const popularResult = await popularResponse.json();
    const latestResponse = await fetch(`${BASE_URL}recipients/?limit=20`);
    const latestResult = await latestResponse.json();

    return { dataCount: latestResult.count, latestData: latestResult.results, popularData: popularResult.results };
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
      <CardList title="🔥 인기 롤링 페이퍼 TOP 20" cardList={popularData} />
      <CardList title="⭐️ 최신 롤링 페이퍼 TOP 20" cardList={latestData} />
      <ListButtonBox dataCount={dataCount} />
    </>
  );
}

export default ListPage;
