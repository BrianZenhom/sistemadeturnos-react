import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { VerTurno } from './pages/Verturno/VerTurno';
import { SolicitarTurno } from './pages/Solicitarturno/SolicitarTurno';
import Profesionales from './pages/Profesionales/Profesionales';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="verturno" element={<VerTurno />} />

      <Route path="solicitarturno" element={<SolicitarTurno />} />

      <Route path="profesionales" element={<Profesionales />} />
    </Routes>
  );
}
