import styled from '@emotion/styled';
import CardList from '../components/RollingPager/CardList';
import MessageModal from '../components/RollingPager/Modal';
import useModal from '../utils/hooks/useModal';
import useGetMessages from '../utils/hooks/useGetMessages';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Header from '../components/RollingPager/Header';
import colors from '../styles/colors';

const Container = styled.div`
  background-color: ${colors['--Orange-200']};
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 246px 24px;
`;

function RollingPaper() {
  const { isModalOpen, clickedItem, openModal, closeModal } = useModal();
  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetMessages();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <Container>
      <Header messages={data?.pages} />
      <Content>
        <CardList messages={data?.pages.map((page) => page.result).flat()} onClick={openModal} lastRef={ref} />
        {isModalOpen && <MessageModal message={clickedItem} onClose={closeModal} />}
      </Content>
    </Container>
  );
}

export default RollingPaper;
