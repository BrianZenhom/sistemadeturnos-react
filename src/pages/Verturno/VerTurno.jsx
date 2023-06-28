import React, { useState } from 'react';
import { Navbar } from '../Home/navbar';
import { Footer } from '../Home/Footer';

import './verturno.css';
import { TrashIcon } from '../../assets/TrashIcon';
import { EditIcon } from '../../assets/EditIcon';

// let localItems = ;
// console.log(ObjetoPacientes);

// let datos = document.getElementById('turnos');

// const turnoss = document.getElementById('turnos');

// if (ObjetoPacientes) {
//   ObjetoPacientes.forEach(item => {
//     datos = document.createElement('tr');
//     [
//       (datos.innerHTML = `
//     <td>${item.nombre}</td>
//     <td>${item.horario}</td>
//     <td>ver más</td>
//     <td className="editarIcon">
//       <EditIcon />
//     </td>
//     <td className="basuraIcon">
//       <TrashIcon />
//     </td>
//     `),
//     ];
//   });
// } else {
//   datos = document.createElement('tr');
//   const html = (datos.innerHTML = `
//     <td> No hay turnos agendados </td>
//     `);
//   turnoss.insertAdjacentHTML('afterbegin', html);
// }

export function VerTurno() {
  let [ObjetoPacientes, setObjetoPacientes] = useState(
    JSON.parse(localStorage.getItem(`turnos`))
  );
  const remove = item => {
    console.log(item);
    let filteredArr = ObjetoPacientes.filter(el => el.nombre !== item.nombre);
    setObjetoPacientes(filteredArr);
  };

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
                    {ObjetoPacientes ? (
                      ObjetoPacientes.map(item => {
                        return (
                          <tr key={item.apellido}>
                            <td>
                              {item.nombre} {item.apellido}
                            </td>
                            <td>{item.horario}</td>
                            <td>ver más</td>
                            <td className="editarIcon">
                              <EditIcon />
                            </td>
                            <td
                              onClick={() => remove(item)}
                              className="basuraIcon"
                            >
                              <TrashIcon />
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <td className="noHayNada"> no hay turnos agendados </td>
                    )}
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
