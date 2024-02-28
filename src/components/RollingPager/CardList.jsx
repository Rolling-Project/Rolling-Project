import styled from '@emotion/styled';
import MessageCard from './Card/MessageCard';
import PlusCard from './Card/PlusCard';

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

const CardList = ({ messages, onClick }) => (
  <List>
    <PlusCard />
    {messages.map((message) => (
      <li key={message.id} onClick={() => onClick(message)}>
        <MessageCard message={message} />
      </li>
    ))}
  </List>
);

export default CardList;
