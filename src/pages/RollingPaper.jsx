import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import CardList from '../components/RollingPager/CardList';
import MessageModal from '../components/RollingPager/Modal';
import useModal from '../utils/hooks/useModal';
import useGetMessages from '../utils/hooks/useGetMessages';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 24px;
`;

function RollingPaper() {
  const { isModalOpen, clickedItem, openModal, closeModal } = useModal();

  const { id: recipientId } = useParams();

  const { data, isLoading, error } = useGetMessages(recipientId);

  if (isLoading) return <p>로딩 컴포넌트</p>;
  if (error) return <p>에러 컴포넌트</p>;

  return (
    <Container>
      <CardList messages={data.results} onClick={openModal} />
      {isModalOpen && <MessageModal message={clickedItem} onClose={closeModal} />}
    </Container>
  );
}

export default RollingPaper;
