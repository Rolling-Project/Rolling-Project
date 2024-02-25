import reset from './styles/reset';
import { Global } from '@emotion/react';
import ListPage from './pages/ListPage/ListPage';

function App() {
  return (
    <>
      <Global styles={reset} />
      <ListPage/>
    </>
  );
}

export default App;
