import { Link } from 'react-router-dom';
import * as Styled from './ListButtonBox.styled';

function ListButtonBox({ dataCount }) {
  return (
    <Styled.ListButtonBox>
      <Styled.Button type="button" $color="#FFADFF" $hoverColor="#A844FF">
        <Link to="/list/all" state={dataCount}>
          모든 롤링 페이퍼 보러가기
        </Link>
      </Styled.Button>

      <Styled.Button type="button" $color="#abdcff" $hoverColor="#0097FF">
        <Link to="/post">직접 롤링 페이퍼 만들어보기</Link>
      </Styled.Button>
    </Styled.ListButtonBox>
  );
}

export default ListButtonBox;
