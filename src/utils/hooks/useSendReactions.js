import { useMutation, useQueryClient } from '@tanstack/react-query';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const postReaction = async ({ id, emoji, type }) => {
  const response = await fetch(`${BASE_URL}recipients/${id}/reactions/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      emoji,
      type
    })
  });
  const result = await response.json();
  return result;
};

const useSendReactions = () => {
  const queryClient = useQueryClient();
  return useMutation(postReaction, {
    onSuccess: () => queryClient.invalidateQueries(['reactions'])
  });
};

export default useSendReactions;
