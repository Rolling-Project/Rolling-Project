import { useEffect, useState, useRef } from 'react';
import * as Styled from './CardList.styled';
import PrevButton from '../../assets/images/icons/arrow-left.svg';
import NextButton from '../../assets/images/icons/arrow-right.svg';
import Card from '../Card/Card';
import EmptyCard from '../EmptyCard/EmptyCard';

function CardList({ title, cardList }) {
  const [buttonVisible, setButtonVisible] = useState({
    prev: false,
    next: false
  });
  const cardContainer = useRef(null);
  const xDown = useRef(null);
  const xUp = useRef(null);

  const handlePrevCard = () => {
    cardContainer.current.scrollBy({
      left: -294.4,
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNextCard = () => {
    cardContainer.current.scrollBy({
      left: 294.4,
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const maxScrollLeft = cardContainer.current.scrollWidth - cardContainer.current.clientWidth;
    const isStart = cardContainer.current.scrollLeft === 0;
    const isEnd = cardContainer.current.scrollLeft >= maxScrollLeft - 10;

    if (isStart) {
      setButtonVisible({
        prev: false,
        next: true
      });
      return;
    }

    if (isEnd) {
      setButtonVisible({
        prev: true,
        next: false
      });
      return;
    }
    setButtonVisible({
      prev: true,
      next: true
    });
  };

  const handleSwipeAction = (xDiff) => {
    cardContainer.current.scrollBy({
      left: xDiff,
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleMove = () => {
    const xDiff = xDown.current - xUp.current;
    if (xDiff !== 0) {
      handleSwipeAction(xDiff);
    }
    // 좌표 초기화
    xDown.current = null;
    xUp.current = null;
  };

  const handleMouseDown = (e) => {
    xDown.current = e.clientX;
    document.body.style.userSelect = 'none';
  };

  const handleMouseUp = (e) => {
    xUp.current = e.clientX;
    handleMove();
    document.body.style.userSelect = '';
  };

  useEffect(() => {
    if (cardList.length > 4) {
      setButtonVisible({
        prev: false,
        next: true
      });
    }

    if (cardContainer.current) {
      cardContainer.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (cardContainer.current) {
        cardContainer.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Styled.CardWrap>
      <Styled.ListTitleBox>
        <Styled.ListTitle>{title}</Styled.ListTitle>
        {cardList.length && (
          <Styled.CardDetailBox>
            <Styled.CardDetail>
              카드를 좌우로 스와이프하거나 버튼을 클릭하여 목록을 확인할 수 있습니다.
            </Styled.CardDetail>
            <Styled.CardDetail>카드를 클릭하여 자세히 보거나 글을 남길 수 있습니다.</Styled.CardDetail>
          </Styled.CardDetailBox>
        )}
      </Styled.ListTitleBox>

      <Styled.CardContainer ref={cardContainer} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <Styled.CardList>
          {cardList.length ? cardList.map((data) => <Card key={data.id} data={data} />) : <EmptyCard />}
        </Styled.CardList>
      </Styled.CardContainer>
      {buttonVisible.prev && <Styled.PrevButton onClick={handlePrevCard} src={PrevButton} alt="이전 버튼" />}
      {buttonVisible.next && <Styled.NextButton onClick={handleNextCard} src={NextButton} alt="다음 버튼" />}
    </Styled.CardWrap>
  );
}

export default CardList;
