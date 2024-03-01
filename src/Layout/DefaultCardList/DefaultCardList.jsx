import CardList from '../../components/CardList/CardList';
import ListButtonBox from '../../components/ListButtonBox/ListButtonBox';
import * as Styled from './DefaultCardList.styled';

function DefaultCardList({ handleViewAllList, popularData, latestData }) {
  return (
    <Styled.DefaultCardListWrap>
      <CardList title="🔥 인기 롤링 페이퍼 TOP 20" cardList={popularData} />
      <CardList title="⭐️ 최신 롤링 페이퍼 TOP 20" cardList={latestData} />
      <ListButtonBox handleViewAllList={handleViewAllList} />
    </Styled.DefaultCardListWrap>
  );
}

export default DefaultCardList;
