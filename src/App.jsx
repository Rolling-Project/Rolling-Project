import { Global } from '@emotion/react';
import reset from './styles/reset';
import createCard from './components/create/createCard';

const App = () => (
  <>
    <Global styles={reset} />
    <createCard />
  </>
);

export default App;
