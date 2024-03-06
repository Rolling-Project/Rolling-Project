const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_PATH = {
  CARD_COUNT: `${BASE_URL}recipients/?limit=1`,
  ALL_CARD: `${BASE_URL}recipients/?limit=`,
  TWENTY_CARD: `${BASE_URL}recipients/?limit=20`
};

export default API_PATH;
