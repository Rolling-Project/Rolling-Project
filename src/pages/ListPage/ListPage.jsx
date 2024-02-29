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
    const countResponse = await fetch(`${BASE_URL}recipients/?limit=1`);
    const countResult = await countResponse.json();
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

  const allData = [...data];
  const latestData = [...data].slice(0, 20);
  const popularData = [...data].sort((a, b) => b.reactionCount - a.reactionCount).slice(0, 20);

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
