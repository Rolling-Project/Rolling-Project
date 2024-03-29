import styled from '@emotion/styled';
import colors from '../../../styles/colors';
import BaseCard from '../BaseCard.styled';

export const Card = styled(BaseCard)`
  padding: 1.75rem 1.5rem;
`;

export const Header = styled.div`
  margin-bottom: 1rem;
`;

export const Message = styled.div`
  height: 6rem;
  margin: 1rem 0;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: ${colors['--Gray-600']};
  font-size: 1.12rem;
  line-height: 1.75rem;
  letter-spacing: -0.01rem;

  @media (max-width: 517px) {
    font-size: 0.94rem;
  }
`;
