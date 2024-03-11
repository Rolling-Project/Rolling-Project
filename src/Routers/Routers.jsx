import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AllListPage from '../pages/AllListPage/AllListPage';
import ListPage from '../pages/ListPage/ListPage';
import RollingPaper from '../pages/RollingPaperPage/RollingPaperPage';
import Header from '../components/common/Header/Header';
import MainPage from '../pages/MainPage/MainPage';
import MessageAddPage from '../pages/MessageAddPage/MessageAddPage';
import CreateTo from '../pages/CreateToPage/CreateToPage';

function Routers() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/list/all" element={<AllListPage />} />
        <Route path="/post/:id" element={<RollingPaper />} />
        <Route path="/post/:id/edit" element={<RollingPaper />} />
        <Route path="/post" element={<CreateTo />} />
        <Route index element={<MainPage />} />
        <Route path="/post/:id/message" element={<MessageAddPage />} />
      </Routes>
    </Router>
  );
}
export default Routers;
