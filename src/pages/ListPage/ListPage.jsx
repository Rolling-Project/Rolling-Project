import { useState } from 'react';
import Header from '../../components/common/Header/Header';
import DefaultCardList from '../../Layout/DefaultCardList/DefaultCardList';
import AllCardList from '../../Layout/AllCardList/AllCardList';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useDataFetch from '../../utils/hooks/useDataFetch';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ListPage() {
  const [viewAllList, setViewAllList] = useState(false);
  const { data, isLoading, isError } = useDataFetch(`${BASE_URL}recipients/?limit=`);
  const allData = data;
  const latestData = [...data].slice(0, 20);
  const popularData = [...data].sort((a, b) => b.reactionCount - a.reactionCount).slice(0, 20);

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
