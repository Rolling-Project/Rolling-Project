import { Link } from 'react-router-dom';
import MessageCard from '../MessageCard/MessageCard/MessageCard';
import PlusCard from '../MessageCard/PlusCard/PlusCard';
import * as S from './MessageCardList.styled';

function CardList({ messages, lastRef, onClick, isEditPage }) {
  return (
    <S.List>
      {!isEditPage && (

        <PlusCard> <Link to="message"> </Link></PlusCard>
      )}
      {messages?.map((message, idx) => (
        <li key={message.id}>
          <MessageCard message={message} isEditPage={isEditPage} onClick={onClick} />
          <div ref={idx === messages.length - 3 ? lastRef : null} />
        </li>
      ))}
    </S.List>
  );
}

export default CardList;
