import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import * as Styled from "./ListButtonBox.styled";

function ListButtonBox() {
  return (
    <Styled.ListButtonBox>
      <Button type="button" color="#FFADFF" hoverColor="#A844FF">
        모든 롤링 페이퍼 보러가기
      </Button>
      <Link to="/post">
        <Button to="/post" color="#abdcff" hoverColor="#0097FF">
          직접 롤링 페이퍼 만들어보기
        </Button>
      </Link>
    </Styled.ListButtonBox>
  );
}

export default ListButtonBox;