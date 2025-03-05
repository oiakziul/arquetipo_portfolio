import { Routes, Route, Navigate } from 'react-router-dom';
import { DashBoard } from '../pages/DashBoard';
import { Curriculo } from '../pages/Curriculo';

export const AppRoutes = () => {
  const BASE_URL = '/arquetipo_portfolio';
  return (
    <Routes>
      <Route path={`${BASE_URL}`} element={<DashBoard />}>
        <Route path='Curriculo' element={<Curriculo />} />
      </Route>
      <Route path='/' element={<Navigate to={`${BASE_URL}`} />} />
      <Route path='*' element={<Navigate to={`${BASE_URL}`} />} />
    </Routes>
  );
}