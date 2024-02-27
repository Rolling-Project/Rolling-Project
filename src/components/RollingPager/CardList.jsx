import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import MessageCard from './MessageCard';
import PlusCard from './PlusCard';

const List = styled.ul`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardList = () => {
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
    <List>
      <PlusCard />
      {data.results.map((person) => (
        <li key={person.id}>
          <MessageCard person={person} />
        </li>
      ))}
    </List>
  );
};

export default CardList;
