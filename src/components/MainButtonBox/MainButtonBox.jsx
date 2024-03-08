import { Link } from 'react-router-dom';
import * as Styled from './MainButtonBox.styled';

function MainButtonBox({ handleViewListPage }) {
  return (
    <Styled.MainButtonBox>
      <Link to="/list">
        <Styled.MainButton to="/" onClick={handleViewListPage} type="button">
          구경해보기
        </Styled.MainButton>
      </Link>
    </Styled.MainButtonBox>
  );
}

export default MainButtonBox;
