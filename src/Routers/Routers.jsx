import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ListPage from "../pages/ListPage/ListPage";
import RollingPaper from "../pages/RollingPaper";

const Routers = () => (
  <Router>
    <Routes>
      <Route path="/list" element={<ListPage />} />
      <Route path="/post/:id" element={<RollingPaper />} />
    </Routes>
  </Router>
);
export default Routers;
