import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import CardList from '../components/RollingPager/CardList';
import useFetch from '../utils/hooks/useFetch';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 24px;
`;

const RollingPaper = () => {
  const recipientId = 2687;

  const { data, isLoading, error } = useQuery(['messages', recipientId], () =>
    useFetch(`${baseUrl}recipients/${recipientId}/messages/`),
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <CardList messages={data.results} />
    </Container>
  );
};

export default RollingPaper;
