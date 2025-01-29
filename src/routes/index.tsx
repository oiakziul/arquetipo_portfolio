import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/home'
import { Home2 } from '../pages/home2';

export const AppRoutes = () => {
  return (

    <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='/Home2' element={<Home2 />} />
      <Route path="*" element={<Navigate to="/Home" />} />
    </Routes>

  );
}