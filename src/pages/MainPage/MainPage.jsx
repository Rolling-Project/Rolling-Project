import styled from '@emotion/styled';
import Header from '../../components/common/Header/Header';
import Intro from '../../components/Intro/Intro';
import IntroEmoji from '../../components/Intro/IntroEmoji';
import MainButtonBox from '../../components/MainButtonBox/MainButtonBox';

function MainPage() {
  return (
    <>
      <Header isButotnVisible />
      <Wrapper>
        <Container>
          <Intro />
        </Container>
        <Container>
          <IntroEmoji />
        </Container>
      </Wrapper>
      <MainButtonBox />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.875rem;
  margin: 0 auto;
  padding-top: 8rem;
`;

const Container = styled.div`
  width: 75rem;
  height: 20.25rem;
  border-radius: 1rem;
  background-color: #f6f8ff;
`;

export default MainPage;
