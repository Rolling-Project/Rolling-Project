import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';

export const ListButtonBox = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1.8rem;
  padding: 1.5rem 0;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
  }
`;

export const LinkButton = styled(Link)`
  display: block;
  outline: none;
  border: none;
  width: 20rem;
  height: 3.5rem;
  padding: 0.85rem 1.5rem;
  border-radius: 0.8rem;
  line-height: 2rem;
  text-align: center;
  font-size: 1.1rem;
  cursor: pointer;
  color: ${colors['--Black']};
  background-color: ${({ color }) => color};

  &:hover {
    background-color: ${({ hovercolor }) => hovercolor};
    transition: 0.7s;
    color: ${colors['--White']};
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 3rem;
    line-height: 1.5rem;
  }
`;
