import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const postMessage = async ({ recipientId, data }) => {
  const response = await fetch(`${BASE_URL}recipients/${recipientId}/messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  return result;
};

const useSendMessage = () => {
  const navigate = useNavigate();
  return useMutation(postMessage, {
    onSuccess: () => {
      navigate(-1);
    }
  });
};

export default useSendMessage;
