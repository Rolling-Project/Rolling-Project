import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import CardList from '../components/RollingPager/CardList';
import MessageModal from '../components/RollingPager/Modal';
import useFetch from '../utils/hooks/useFetch';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 24px;
`;

const RollingPaper = () => {
  const recipientId = 2687; /* 하드 코딩 */

  const fetchMessages = () => useFetch(`${baseUrl}recipients/${recipientId}/messages/`);

  const { data, isLoading, error } = useQuery(['messages', recipientId], fetchMessages);

  if (isLoading) return <p>로딩 컴포넌트</p>;
  if (error) return <p>에러 컴포넌트</p>;

  return (
    <Container>
      <CardList messages={data.results} />
      <MessageModal />
    </Container>
  );
};

export default RollingPaper;
