import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate, useParams } from 'react-router-dom';

function useAuth() {
  const navigate = useNavigate();
  const { id } = useParams();

  function navigateToPostID() {
    navigate(`/post/${id}`);
  }
}

export default useAuth;
