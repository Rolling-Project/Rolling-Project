import { useEffect, useState } from 'react';
import * as Styled from './AllCardList.styled';
import Card from '../Card/Card';
import HiddenLabel from '../common/HiddenLabel/HiddenLabel';
import ArrowToggleDown from '../../assets/arrow-toggle-down.svg';
import SearchIcon from '../../assets/search.svg';
import EmptyCard from '../EmptyCard/EmptyCard';

const latest = '최신순';
const filter = 'filter';
function AllCardList({ cardList, setData, cacheData, popularDataLoad, setListFilter, listFilterValue }) {
  const [lstFilterToggle, setListFilterToggle] = useState(false); // 정렬 필터 리스트 토글 버튼
  const [searchValue, setSearchValue] = useState(''); // 인풋 값

  // 정렬 필터 리스트 토글
  const handleListFilterToggle = (e) => {
    if (e.target.dataset.status === filter) {
      setListFilterToggle(!lstFilterToggle);
      return;
    }
    setListFilterToggle(false);
  };

  // 정렬 필터 설정(최신순, 인기순)
  const handleListFilterValue = (e) => {
    setListFilter(e.target.textContent);
    setListFilterToggle(!lstFilterToggle);
  };

  // 인풋 값 관리
  const handleCardSearch = (e) => {
    setSearchValue(e.target.value.trim());
  };

  // 데이터 정렬(최신순, 인기순)
  useEffect(() => {
    if (listFilterValue === latest) {
      setData(cacheData.current.latestList);
      return;
    }

    if (cacheData.current.popularList.length) {
      setData(cacheData.current.popularList);
      return;
    }

    popularDataLoad();
  }, [listFilterValue]);

  // 롤링 페이퍼 검색
  const handleSearchChange = (value) => {
    if (!value) {
      // 인풋 값이 없을 때
      if (listFilterValue === latest) {
        setData(cacheData.current.latestList); // 최신순 정렬
        return;
      }
      setData(cacheData.current.popularList); // 인기순 정렬
      return;
    }
    const regex = new RegExp(value, 'i');

    // 최신순 검색 결과
    if (listFilterValue === latest) {
      const searchResult = cacheData.current.latestList.filter((list) => regex.test(list.name));
      setData(searchResult);
      return;
    }
    // 인기순 검색 결과
    const searchResult = cacheData.current.popularList.filter((list) => regex.test(list.name));
    setData(searchResult);
  };

  useEffect(() => {
    // searchValue 바뀌면 일정시간 후 함수 호출
    const timer = setTimeout(() => {
      handleSearchChange(searchValue);
    }, 500); // 500ms(0.5초) 딜레이

    // 클린업 함수 => 타이머 클리어
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <Styled.AllCardListWrap onClick={(e) => handleListFilterToggle(e)}>
      <Styled.CardSearchInputContainer>
        <Styled.CardSearchInputBox>
          <HiddenLabel htmlFor="card-search-input">롤링 페이퍼 검색창</HiddenLabel>
          <Styled.CardSearchInput
            id="card-search-input"
            value={searchValue}
            onChange={(e) => handleCardSearch(e)}
            type="search"
            placeholder="롤링 페이퍼를 전하고 싶은 대상을 입력해 주세요"
          />
          <Styled.SearchIcon src={SearchIcon} alt="롤링 페이퍼 검색 아이콘" />
        </Styled.CardSearchInputBox>
      </Styled.CardSearchInputContainer>

      <Styled.ListHeaderWrap>
        <Styled.ListHeaderBox>
          <Styled.ListTitle>
            롤링 페이퍼
            <Styled.ListTitleLineBreak /> 전체 보기
          </Styled.ListTitle>
          <Styled.ListFilterBox>
            <Styled.ListFilterButton data-status="filter" type="button" $lstFilterToggle={lstFilterToggle}>
              {listFilterValue}
            </Styled.ListFilterButton>
            <Styled.FilterToggleImage
              src={ArrowToggleDown}
              data-status="filter"
              alt="롤링 페이퍼 리스트 필터 토글 아이콘"
            />
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

      {cardList.length !== 0 ? (
        <Styled.CardListBox>
          {cardList?.map((data) => (
            <Card key={data.id} data={data} isBig />
          ))}
        </Styled.CardListBox>
      ) : (
        <EmptyCard all />
      )}
    </Styled.AllCardListWrap>
  );
}

export default AllCardList;
