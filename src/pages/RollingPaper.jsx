import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import CardList from '../components/RollingPaper/MessageCardList';
import MessageModal from '../components/RollingPaper/Modal';
import useModal from '../utils/hooks/useModal';
import useGetMessages from '../utils/hooks/useGetMessages';
import Header from '../components/RollingPaper/HeaderService';
import colors from '../styles/colors';
import useDeleteRollingPaper from '../utils/hooks/useDeleteRollingPaper';
import { Primary40Button } from '../components/common/Button/Button';
import { isValidUrl, isLogin } from '../utils/helpers/validator';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: ${(props) => (isValidUrl(props.bg) ? `url(${props.bg})` : colors[props.bg])};
  background-size: cover;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 7rem 1.5rem;
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

  const { mutate } = useDeleteRollingPaper();

  const [ref, inView] = useInView();

  const { id: recipientId } = useParams();

  const location = useLocation();
  const path = location.pathname;

  if (location.state) {
    const { effect: background, name } = location.state;
    localStorage.setItem('background', background);
    localStorage.setItem('name', name);
  }

  const background = localStorage.getItem('background');
  const name = localStorage.getItem('name');

  const isEditPage = isLogin(path);

  const handleDelete = () => {
    mutate({ id: recipientId });
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <Container bg={background}>
      <Helmet>
        <title>Rolling | </title>
      </Helmet>
      <Header messages={data?.pages} name={name} />

      <Content>
        {isEditPage && (
          <DeletedSection>
            <div>
              <Primary40Button onClick={handleDelete}>삭제하기</Primary40Button>
            </div>
          </DeletedSection>
        )}

        <CardList
          messages={data?.pages.map((page) => page.result).flat()}
          onClick={openModal}
          lastRef={ref}
          isEditPage={isEditPage}
        />

        {isModalOpen && <MessageModal message={clickedItem} onClose={closeModal} />}
      </Content>
    </Container>
  );
}

export default RollingPaper;
