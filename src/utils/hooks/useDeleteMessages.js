import { useMutation, useQueryClient } from '@tanstack/react-query';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const deleteMessage = async ({ id }) => {
  const response = await fetch(`${BASE_URL}messages/${id}/`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('메세지 삭제 실패');
  }
  return response;
};

const useDeleteMessages = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteMessage, {
    onSuccess: () => queryClient.invalidateQueries(['messages'])
  });
};

export default useDeleteMessages;
