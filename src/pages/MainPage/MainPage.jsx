import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import Intro from '../../components/Intro/Intro';
import IntroEmoji from '../../components/Intro/IntroEmoji';
import MainButtonBox from '../../components/MainButtonBox/MainButtonBox';

function MainPage() {
  return (
    <>
      <Helmet>
        <title>Rolling</title>
      </Helmet>
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

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  padding: 1.5rem 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
