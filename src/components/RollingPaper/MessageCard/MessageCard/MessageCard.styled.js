import styled from '@emotion/styled';
import colors from '../../../../styles/colors';

export const Card = styled.div`
  height: 17.5rem;
  border-radius: 1rem;
  background: ${colors['--White']};
  box-shadow: 0 .125rem .75rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
  padding: 1.75rem 1.5rem;

  &:hover{
    transition: 0.5s;
    transform: scale(1.05);
  }
`;

export const Header = styled.div`
  margin-bottom: .9375rem;
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
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: -0.0112rem;

  @media (max-width: 517px) {
    font-size: .9375rem;
  }
`;
