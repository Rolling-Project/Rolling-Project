import * as Styled from './EmptyCard.styled';

function EmptyCard({ all }) {
  return (
    <Styled.EmptyCardBox all={all}>
      아직 생성된 롤링 페이퍼가 없습니다.
      <br />
      따뜻한 마음을 전하는 롤링 페이퍼를 만들어보세요.
    </Styled.EmptyCardBox>
  );
}

export default EmptyCard;
