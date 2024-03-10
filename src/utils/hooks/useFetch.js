/**
 * 데이터를 fetch하는 로직을 처리합니다.
 */
const useFetch = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export default useFetch;
