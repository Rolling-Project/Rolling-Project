import { Global } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reset from "./styles/reset";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <BrowserRouter>
      <Global styles={reset} />
      <Routes>
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
