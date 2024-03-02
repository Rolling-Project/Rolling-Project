import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

/**
 * 롤링페이퍼 대상의 메세지 데이터를 9개씩 가져옵니다.
 */
const useGetMessages = () => {
  const { id: recipientId } = useParams();

  const getMessages = async (pageParam) => {
    const result = await useFetch(`${baseUrl}recipients/${recipientId}/messages/?limit=8&offset=${pageParam}`);
    return {
      result: result.results,
      nextPage: pageParam + 9,
      isLast: !result.next
    };
  };

  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['messages', recipientId],
    ({ pageParam = 0 }) => getMessages(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage.isLast) {
          return lastPage.nextPage;
        }
        return undefined;
      }
    }
  );

  return { data, status, fetchNextPage, hasNextPage, isFetchingNextPage };
};

export default useGetMessages;
