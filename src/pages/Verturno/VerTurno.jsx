import React from 'react';
import { Navbar } from '../Home/navbar';
import { Footer } from '../Home/Footer';

import './verturno.css';

export function VerTurno() {
  return (
    <>
      <Navbar />
      <section className="container ver-turnos">
        <h1 className="ver-turnos-content">Ver Turno</h1>
      </section>
      <Footer />
    </>
  );
}
