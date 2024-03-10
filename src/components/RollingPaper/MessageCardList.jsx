import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import MessageCard from './MessageCard/MessageCard';
import PlusCard from './MessageCard/PlusCard';

const List = styled.ul`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 475px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function CardList({ messages, lastRef, onClick, isEditPage }) {
  return (
    <List>
      {!isEditPage && (
        <Link to="message">
          <PlusCard />
        </Link>
      )}
      {messages?.map((message, idx) => (
        <li key={message.id}>
          <MessageCard message={message} isEditPage={isEditPage} onClick={onClick} />
          <div ref={idx === messages.length - 3 ? lastRef : null} />
        </li>
      ))}
    </List>
  );
}

export default CardList;
