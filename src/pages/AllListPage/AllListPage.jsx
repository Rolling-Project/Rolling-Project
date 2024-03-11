import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import AllCardList from '../../components/AllCardList/AllCardList';
import ScrollToTopButton from '../../components/common/ScrollToTopButton/ScrollToTopButton';
import fetchFirstCard from '../../services/fetchFirstCard';
import fetchCard from '../../services/fetchCard';

const LATEST = '최신순';
const POPULAR_OPTION = '&sort=like';

function AllListPage() {
  const location = useLocation();
  const [listFilterValue, setListFilterValue] = useState('최신순'); // 정렬 필터
  const [currentList, setCurrentList] = useState([]); // 롤링 페이퍼 카드 리스트

  // 인기순
  const fetchPopularData = async () => {
    if (location.state) {
      const result = await fetchCard(location.state, POPULAR_OPTION);
      setCurrentList(result);
      return result;
    }
    const result = await fetchFirstCard(POPULAR_OPTION);
    setCurrentList(result);
    return result;
  };

  // 최신순
  const fetchLatestData = async () => {
    if (location.state) {
      const result = await fetchCard(location.state);
      setCurrentList(result);
      return result;
    }
    const result = await fetchFirstCard();
    setCurrentList(result);
    return result;
  };

  const {
    data: latestData,
    isLoading: isLatestDataLoading,
    isError: isLatestDataError
  } = useQuery({
    queryKey: ['latestCard'],
    queryFn: fetchLatestData,
    refetchOnWindowFocus: false,
    cacheTime: 30 * 60 * 1000,
    staleTime: 30 * 60 * 1000
  });

  const {
    data: popularData,
    isFetching: isPopularDataFetching,
    isError: isPopularDataError,
    refetch: popularDataLoad
  } = useQuery({
    queryKey: ['popularCard'],
    queryFn: fetchPopularData,
    enabled: false,
    refetchOnWindowFocus: false,
    cacheTime: 30 * 60 * 1000,
    staleTime: 30 * 60 * 1000
  });

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  const setCardList = (data) => {
    setCurrentList(data);
  };

  // 데이터 정렬(최신순, 인기순)
  useEffect(() => {
    if (listFilterValue === LATEST) {
      setCardList(latestData);
      return;
    }

    if (popularData) {
      setCardList(popularData);
      return;
    }

    popularDataLoad();
  }, [listFilterValue]);

  if (isLatestDataError || isPopularDataError) {
    return <Error />;
  }

  if (isLatestDataLoading || isPopularDataFetching) {
    return <Loading />;
  }
  return (
    <>
      <Helmet>
        <title>Rolling | 롤링 페이퍼 전체 보기</title>
      </Helmet>
      <AllCardList
        cardList={currentList}
        setCardList={setCardList}
        listFilterValue={listFilterValue}
        setListFilterValue={setListFilterValue}
        latestData={latestData}
        popularData={popularData}
      />
      <ScrollToTopButton onClick={scrollToTop} />
    </>
  );
}

export default AllListPage;
