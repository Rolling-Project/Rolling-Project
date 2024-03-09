import * as Styled from './ListButtonBox.styled';

function ListButtonBox({ dataCount }) {
  return (
    <Styled.ListButtonBox>
      <Styled.LinkButton to="/list/all" state={dataCount} color="#FFADFF" hovercolor="#A844FF">
        모든 롤링 페이퍼 보러가기
      </Styled.LinkButton>

      <Styled.LinkButton to="/post" color="#abdcff" hovercolor="#0097FF">
        직접 롤링 페이퍼 만들어보기
      </Styled.LinkButton>
    </Styled.ListButtonBox>
  );
}

export default ListButtonBox;
