import styled from '@emotion/styled';
import colors from '../../styles/colors';
import BaseCard from './Card/BaseCard';
import Avatar from './Avatar';
import BADGE_COLORS from '../../utils/constants/badgeColors';
import formatDate from '../../utils/helpers/dateUtils';

const Card = styled(BaseCard)`
  padding: 0 24px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 28px 0 15px 0;
`;

const Name = styled.div`
  font-size: 20px;
  margin-bottom: 6px;
  span {
    font-weight: bold;
  }
`;

const Badge = styled.div`
  display: inline-block;
  padding: 0 8px;
  background-color: ${(props) => colors[BADGE_COLORS[props.relationship]?.backgroundColor]};
  color: ${(props) => colors[BADGE_COLORS[props.relationship]?.color]};
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.07px;
`;

const Divider = styled.div`
  height: 1px;
  background: ${colors['--Gray-200']};
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

const Date = styled.div`
  color: ${colors['--Gray-400']};
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.06px;
`;

function MessageCard({ message }) {
  const { sender, profileImageURL, relationship, content, createdAt } = message;
  return (
    <Card>
      <Info>
        <Avatar imgUrl={profileImageURL} />
        <div>
          <Name>
            From.
            <span>{` ${sender}`}</span>
          </Name>
          <Badge relationship={relationship}>{relationship}</Badge>
        </div>
      </Info>
      <Divider />
      <Message>{content}</Message>
      <Date>{formatDate(createdAt)}</Date>
    </Card>
  );
}

export default MessageCard;
