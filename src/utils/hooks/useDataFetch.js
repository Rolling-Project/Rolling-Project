import { useEffect, useState } from "react";

const useDataFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("API 서버 통신 중 에러 발생");
        }
        const result = await response.json();
        setData(result.results);
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
