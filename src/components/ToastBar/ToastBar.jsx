import * as S from './ToastBar.styled';

function ToastBar({ children }) {
  return <S.Toast>{children}</S.Toast>;
}

export default ToastBar;
