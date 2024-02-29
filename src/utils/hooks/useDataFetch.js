import { useEffect, useState } from 'react';

const useDataFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countResponse = await fetch(url + 1);
        if (!countResponse.ok) {
          throw new Error('API 서버 통신 중 에러 발생');
        }
        const countResult = await countResponse.json();
        const allDataResponse = await fetch(url + countResult.count);
        if (!allDataResponse.ok) {
          throw new Error('전체 데이터 로드 중 에러 발생');
        }
        const allDataResult = await allDataResponse.json();
        setData(allDataResult.results);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useDataFetch;
