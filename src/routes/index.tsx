import { Routes, Route, Navigate } from 'react-router-dom';
import { DashBoard } from '../pages/DashBoard';
import { Curriculo } from '../pages/Curriculo';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/DashBoard" element={<DashBoard />}>
        <Route path="Curriculo" element={<Curriculo />} /> {/* Rota filha */}
      </Route>
      <Route path="/" element={<Navigate to="/DashBoard" />} /> {/* Redireciona a raiz para /DashBoard */}
      <Route path="*" element={<Navigate to="/DashBoard" />} /> {/* Redireciona rotas inexistentes para /DashBoard */}
    </Routes>
  );
}