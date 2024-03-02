import styled from '@emotion/styled';
import Header from '../../components/common/Header/Header';
import Intro from '../../components/Intro/Intro';
import IntroEmoji from '../../components/Intro/IntroEmoji';
import MainButtonBox from '../../components/MainButtonBox/MainButtonBox';

const MainPage = () => {
  return (
    <>
      <Header isButotnVisible={true} />
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
};

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  width: 1200px;
  height: 678px;
  margin: 0 auto;
  margin-top: 124px;
  gap: 30px;
  flex-direction: column;
`;

const Container = styled.div`
  width: 1200px;
  height: 324px;
  border-radius: 16px;
  background-color: #f6f8ff;
`;
