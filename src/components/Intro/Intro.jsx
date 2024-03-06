import * as Styled from './Intro.styled';
import example from '../../assets/images/example.svg';

function Intro() {
  return (
    <Styled.Wrap>
      <Styled.ContentBox>
        <Styled.Num>Point.01</Styled.Num>
        <Styled.Content>
          누구나 손쉽게,온라인
          <br /> 롤링 페이퍼를 만들 수 있어요
        </Styled.Content>
        <Styled.Description>로그인 없이 자유롭게 만들어요.</Styled.Description>
      </Styled.ContentBox>
      <Styled.Example>
        <img src={example} alt="Example" />
      </Styled.Example>
    </Styled.Wrap>
  );
}

export default Intro;
