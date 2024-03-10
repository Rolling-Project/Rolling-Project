import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import * as S from './TextViewer.styled';

function TextViewer({ message, font }) {
  return (
    <S.Message font={font}>
      <Viewer initialValue={message || ''} />
    </S.Message>
  );
}

export default TextViewer;
