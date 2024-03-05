import API_PATH from './api-path';

const fetchCard = async (dataCount, option = '') => {
  const response = await fetch(`${API_PATH.ALL_CARD}${dataCount}${option}`);
  const result = await response.json();
  return result.results;
};

export default fetchCard;
