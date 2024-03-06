import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ListPage from '../pages/ListPage/ListPage';
import RollingPaper from '../pages/RollingPaper';

function Routers() {
  return (
    <Routes>
      <Route path='/list' element={<ListPage />} />
      <Route path='/post/:id' element={<RollingPaper />} />
    </Routes>
  );
}
export default Routers;
