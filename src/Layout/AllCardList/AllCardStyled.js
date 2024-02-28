import styled from '@emotion/styled';
import colors from '../../styles/colors';

export const AllCardListWrap = styled.main`
  width: 72.5rem;
  margin: 0 auto;
  padding-top: 2rem;
`;

export const CardSearchInputBox = styled.div`
  width: 100%;
  text-align: center;
`;

export const CardSearchInput = styled.input`
  border: 1.5px solid ${colors['--Purple-600']};
  border-radius: 1rem;
  width: 27rem;
  height: 3.5rem;
  padding: 1.1rem 1.2rem 1rem;
  outline: none;
  font-size: 0.9rem;
`;

export const ListHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  height: 3rem;
  padding: 0 0.7rem;
`;
export const ListTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;
`;
export const CardListFilter = styled.select`
  border: 1px solid ${colors['--Purple-600']};
  width: 7.5rem;
  height: 2.5rem;
  border-radius: 0.6rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.1rem;
  outline: none;
`;

export const CardListBox = styled.section`
  padding: 2rem 0 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 17.2rem);
  gap: 3rem 1.25rem;

  @media screen and (max-width: 1200px) {
    /* width: 44rem; */
    grid-template-columns: repeat(3, 17.2rem);
    gap: 1.56rem 1.5rem;
  }

  @media screen and (max-width: 767px) {
    /* width: 20.3rem; */
    grid-template-columns: repeat(2, 17.2rem);
    gap: 1.25rem 0;
  }
`;

export const temp = styled.div`
  width: 17.2rem;
  height: 16.2rem;
  border: 1px solid #000;
`;
