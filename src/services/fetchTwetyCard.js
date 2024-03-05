import API_PATH from './api-path';

const fetchTwentyCard = async (option = '') => {
  const popularResponse = await fetch(`${API_PATH.TWENTY_CARD}${option}`);
  const popularResult = await popularResponse.json();
  const latestResponse = await fetch(`${API_PATH.TWENTY_CARD}`);
  const latestResult = await latestResponse.json();

  return [latestResult.count, latestResult.results, popularResult.results];
};

export default fetchTwentyCard;
