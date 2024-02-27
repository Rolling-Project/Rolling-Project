import styled from '@emotion/styled';
import CardList from '../components/RollingPager/CardList';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 24px;
`;

const RollingPaper = () => {
  return (
    <Container>
      <CardList />
    </Container>
  );
};

export default RollingPaper;
