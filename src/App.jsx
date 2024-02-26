import { Global } from "@emotion/react";
import reset from "./styles/reset";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <>
      <Global styles={reset} />
      <ListPage />
    </>
  );
}

export default App;
