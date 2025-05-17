import { Routes, Route} from 'react-router-dom';

import { Curriculo} from '../pages/Curriculo';
import { Home } from '../pages/Home';
import { ProjetosFaculdade } from '../pages/ProjetosFaculdade';
import {Temporario} from '../pages/Temporario'
import {Inicio} from '../pages/Inicio';
import { GradeCurricular } from '../pages/GradeCurricular';
import { Pwa } from '../pages/Pwa';

export const AppRoutes = () => {
  const BASE_URL = '/arquetipo_portfolio/';
  return (
    <Routes>
      <Route path={`${BASE_URL}`} element={<Home />}>
        <Route index element={<Inicio />} /> 
        <Route path='Curriculo' element={<Curriculo />} />
        <Route path='ProjetosFaculdade' element={<ProjetosFaculdade />} />
        <Route path='Temporario' element={<Temporario />} />
        <Route path='GradeCurricular' element={<GradeCurricular />} />
        <Route path='PWA' element={<Pwa />} />
      </Route>
    </Routes>
  );
}