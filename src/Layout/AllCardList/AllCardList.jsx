import * as Styled from './AllCardStyled';
import Card from '../../components/Card/Card';

function AllCardList({ allData }) {
  console.log(allData);
  return (
    <Styled.AllCardListWrap>
      <Styled.CardSearchInputBox>
        <Styled.CardSearchInput type="search" placeholder="롤링 페이퍼를 전하고 싶은 대상을 입력해 주세요" />
      </Styled.CardSearchInputBox>
      <Styled.ListHeaderBox>
        <Styled.ListTitle>롤링 페이퍼 전체 보기</Styled.ListTitle>
        <Styled.CardListFilter name="listFilter">
          <option value="latest">최신순</option>
          <option value="popular">인기순</option>
        </Styled.CardListFilter>
      </Styled.ListHeaderBox>
      <Styled.CardListBox>
        {allData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </Styled.CardListBox>
    </Styled.AllCardListWrap>
  );
}

export default AllCardList;
