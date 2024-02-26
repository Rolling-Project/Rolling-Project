import { Global } from '@emotion/react';
import Routers from './Routers/Routers';
import reset from './styles/reset';

const App = () => (
  <div>
    <Global styles={reset} />
    <Routers />
  </div>
);

export default App;
