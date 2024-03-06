import { useMutation, useQueryClient } from '@tanstack/react-query';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const deleteMessage = async ({ id }) => {
  const response = await fetch(`${BASE_URL}messages/${id}/`, {
    method: 'DELETE'
  });
  return response;
};

const useDeleteMessages = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteMessage, {
    onSuccess: () => queryClient.invalidateQueries(['messages'])
  });
};

export default useDeleteMessages;
