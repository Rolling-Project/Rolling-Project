import { useEffect, useState, useRef } from 'react';
import * as Styled from './CardList.styled';
import PrevButton from '../../assets/arrow-left.svg';
import NextButton from '../../assets/arrow-right.svg';
import Card from '../Card/Card';

function CardList({ title, cardList }) {
  const [buttonVisible, setButtonVisible] = useState({
    prev: false,
    next: true
  });
  const cardContainer = useRef(null);

  const handlePrevCard = () => {
    cardContainer.current.scrollBy({
      left: -294.4, // 왼쪽으로 스크롤
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNextCard = () => {
    cardContainer.current.scrollBy({
      left: 294.4, // 오른쪽으로 스크롤
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (cardContainer.current.scrollLeft >= 4700) {
      setButtonVisible({
        prev: true,
        next: false
      });
      return;
    }

    if (cardContainer.current.scrollLeft === 0) {
      setButtonVisible({
        prev: false,
        next: true
      });
      return;
    }

    setButtonVisible({
      prev: true,
      next: true
    });
  };

  useEffect(() => {
    cardContainer.current.addEventListener('scroll', handleScroll);

    // return () => {
    //   cardContainer.current.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <Styled.CardListContainer>
      <Styled.CardWrap>
        <Styled.ListTitleBox>
          <Styled.ListTitle>{title}</Styled.ListTitle>
          <Styled.CardDetailBox>
            <Styled.CardDetail>
              카드를 좌우로 스와이프하거나 버튼을 클릭하여 목록을 확인할 수 있습니다.
            </Styled.CardDetail>
            <Styled.CardDetail>카드를 클릭하여 자세히 보거나 글을 남길 수 있습니다.</Styled.CardDetail>
          </Styled.CardDetailBox>
        </Styled.ListTitleBox>

        <Styled.CardContainer ref={cardContainer}>
          <Styled.CardList>
            {cardList?.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </Styled.CardList>
        </Styled.CardContainer>
        {buttonVisible.prev && <Styled.PrevButton onClick={() => handlePrevCard()} src={PrevButton} alt="이전 버튼" />}
        {buttonVisible.next && <Styled.NextButton onClick={() => handleNextCard()} src={NextButton} alt="다음 버튼" />}
      </Styled.CardWrap>
    </Styled.CardListContainer>
  );
}

export default CardList;
