import { useEffect, useState } from 'react';
import * as Styled from './AllCardStyled';
import Card from '../../components/Card/Card';
import ArrowToggleDown from '../../assets/arrow-toggle-down.svg';
import SearchIcon from '../../assets/search.svg';

const conveterParameter = {
  최신순: 'createdAt',
  인기순: 'reactionCount'
};

function AllCardList({ allData }) {
  const [listFilterValue, setListFilterValue] = useState('최신순');
  const [lstFilterToggle, setListFilterToggle] = useState(false);
  const [allCardList, setAllCardList] = useState(allData);
  console.log(allCardList);
  const handleListFilterToggle = (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.alt === '리스트 필터 토글 버튼') {
      setListFilterToggle(!lstFilterToggle);
      return;
    }
    setListFilterToggle(false);
  };

  const handleListFilterValue = (e) => {
    setListFilterValue(e.target.textContent);
    setListFilterToggle(!lstFilterToggle);
  };

  useEffect(() => {
    setAllCardList(
      [...allCardList].sort(
        (a, b) => new Date(b[conveterParameter[listFilterValue]]) - new Date(a[conveterParameter[listFilterValue]])
      )
    );
  }, [listFilterValue]);

  return (
    <Styled.AllCardListWrap onClick={(e) => handleListFilterToggle(e)}>
      <Styled.CardSearchInputContainer>
        <Styled.CardSearchInputBox>
          <Styled.CardSearchInput type="search" placeholder="롤링 페이퍼를 전하고 싶은 대상을 입력해 주세요" />
          <Styled.SearchIcon src={SearchIcon} alt="검색 아이콘" />
        </Styled.CardSearchInputBox>
      </Styled.CardSearchInputContainer>

      <Styled.ListHeaderWrap>
        <Styled.ListHeaderBox>
          <Styled.ListTitle>
            롤링 페이퍼
            <Styled.ListTitleLineBreak /> 전체 보기
          </Styled.ListTitle>
          <Styled.ListFilterBox>
            <Styled.ListFilterButton type="button" $lstFilterToggle={lstFilterToggle}>
              {listFilterValue}
            </Styled.ListFilterButton>
            <Styled.FilterToggleImage src={ArrowToggleDown} alt="리스트 필터 토글 버튼" />
            <Styled.ListFilter $lstFilterToggle={lstFilterToggle}>
              <Styled.ListFilterItem onClick={(e) => handleListFilterValue(e)}>최신순</Styled.ListFilterItem>
              <Styled.ListFilterItem onClick={(e) => handleListFilterValue(e)}>인기순</Styled.ListFilterItem>
            </Styled.ListFilter>
          </Styled.ListFilterBox>
        </Styled.ListHeaderBox>

        <Styled.ListText>
          찾으시는 롤링 페이퍼 대상이 없다면 우측 상단 롤링 <Styled.ListTextLineBreak /> 페이퍼 만들기 버튼을 클릭하여
          롤링 페이퍼를 만들어보세요!
        </Styled.ListText>
      </Styled.ListHeaderWrap>

      <Styled.CardListBox>
        {allCardList.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </Styled.CardListBox>
    </Styled.AllCardListWrap>
  );
}

export default AllCardList;
