import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CardList from '../../components/RollingPaper/MessageCardList/MessageCardList';
import MessageModal from '../../components/RollingPaper/MessageModal/MessageModal';
import useModal from '../../utils/hooks/useModal';
import useGetMessages from '../../utils/hooks/useGetMessages';
import Header from '../../components/RollingPaper/HeaderService/HeaderService';
import useDeleteRollingPaper from '../../utils/hooks/useDeleteRollingPaper';
import { Primary40Button } from '../../components/common/Button/Button';
import { isLogin } from '../../utils/helpers/validator';
import * as S from './RollingPaperPage.styed';

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
    <S.Container bg={background}>
      <Helmet>
        <title>Rolling | 롤링 페이퍼 작성해준 사람들</title>
      </Helmet>
      <Header messages={data?.pages} name={name} />

      <S.Content>
        {isEditPage && (
          <S.DeletedSection>
            <div>
              <Primary40Button onClick={handleDelete}>삭제하기</Primary40Button>
            </div>
          </S.DeletedSection>
        )}

        <CardList
          messages={data?.pages.map((page) => page.result).flat()}
          onClick={openModal}
          lastRef={ref}
          isEditPage={isEditPage}
        />

        {isModalOpen && <MessageModal message={clickedItem} onClose={closeModal} />}
      </S.Content>
    </S.Container>
  );
}

export default RollingPaper;
