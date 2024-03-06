/**
 * 데이터를 fetch하는 로직을 처리합니다.
 */
const useFetch = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export default useFetch;
