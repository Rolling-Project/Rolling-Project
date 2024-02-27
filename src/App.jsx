import { Global } from '@emotion/react';
import reset from './styles/reset';
import createCard from './components/create/createCard';

function App() {
  return (
    <>
      <Global styles={reset} />
      <createCard />
    </>
  );
}

export default App;
