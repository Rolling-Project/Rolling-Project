import useApiQuery from './useApiQuery';
import useFetch from './useFetch';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

/**
 * 롤링페이퍼 대상의 메세지 데이터를 가져옵니다.
 */
const useGetMessages = (recipientId) => {
  const queryKey = ['messages', recipientId];
  const queryFn = () => useFetch(`${baseUrl}recipients/${recipientId}/messages/`);
  return useApiQuery(queryKey, queryFn);
};

export default useGetMessages;
