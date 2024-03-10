import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AllListPage from '../pages/AllListPage/AllListPage';
import ListPage from '../pages/ListPage/ListPage';
import RollingPaper from '../pages/RollingPaper';
import CreateTo from '../components/create/CreateTo';
import MainPage from '../pages/MainPage/MainPage';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/list/all" element={<AllListPage />} />
        <Route path="/post/:id" element={<RollingPaper />} />
        <Route path="/post/:id/edit" element={<RollingPaper />} />
        <Route path="/post" element={<CreateTo />} />
        <Route index element={<MainPage />} />
      </Routes>
    </Router>
  );
}
export default Routers;
