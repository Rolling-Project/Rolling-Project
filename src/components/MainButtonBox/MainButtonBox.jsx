import { Link } from 'react-router-dom';
import * as Styled from './MainButtonBox.styled';

function MainButtonBox({ handleViewListPage }) {
  return (
    <Styled.MainButtonBox>
      <Link to="/list">
        <Styled.MainButton onClick={handleViewListPage} type="button" $color="#FFADFF" $hoverColor="#A844FF">
          구경해보기
        </Styled.MainButton>
      </Link>
    </Styled.MainButtonBox>
  );
}

export default MainButtonBox;
