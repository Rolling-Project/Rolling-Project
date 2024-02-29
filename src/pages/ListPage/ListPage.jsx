import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '../../components/common/Header/Header';
import DefaultCardList from '../../Layout/DefaultCardList/DefaultCardList';
import AllCardList from '../../Layout/AllCardList/AllCardList';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ListPage() {
  const [viewAllList, setViewAllList] = useState(false);

  const fetchData = async () => {
    // 데이터가 총 몇 개있는지 확인
    const countResponse = await fetch(`${BASE_URL}recipients/?limit=1`);
    const countResult = await countResponse.json();
    // 그 데이터 개수에 맞게 데이터 로드
    const allDataResponse = await fetch(`${BASE_URL}recipients/?limit=${countResult.count}`);
    const allDataResult = await allDataResponse.json();
    return allDataResult.results;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['recipients'],
    queryFn: fetchData
  });

  const handleViewAllList = () => {
    setViewAllList(true);
  };

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  const allData = [...data]; // 전체 데이터
  const latestData = [...data].slice(0, 20); // 최신순 Top 20
  const popularData = [...data].sort((a, b) => b.reactionCount - a.reactionCount).slice(0, 20); // 인기순 Top20

  return (
    <>
      <Header isStatic={false} />
      {viewAllList ? (
        <AllCardList allData={allData} />
      ) : (
        <DefaultCardList handleViewAllList={handleViewAllList} latestData={latestData} popularData={popularData} />
      )}
    </>
  );
}

export default ListPage;
