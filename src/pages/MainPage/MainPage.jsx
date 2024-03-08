import styled from '@emotion/styled';
import Header from '../../components/common/Header/Header';
import Intro from '../../components/Intro/Intro';
import IntroEmoji from '../../components/Intro/IntroEmoji';
import MainButtonBox from '../../components/MainButtonBox/MainButtonBox';

// function MainPage() {
//   return (
//     <>
//       <Header isButotnVisible />
//       <Wrapper>
//         <Container>
//           {/* <Intro /> */}
//         </Container>
//         <Container>
//           <IntroEmoji />
//         </Container>
//       </Wrapper>
//       <MainButtonBox />
//     </>
//   );
// }

function MainPage() {
  return (
    <>
      <Header isButotnVisible />
      <Wrapper>
        <Container>
          <Intro />
        </Container>
        {/* <Container>
          <IntroEmoji />
        </Container> */}
      </Wrapper>
      <MainButtonBox />
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  //width: 75rem;
  flex-direction: column;
  //align-items: flex-start;
  align-items: center;
  /* gap: 1.875rem;
  margin: 0 auto;
  padding-top: 8rem; */
`;

// Wrapper는 전체 페이지
// Container는 안에 요소를 정렬시키기 위한 컨테이너라고 생각하시면 될 것 같습니다!
const Container = styled.div`
  width: 100%;
  padding: 7.75rem 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 20.25rem;
  border-radius: 1rem;
  background-color: #f6f8ff; */
`;

export default MainPage;
