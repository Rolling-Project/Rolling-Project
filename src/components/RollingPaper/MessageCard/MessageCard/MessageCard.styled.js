import styled from '@emotion/styled';
import colors from '../../../../styles/colors';
import BaseCard from '../BaseCard.styled';

export const Card = styled(BaseCard)`
  padding: 28px 24px;
`;

export const Header = styled.div`
  margin-bottom: 15px;
`;

export const Message = styled.div`
  height: 6rem;
  margin: 16px 0;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: ${colors['--Gray-600']};
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.18px;

  @media (max-width: 517px) {
    font-size: 15px;
  }
`;
