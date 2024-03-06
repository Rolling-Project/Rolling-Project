import { useQuery } from '@tanstack/react-query';

/**
 * 데이터 로딩 및 오류 처리 로직을 처리합니다.
 */
const useApiQuery = (queryKey, queryFn) => {
  const { data, isLoading, error } = useQuery(queryKey, queryFn);
  return { data, isLoading, error };
};

export default useApiQuery;
