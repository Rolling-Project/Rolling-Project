import { useMutation, useQueryClient } from '@tanstack/react-query';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const postReaction = async ({ id, emoji, type }) => {
  const response = await fetch(`${baseUrl}recipients/${id}/reactions/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      emoji: emoji,
      type: type
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
