import useApiQuery from './useApiQuery';
import useFetch from './useFetch';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

/**
 * 롤링페이퍼 대상의 리액션 데이터를 가져옵니다.
 */
const useGetReactions = (recipientId) => {
  const queryKey = ['reactions', recipientId];
  const queryFn = () => useFetch(`${baseUrl}recipients/${recipientId}/reactions/?limit=11`);
  return useApiQuery(queryKey, queryFn);
};

export default useGetReactions;
