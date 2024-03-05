import API_PATH from './api-path';

const fetchFirstCard = async (option = '') => {
  const response = await fetch(API_PATH.CARD_COUNT);
  const result = await response.json();
  const dataResponse = await fetch(`${API_PATH.ALL_CARD}${result.count}${option}`);
  const dataResult = await dataResponse.json();
  return dataResult.results;
};

export default fetchFirstCard;
