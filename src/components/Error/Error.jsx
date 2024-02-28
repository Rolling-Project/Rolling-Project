import Logo from "../../../public/logo.svg";
import * as Styled from "./Error.styled";

function Error() {
  return (
    <Styled.ErrorWrap>
      <Styled.LodingContent>
        <Styled.LogoImage src={Logo} alt="롤링 로고" />
        <Styled.ErrorTitle>ROLLING</Styled.ErrorTitle>
        <Styled.ErrorText>
          데이터를 불러오는 중 <Styled.ErrorTextRedEffect>에러가 발생</Styled.ErrorTextRedEffect>하였습니다!
        </Styled.ErrorText>
        <Styled.ErrorText>
          잠시후 <Styled.ErrorTextPurpleEffect>새로고침</Styled.ErrorTextPurpleEffect>하여{" "}
          <Styled.ErrorTextPurpleEffect>재접속</Styled.ErrorTextPurpleEffect> 해주세요
        </Styled.ErrorText>
      </Styled.LodingContent>
    </Styled.ErrorWrap>
  );
}

export default Error;
