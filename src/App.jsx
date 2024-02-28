import { Global } from "@emotion/react";
import Routers from "./Routers/Routers";
import reset from "./styles/reset";

const App = () => (
  <>
    <Global styles={reset} />
    <Routers />
  </>
);

export default App;
