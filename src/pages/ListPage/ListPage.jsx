import { useRef, useState, useEffect, useCallback } from 'react';
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
  const allDataStatus = useRef({
    count: 0,
    isLoading: true,
    isError: false
  });

  const topData = useRef({
    latest: [],
    popular: []
  });

  // 유저에게 최신순, 인기순 TOP 20을 보여주고 전체 데이터 로드
  const fetchData = async () => {
    if (allDataStatus.current.count) {
      try {
        const response = await fetch(`${BASE_URL}recipients/?limit=${allDataStatus.current.count}&offset=20`);
        if (!response.ok) {
          throw new Error('전체 데이터 로드 중 에러 발생!');
        }
        const result = await response.json();
        allDataStatus.current.isLoading = false;
        setAllData([...allData, ...result.results]);
      } catch (error) {
        allDataStatus.current.isError = true;
      }
      return { latestData: topData.current.latest, popularData: topData.current.popular };
    }
    const popularResponse = await fetch(`${BASE_URL}recipients/?limit=20&sort=like`);
    const popularResult = await popularResponse.json();
    const latestResponse = await fetch(`${BASE_URL}recipients/?limit=20`);
    const latestResult = await latestResponse.json();
    allDataStatus.current.count = latestResult.count; // 전체 데이터의 개수
    topData.current.latest = latestResult.results; // 최신순 20개 보관
    topData.current.popular = popularResult.results; // 인기순 20개 보관
    setAllData(latestResult.results);
    return { latestData: latestResult.results, popularData: popularResult.results };
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['recipients'],
    queryFn: fetchData
  });

  useEffect(() => {
    refetch();
  }, [allDataStatus.current.count]);

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  const { latestData, popularData } = data;

  const handleViewAllList = () => {
    setViewAllList(true);
  };

  return (
    <>
      <Header isStatic={false} />
      {viewAllList ? (
        <AllCardList allData={allData} allDataStatus={allDataStatus} />
      ) : (
        <DefaultCardList handleViewAllList={handleViewAllList} latestData={latestData} popularData={popularData} />
      )}
    </>
  );
}

export default ListPage;
