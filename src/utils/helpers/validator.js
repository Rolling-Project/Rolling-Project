export const isValidUrl = (str) => {
  const regex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;
  return regex.test(str);
};

/**
 * 로그인 기능이 없지만 해당 path에 들어가면 로그인 된 상태라고 가정
 */
export const isLogin = (path) => {
  const regex = /post\/\d+\/edit/;
  return regex.test(path);
};
