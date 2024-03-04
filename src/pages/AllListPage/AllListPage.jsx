import { useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import AllCardList from '../../components/AllCardList/AllCardList';
import Header from '../../components/common/Header/Header';
import TopButton from '../../components/TopButton/TopButton';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function AllListPage() {
  const location = useLocation();
  const [listFilterValue, setListFilterValue] = useState('최신순'); // 정렬 필터
  const [currentList, setCurrentList] = useState(null); // 롤링 페이퍼 카드 리스트
  const cacheData = useRef({
    latestList: [],
    popularList: []
  });

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  const fetchPopularData = async () => {
    if (location.state) {
      const response = await fetch(`${BASE_URL}recipients/?limit=${location.state}&sort=like`);
      const result = await response.json();
      cacheData.current.popularList = result.results;
      setCurrentList(result.results);
      return result.results;
    }
    const response = await fetch(`${BASE_URL}recipients/?limit=1&sort=like`);
    const result = await response.json();
    const dataResponse = await fetch(`${BASE_URL}recipients/?limit=${result.count}&sort=like`);
    const dataResult = await dataResponse.json();
    cacheData.current.popularList = dataResult.results;
    setCurrentList(dataResult.results);
    return dataResult.results;
  };

  const fetchLatestData = async () => {
    if (location.state) {
      const response = await fetch(`${BASE_URL}recipients/?limit=${location.state}`);
      const result = await response.json();
      cacheData.current.latestList = result.results;
      setCurrentList(result.results);
      return result.results;
    }
    const response = await fetch(`${BASE_URL}recipients/?limit=1`);
    const result = await response.json();
    const dataResponse = await fetch(`${BASE_URL}recipients/?limit=${result.count}`);
    const dataResult = await dataResponse.json();
    cacheData.current.latestList = dataResult.results;
    setCurrentList(dataResult.results);
    return dataResult.results;
  };

  const setData = (data) => {
    setCurrentList(data);
  };

  const setListFilter = (value) => {
    setListFilterValue(value);
  };

  const {
    data: initialData,
    isLoading: isInitialLoading,
    isError: isInitialError
  } = useQuery({
    queryKey: ['latestData'],
    queryFn: fetchLatestData
  });

  const { data, isError, refetch, isFetching } = useQuery({
    queryKey: ['popularData'],
    queryFn: fetchPopularData,
    enabled: false
  });

  const popularDataLoad = () => {
    refetch();
  };

  if (isInitialError || isError) {
    return <Error />;
  }

  if (isInitialLoading || isFetching) {
    return <Loading />;
  }
  return (
    <>
      <Header isStatic={false} />
      <AllCardList
        cardList={currentList}
        setData={setData}
        popularDataLoad={popularDataLoad}
        cacheData={cacheData}
        listFilterValue={listFilterValue}
        setListFilter={setListFilter}
      />
      <TopButton onClick={scrollToTop} />
    </>
  );
}

export default AllListPage;
