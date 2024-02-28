import { useState } from 'react';
import Header from '../../components/common/Header/Header';
import DefaultCardList from '../../Layout/DefaultCardList/DefaultCardList';
import AllCardList from '../../Layout/AllCardList/AllCardList';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useDataFetch from '../../utils/hooks/useDataFetch';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ListPage() {
  const [viewAllList, setViewAllList] = useState(true);
  const { data, isLoading, isError } = useDataFetch(`${BASE_URL}recipients/?limit=20`);
  const latestData = data;
  const popularData = [...data].sort((a, b) => b.reactionCount - a.reactionCount);
  const allData = data;

  const handleViewAllList = () => {
    setViewAllList(true);
  };

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      {viewAllList ? (
        <AllCardList allData={allData} />
      ) : (
        <DefaultCardList handleViewAllList={handleViewAllList} latestData={latestData} popularData={popularData} />
      )}
    </>
  );
}

export default ListPage;
