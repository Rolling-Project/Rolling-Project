import styled from '@emotion/styled';
import colors from '../../styles/colors';
import BaseCard from './BaseCard';
import Profile from './Profile';
import Date from './Date';
import Divider from './Divider';
import formatDate from '../../utils/helpers/dateUtils';

const Card = styled(BaseCard)`
  padding: 0 24px;
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
`;

const MessageCard = ({ message }) => {
  const { sender, profileImageURL, relationship, content, createdAt } = message;
  return (
    <Card>
      <Profile imgUrl={profileImageURL} sender={sender} relationship={relationship} />
      <Divider />
      <Message>{content}</Message>
      <Date fontSize={'12px'}>{formatDate(createdAt)}</Date>
    </Card>
  );
};

export default MessageCard;
