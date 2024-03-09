import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ListPage from '../pages/ListPage/ListPage';
import RollingPaper from '../pages/RollingPaper';
import MainPage from '../pages/MainPage/MainPage';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/post/:id" element={<RollingPaper />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
export default Routers;
