import Logo from "../../../public/logo.svg";
import * as Styled from "./Loading.styled";

function Loading() {
  return (
    <Styled.LoadingWrap>
      <Styled.LodingContent>
        <Styled.LogoImage src={Logo} alt="롤링 로고" />
        <Styled.LoadingTitle>
          <Styled.LoadingTitleEffect>R</Styled.LoadingTitleEffect>
          <Styled.LoadingTitleEffect>O</Styled.LoadingTitleEffect>
          <Styled.LoadingTitleEffect>L</Styled.LoadingTitleEffect>
          <Styled.LoadingTitleEffect>L</Styled.LoadingTitleEffect>
          <Styled.LoadingTitleEffect>I</Styled.LoadingTitleEffect>
          <Styled.LoadingTitleEffect>N</Styled.LoadingTitleEffect>
          <Styled.LoadingTitleEffect>G</Styled.LoadingTitleEffect>
        </Styled.LoadingTitle>
        <Styled.LoadingText>
          데이터를 불러오고 있습니다
          <Styled.LoadingEffect>.</Styled.LoadingEffect>
          <Styled.LoadingEffect>.</Styled.LoadingEffect>
          <Styled.LoadingEffect>.</Styled.LoadingEffect>
        </Styled.LoadingText>
      </Styled.LodingContent>
    </Styled.LoadingWrap>
  );
}

export default Loading;
