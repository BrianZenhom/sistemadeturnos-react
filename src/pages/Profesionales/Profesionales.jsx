import React from 'react';
import { Navbar } from '../Home/navbar';
import { Footer } from '../Home/Footer';

import './profesionales.css';

function Profesionales() {
  return (
    <>
      <Navbar />
      <section className="bg-profesionales">
        <div className="container profesionales">
          <h1>PROFESIONALES</h1>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profesionales;
