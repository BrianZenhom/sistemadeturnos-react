import { useState, useEffect } from 'react';

import './footer.css';

export function Footer() {
  // Time Function
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date(), 1000));
  }, []);

  // const date = new Date();
  // const day = date.getDate();
  // const month = date.getMonth() + 1;
  // const year = date.getFullYear();
  // const hour = date.getHours();
  // const min = date.getMinutes();

  const now = new Date();

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  };

  const fechaHora = new Intl.DateTimeFormat('es-AR', options).format(now);

  return (
    <>
      <div className="lineaDivisor"></div>
      <footer className="footerBg">
        <div className="container contentFooter">
          <div className="horariosAtencion">
            <p>
              <b>
                HORARIOS DE ATENCION <br />
                LUNES - VIERNES:{' '}
              </b>
              8hs - 12hs & 16hs - 20hs <br />
              <b>SABADOS:</b> 9hs - 12hs
            </p>
          </div>
          <div className="turnoHora">
            <div className="turnosHome">
              <p>
                <b>TURNOS ACTUALES DEL DIA:</b> 1
              </p>
            </div>
            <div className="fechaHome">
              <p id="fechaDeHoy">{fechaHora}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
