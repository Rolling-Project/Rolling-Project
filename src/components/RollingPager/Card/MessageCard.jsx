import styled from '@emotion/styled';
import colors from '../../../styles/colors';
import BaseCard from './BaseCard';
import Profile from '../Profile';
import Date from '../Date';
import Divider from '../Divider';
import formatDate from '../../../utils/helpers/dateUtils';

const Card = styled.div`
  height: 280px;
  border-radius: 16px;
  background: ${colors['--White']};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  padding: 28px 24px;
`;

const Header = styled.div`
  margin-bottom: 15px;
`;

const Message = styled.div`
  height: 106px;
  margin: 16px 0;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  color: ${colors['--Gray-600']};
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.18px;

  @media (max-width: 517px) {
    font-size: 15px;
  }
`;

function MessageCard({ message, isEditPage, onClick }) {
  const { id, sender, profileImageURL, relationship, content, createdAt } = message;
  return (
    <Card onClick={() => onClick(message)}>
      <Header>
        <Profile id={id} imgUrl={profileImageURL} sender={sender} relationship={relationship} isEditPage={isEditPage} />
      </Header>

      <Divider />

      <Message>{content}</Message>

      <Date fontSize="12px">{formatDate(createdAt)}</Date>
    </Card>
  );
}

export default MessageCard;
