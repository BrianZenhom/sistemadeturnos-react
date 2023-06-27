import React from 'react';
import { Navbar } from '../Home/navbar';
import { Footer } from '../Home/Footer';

import './verturno.css';
import { TrashIcon } from '../../assets/TrashIcon';
import { EditIcon } from '../../assets/EditIcon';

export function VerTurno() {
  return (
    <>
      <Navbar />
      <div className="bgVerTurno">
        <section className="container ver-turnos">
          <article className="verturnosFull">
            <div className="firstVerTurno">
              <div className="titleVerTurnos">
                <p>Buscar:</p>
              </div>
              <div className="buscadorVerTurnos">
                <form id="buscarTurno">
                  <input
                    type="search"
                    id="buscarApellido"
                    placeholder="Apellido..."
                  />
                  <button id="btnBuscar">
                    <img
                      src="https://api.iconify.design/bi/search.svg"
                      alt=""
                    />
                  </button>
                </form>
              </div>
            </div>
            <div className="secondVerTurno">
              <div className="table">
                <table className="tableHeader">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Horario</th>
                      <th>Ver datos</th>
                      <th>Editar</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody className="tableRows" id="turnos">
                    <tr>
                      <td>Albert Fernandez PUTO</td>
                      <td>6:35</td>
                      <td>ver más</td>
                      <td>
                        <EditIcon />
                      </td>
                      <td className="basuraIcon">
                        <TrashIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>Ezequiel Berlanda</td>
                      <td>12:30</td>
                      <td>ver más</td>
                      <td>
                        <EditIcon />
                      </td>
                      <td className="basuraIcon">
                        <TrashIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>Brian Zenhom</td>
                      <td>2:30</td>
                      <td>ver más</td>
                      <td>
                        <EditIcon />
                      </td>
                      <td className="basuraIcon">
                        <TrashIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>Mason Zenhom</td>
                      <td>7:30</td>
                      <td>ver más</td>
                      <td>
                        <EditIcon />
                      </td>
                      <td className="basuraIcon">
                        <TrashIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>Juan Londoño</td>
                      <td>9:40</td>
                      <td>ver más</td>
                      <td>
                        <EditIcon />
                      </td>
                      <td className="basuraIcon">
                        <TrashIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>Ariel Alvarez</td>
                      <td>3:30</td>
                      <td>ver más</td>
                      <td>
                        <EditIcon />
                      </td>
                      <td className="basuraIcon">
                        <TrashIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>Lionel Messi</td>
                      <td>7:50</td>
                      <td>ver más</td>
                      <td>
                        <EditIcon />
                      </td>
                      <td className="basuraIcon">
                        <TrashIcon />
                      </td>
                    </tr>
                    <tr>
                      <td>Lebron James</td>
                      <td>4:40</td>
                      <td>ver más</td>
                      <td>
                        <EditIcon />
                      </td>
                      <td className="basuraIcon">
                        <TrashIcon />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        </section>
      </div>
      <Footer className="footerInVer" />
    </>
  );
}
