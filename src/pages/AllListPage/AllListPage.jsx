import { useState, useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import AllCardList from '../../components/AllCardList/AllCardList';
import Header from '../../components/common/Header/Header';
import TopButton from '../../components/TopButton/TopButton';
import fetchFirstCard from '../../services/fetchFirstCard';
import fetchCard from '../../services/fetchCard';

const POPULAR_OPTION = '&sort=like';

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
      const result = await fetchCard(location.state, POPULAR_OPTION);
      cacheData.current.popularList = result;
      setCurrentList(result);
      return result;
    }
    const result = await fetchFirstCard(POPULAR_OPTION);
    cacheData.current.popularList = result;
    setCurrentList(result);
    return result;
  };

  const fetchLatestData = async () => {
    if (location.state) {
      const result = await fetchCard(location.state);
      cacheData.current.latestList = result;
      setCurrentList(result);
      return result;
    }
    const result = await fetchFirstCard();
    cacheData.current.latestList = result;
    setCurrentList(result);
    return result;
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
    isError: isInitialError,
    isFetching: isInitialFetching
  } = useQuery({
    queryKey: ['latestData'],
    queryFn: fetchLatestData,
    refetchOnWindowFocus: false
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

  if (isInitialLoading || isFetching || isInitialFetching) {
    return <Loading />;
  }
  return (
    <>
      <Helmet>
        <title>Rolling | 전체 보기</title>
      </Helmet>
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
