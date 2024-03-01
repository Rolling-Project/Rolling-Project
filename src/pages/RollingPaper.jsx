import styled from '@emotion/styled';
import CardList from '../components/RollingPager/CardList';
import MessageModal from '../components/RollingPager/Modal';
import useModal from '../utils/hooks/useModal';
import useGetMessages from '../utils/hooks/useGetMessages';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 24px;
`;

const RollingPaper = () => {
  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetMessages();

  const { isModalOpen, clickedItem, openModal, closeModal } = useModal();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <Container>
      <CardList messages={data?.pages.map((page) => page.result).flat()} onClick={openModal} lastRef={ref} />;
      {isModalOpen && <MessageModal message={clickedItem} onClose={closeModal} />}
    </Container>
  );
};

export default RollingPaper;
