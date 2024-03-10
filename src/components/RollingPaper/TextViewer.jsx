import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import styled from '@emotion/styled';

const Message = styled.div`
  .toastui-editor-contents {
    font-size: 1.125rem;
    font-family: ${({ font }) => font};
  }
`;

function TextViewer({ message, font }) {
  return (
    <Message font={font}>
      <Viewer initialValue={message || ''} />
    </Message>
  );
}

export default TextViewer;
