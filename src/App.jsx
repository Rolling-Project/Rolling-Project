import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import reset from './styles/reset';
import colors from './styles/colors';

// color variant 사용 예시
const Button = styled.button`
  background-color: ${colors['Blue-100']};
  color: ${colors.Black};
`;

function App() {
  return (
    <div>
      <Global styles={reset} />
      <Button>This is a hotpink button.</Button>
    </div>
  );
}

export default App;
