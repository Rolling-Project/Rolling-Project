import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import RollingPaper from '../pages/RollingPaper';

const Routers = () => (
  <Router>
    <Routes>
      <Route path="/post/:id" element={<RollingPaper />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  </Router>
);
export default Routers;
