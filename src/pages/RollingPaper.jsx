import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import MessageCard from '../components/RollingPager/MessageCard';
import PlusCard from '../components/RollingPager/PlusCard';

const CardList = styled.ul``;

const RollingPaper = () => {
  const recipientId = 2687;

  const fetchMessages = async () => {
    const response = await fetch(`https://rolling-api.vercel.app/4-18/recipients/${recipientId}/messages/`);
    const result = await response.json();
    return result;
  };

  const { data, isLoading, error } = useQuery(['messages', recipientId], () => fetchMessages(recipientId));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <PlusCard />
      <CardList>
        {data.results.map((person) => (
          <li key={person.id}>
            <MessageCard person={person} />
          </li>
        ))}
      </CardList>
    </div>
  );
};

export default RollingPaper;
