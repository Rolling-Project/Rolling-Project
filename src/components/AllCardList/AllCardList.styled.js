import styled from '@emotion/styled';
import colors from '../../styles/colors';

export const AllCardListWrap = styled.main`
  width: 72.5rem;
  max-width: 120rem;
  min-width: 21rem;
  margin: 0 auto;
  padding-top: 2rem;
  @media screen and (max-width: 1200px) {
    width: auto;
    padding: 2rem 1.5rem 0;
  }
`;

export const CardSearchInputContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const CardSearchInputBox = styled.div`
  width: 27rem;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 720px) {
    width: 22rem;
    height: 3rem;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    height: 2.5rem;
  }
`;

export const CardSearchInput = styled.input`
  border: 1.5px solid ${colors['--Gray-400']};
  border-radius: 1rem;
  width: 27rem;
  height: 3.5rem;
  padding: 1.1rem 1.2rem 1rem;
  outline: none;
  font-size: 0.9rem;

  &:focus {
    border: 1.5px solid ${colors['--Purple-600']};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  @media screen and (max-width: 720px) {
    width: 22rem;
    height: 3rem;
    font-size: 0.85rem;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    height: 2.5rem;
    font-size: 0.7rem;
  }
`;

export const SearchIcon = styled.img`
  width: 1.5625rem;
  height: 1.5625rem;
  position: absolute;
  top: 1rem;
  right: 1rem;

  @media screen and (max-width: 720px) {
    width: 1.3rem;
    height: 1.3rem;
    top: 0.9rem;
  }

  @media screen and (max-width: 450px) {
    width: 1.2rem;
    height: 1.2rem;
    top: 0.7rem;
  }
`;

export const ListHeaderWrap = styled.div`
  margin-top: 1rem;
  height: 3.5rem;
  padding: 0 0.7rem;

  @media screen and (max-width: 720px) {
    height: 4.5rem;
  }

  @media screen and (max-width: 450px) {
    height: 6rem;
  }
`;
export const ListTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;
  @media screen and (max-width: 500px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
`;

export const ListTitleLineBreak = styled.br`
  display: none;
  @media screen and (max-width: 450px) {
    display: block;
  }
`;

export const ListHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListFilterBox = styled.div`
  position: relative;
  height: 2.5rem;
  display: flex;
  justify-content: right;
`;

export const ListFilterButton = styled.button`
  width: 7rem;
  height: 2.5rem;
  border-radius: 0.3rem;
  outline: none;
  border: 1px solid ${colors['--Purple-600']};
  border: ${({ $lstFilterToggle }) => $lstFilterToggle ? `1px solid ${colors['--Purple-600']}` : `1px solid ${colors['--Gray-400']}`};
  background-color: ${colors['--White']};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  text-align: left;
  cursor: pointer;
  padding: 0.3rem 0.4rem 0 1rem;

  @media screen and (max-width: 450px) {
    width: 7rem;
    height: 2.5rem;
  }
`;

export const FilterToggleImage = styled.img`
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 0.75rem;
  right: 0.3rem;
`;

export const ListFilter = styled.ul`
  width: 7rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  position: absolute;
  background-color: ${colors['--White']};
  border-radius: 0.3rem;
  top: 101.2%;
  z-index: 998;
  transition: 0.4s;
  overflow: hidden;
  height: ${({ $lstFilterToggle }) => ($lstFilterToggle ? '5.5rem' : '0')};
  border: ${({ $lstFilterToggle }) => ($lstFilterToggle ? `1px solid ${colors['--Purple-600']}` : 'none')};
  cursor: pointer;
  padding: 0.5rem 0 0.5rem 0;
  border-top: none;
`;

export const ListFilterItem = styled.li`
  padding: 0.6rem 0.375rem 0.6rem 1rem;
  border-radius: 0.2rem;

  &:nth-of-type(2) {
    border-top: 1px solid ${colors['--Purple-400']};
  }

  &:hover {
    background-color: ${colors['--Purple-100']};
    transition: 0.7s;
  }
`;

export const ListText = styled.p`
  color: ${colors['--Gray-400']};
  margin-top: 0.4rem;
  font-size: 0.9rem;
  text-align: right;
  line-height: 1.2rem;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.7rem;
    margin-top: 0.2rem;
  }
`;

export const ListTextLineBreak = styled.br`
  display: none;
  @media screen and (max-width: 720px) {
    display: block;
  }
`;

export const CardListBox = styled.ul`
  padding: 2rem 0 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 17.2rem);
  gap: 3rem 1.25rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 17.2rem);
    width: auto;
    margin: 0 auto;
    gap: 3rem 0;
    justify-content: space-around;
  }

  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 17.2rem);
    gap: 3rem 0;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 17.2rem);
  }
`;

export const temp = styled.div`
  width: 17.2rem;
  height: 16.2rem;
  border: 1px solid #000;
`;
