import { useRef, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '../../components/common/Header/Header';
import DefaultCardList from '../../Layout/DefaultCardList/DefaultCardList';
import AllCardList from '../../Layout/AllCardList/AllCardList';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ListPage() {
  const [viewAllList, setViewAllList] = useState(false); // true인 경우 전체 리스트 UI 렌더링
  const [allData, setAllData] = useState({
    // 전체 데이터(최신순, 인기순)
    latestData: [],
    popularData: []
  });
  const allDataStatus = useRef({
    // 전체 데이터 상대(데이터 개수, 로딩, 에러)
    count: 0,
    isLoading: true,
    isError: false
  });

  const topData = useRef({
    // Top 20 데이터 보관
    latest: [],
    popular: []
  });

  // 유저에게 최신순, 인기순 TOP 20을 보여주고 전체 데이터 로드
  const fetchData = async () => {
    // 전체 데이터 개수가 로드되면(최신순, 인기순 전체 데이터 로드)
    if (allDataStatus.current.count) {
      try {
        const latestResponse = await fetch(`${BASE_URL}recipients/?limit=${allDataStatus.current.count}`);
        const popularResponse = await fetch(`${BASE_URL}recipients/?limit=${allDataStatus.current.count}&sort=like`);
        if (!latestResponse.ok || !popularResponse.ok) {
          throw new Error('전체 데이터 로드 중 에러 발생!');
        }
        const latestResult = await latestResponse.json();
        const popularResult = await popularResponse.json();
        allDataStatus.current.isLoading = false;
        setAllData({
          latestData: latestResult.results,
          popularData: popularResult.results
        });
      } catch (error) {
        allDataStatus.current.isError = true;
      }
      return { latestData: topData.current.latest, popularData: topData.current.popular };
    }
    // 처음 로드(최신순, 인기순 Top20 로드)
    const popularResponse = await fetch(`${BASE_URL}recipients/?limit=20&sort=like`);
    const popularResult = await popularResponse.json();
    const latestResponse = await fetch(`${BASE_URL}recipients/?limit=20`);
    const latestResult = await latestResponse.json();

    allDataStatus.current.count = latestResult.count; // 전체 데이터의 개수
    topData.current.latest = latestResult.results; // 최신순 20개 보관
    topData.current.popular = popularResult.results; // 인기순 20개 보관
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
  console.log(allData);

  return (
    <>
      <Header isStatic={false} />
      {viewAllList ? (
        <AllCardList latestData={allData.latestData} popularData={allData.popularData} allDataStatus={allDataStatus} />
      ) : (
        <DefaultCardList handleViewAllList={handleViewAllList} latestData={latestData} popularData={popularData} />
      )}
    </>
  );
}

export default ListPage;
