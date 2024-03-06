import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const deleteRollingPaper = async ({ id }) => {
  const response = await fetch(`${BASE_URL}recipients/${id}/`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('롤링페이퍼 삭제 실패');
  }
  return response;
};

const useDeleteRollingPaper = () => {
  const navigate = useNavigate();
  return useMutation(deleteRollingPaper, {
    onSuccess: () => {
      navigate('/list');
    }
  });
};

export default useDeleteRollingPaper;
