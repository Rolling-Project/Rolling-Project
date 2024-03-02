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
    // 컴포넌트가 마운트될 때 이벤트 리스너를 추가합니다.
    cardContainer.current.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      cardContainer.current.removeEventListener('scroll', handleScroll);
    };
  }, []); // 빈 배열을 전달하여 마운트 및 언마운트 시에만 실행되도록 설정합니다.

  return (
    <Styled.CardWrap>
      <Styled.ListTitleBox>
        <Styled.ListTitle>{title}</Styled.ListTitle>
        <Styled.CardDetailBox>
          <Styled.CardDeviceDetail>좌, 우를 스와이프하여 카드 목록을 확인 할 수 있습니다.</Styled.CardDeviceDetail>
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
  );
}

export default CardList;
