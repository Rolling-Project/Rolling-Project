import { Link } from 'react-router-dom';
import * as Styled from './ListButtonBox.styled';

function ListButtonBox({ handleViewAllList }) {
  return (
    <Styled.ListButtonBox>
      <Styled.Button onClick={handleViewAllList} type="button" $color="#FFADFF" $hoverColor="#A844FF">
        모든 롤링 페이퍼 보러가기
      </Styled.Button>

      <Link to="/post">
        <Styled.Button type="button" $color="#abdcff" $hoverColor="#0097FF">
          직접 롤링 페이퍼 만들어보기
        </Styled.Button>
      </Link>
    </Styled.ListButtonBox>
  );
}

export default ListButtonBox;
