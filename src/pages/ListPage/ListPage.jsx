import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '../../components/common/Header/Header';
import DefaultCardList from '../../Layout/DefaultCardList/DefaultCardList';
import AllCardList from '../../Layout/AllCardList/AllCardList';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ListPage() {
  const [viewAllList, setViewAllList] = useState(false);
  const [allData, setAllData] = useState([]);

  const fetchData = async () => {
    // 데이터가 총 몇 개있는지 확인
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
  console.log(data);
  const { dataCount, latestData, popularData } = data;

  const handleViewAllList = () => {
    setViewAllList(true);
  };

  return (
    <>
      <Header isStatic={false} />
      {viewAllList ? (
        <AllCardList allData={latestData} />
      ) : (
        <DefaultCardList handleViewAllList={handleViewAllList} latestData={latestData} popularData={popularData} />
      )}
    </>
  );
}

export default ListPage;
