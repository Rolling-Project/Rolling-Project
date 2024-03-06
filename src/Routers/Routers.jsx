/* eslint-disable jsx-quotes */
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import CreateTo from '../components/create/CreateTo';
import ListPage from '../pages/ListPage/ListPage';
import RollingPaper from '../pages/RollingPaper';

function Routers() {
  return (
    <Routes>
      <Route path='/list' element={<ListPage />} />
      <Route path='/post/:id' element={<RollingPaper />} />
      <Route path='/post' element={<CreateTo />} />
    </Routes>
  );
}
export default Routers;
