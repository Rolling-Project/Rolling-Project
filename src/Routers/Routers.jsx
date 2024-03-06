/* eslint-disable jsx-quotes */
import { Routes, Route } from 'react-router-dom';
import CreateTo from '../components/Create/CreateTo';

function Routers() {
  return (
    <Routes>
      {/* <Route path='/post' element={<CreateTo />} /> */}
      <Route path='/' element={<CreateTo />} />
    </Routes>
  );
}
export default Routers;
