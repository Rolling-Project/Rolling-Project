import Button from "../common/Button/Button";
import * as Styled from "./ListButtonBox.styled";

function ListButtonBox(){
  return (
    <Styled.ListButtonBox>
      <Button type="button" color="#FFADFF" hoverColor="#A844FF">모든 롤링 페이퍼 보러가기</Button>
      <Button type="button" color="#abdcff" hoverColor="#0097FF">직접 롤링 페이퍼 만들어보기</Button>
    </Styled.ListButtonBox>
  )
}

export default ListButtonBox;