import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import CardList from '../components/RollingPager/CardList';
import MessageModal from '../components/RollingPager/Modal';
import useModal from '../utils/hooks/useModal';
import useGetMessages from '../utils/hooks/useGetMessages';
import Header from '../components/RollingPager/Header';
import colors from '../styles/colors';
import useDeleteRollingPaper from '../utils/hooks/useDeleteRollingPaper';
import { Primary40Button } from '../components/common/Button/Button';

const Container = styled.div`
  position: relative;
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

const DeletedSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 11px;

  div {
    width: fit-content;
    @media (max-width: 820px) {
      position: fixed;
      bottom: 25px;
      width: 100%;
      max-width: calc(100vw - 24px * 2);
    }
  }
`;

function RollingPaper() {
  const { isModalOpen, clickedItem, openModal, closeModal } = useModal();
  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetMessages();
  const [ref, inView] = useInView();

  const location = useLocation().pathname;
  const regex = /post\/\d+\/edit/;
  const isEdit = regex.test(location);

  const { mutate } = useDeleteRollingPaper();

  const { id: recipientId } = useParams();

  const handleDelete = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <Container>
      <Header messages={data?.pages} />
      <Content>
        <DeletedSection>
          <div>
            {isEdit && <Primary40Button onClick={() => handleDelete({ id: recipientId })}>삭제하기</Primary40Button>}
          </div>
        </DeletedSection>
        <CardList messages={data?.pages.map((page) => page.result).flat()} onClick={openModal} lastRef={ref} />
        {isModalOpen && <MessageModal message={clickedItem} onClose={closeModal} />}
      </Content>
    </Container>
  );
}

export default RollingPaper;
