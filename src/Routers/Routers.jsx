import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AllListPage from '../pages/AllListPage/AllListPage';
import ListPage from '../pages/ListPage/ListPage';
import RollingPaper from '../pages/RollingPaper';
import Header from '../components/common/Header/Header';

function Routers() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/list/all" element={<AllListPage />} />
        <Route path="/post/:id" element={<RollingPaper />} />
        <Route path="/post/:id/edit" element={<RollingPaper />} />
      </Routes>
    </Router>
  );
}
export default Routers;
