import React, { useState } from 'react';
import { Navbar } from '../Home/navbar';
import { Footer } from '../Home/Footer';

import './solicitarturno.css';
import { InputPaciente } from './inputPaciente';
import { DropdownPayment } from '../../assets/DropdownPayment';

// funcion para mostrar los objetos almacenados en el localStorage
function obtTurnosGuardados() {
  const turnosGuardados = localStorage.getItem('turnos');
  if (turnosGuardados) {
    return JSON.parse(turnosGuardados);
  } else {
    return [];
  }
}

// Función para guardar los turnos en el localStorage
function guardarTurnos(turnos) {
  localStorage.setItem('turnos', JSON.stringify(turnos));
}

const pushToLocal = function (e) {
  e.preventDefault();

  // Obtener los valores del formulario
  const $ = selector => document.querySelector(selector);
  const nombre = $('#nombreForm').value;
  const apellido = $('#apellidoForm').value;
  const documento = $('#documentoForm').value;
  const horario = $('#horarioForm').value;

  const turno = {
    nombre: nombre,
    apellido: apellido,
    documento: documento,
    horario: horario,
  };

  // Obtener los turnos almacenados en el localStorage
  const turnosGuardados = obtTurnosGuardados();

  // Agregar el nuevo turno a la lista
  turnosGuardados.push(turno);

  // Guardar los turnos actualizados en el localStorage
  guardarTurnos(turnosGuardados);
};

export function SolicitarTurno() {
  const [selected, setSelected] = useState('');
  return (
    <>
      <Navbar />
      <div className="bg-solturno">
        <section className="container solicitarTurno">
          <div className="datosPaciente">
            <form id="formulario">
              {/* <!-- DATOS --> */}

              <div className="datosFormulario">
                <div className="tituloDatosPaciente">
                  <h2>Datos:</h2>
                </div>
                <div className="todosLosInputsPaciente">
                  <InputPaciente
                    name="nombre"
                    text="Nombre:"
                    id="nombreForm"
                    type="text"
                  />
                  <InputPaciente
                    name="apellido"
                    text="Apellido:"
                    id="apellidoForm"
                    type="text"
                  />
                  <InputPaciente
                    name="documento"
                    text="Documento:"
                    id="documentoForm"
                    type="number"
                  />
                  <InputPaciente
                    name="email"
                    type="email"
                    id="emailForm"
                    text="Email:"
                  />
                  <InputPaciente
                    name="direccion"
                    type="text"
                    id="direccionForm"
                    text="Direccion:"
                  />
                  <InputPaciente
                    name="numero"
                    type="number"
                    id="telefonoForm"
                    text="Telefono:"
                  />
                  <InputPaciente
                    name="nacimiento"
                    type="date"
                    id="nacimientoForm"
                    text="Nacimiento:"
                  />
                  <InputPaciente
                    name="obrasocial"
                    type="text"
                    id="obrasocialForm"
                    text="Obrasocial o particular:"
                  />
                </div>
              </div>

              <div className="vl"></div>
              {/* <!-- TURNO --> */}

              <div className="turnoFormulario">
                <div className="tituloTurnoPaciente">
                  <h2>Turno:</h2>
                </div>
                <div className="todosLosInputsTurno">
                  <InputPaciente
                    name="servicio"
                    type="text"
                    id="servicioForm"
                    text="Servicio:"
                  />
                  <InputPaciente
                    name="horario"
                    type="text"
                    id="horarioForm"
                    text="Hora:"
                  />
                  <InputPaciente
                    name="abonado"
                    type="text"
                    id="abonadoForm"
                    text="Profesional:"
                  />

                  <div className="metpagoPaciente">
                    <p>Metodo de pago:</p>
                    <div className="field">
                      {/* <!-- <input
                      type="text"
                      name="metpago"
                      required
                      id="metpagoForm"
                    /> --> */}
                      <DropdownPayment
                        selected={selected}
                        setSelected={setSelected}
                      />
                    </div>
                  </div>
                </div>
                {/* <!-- BUTTONS --> */}
                <div className="botonesFormulario">
                  <div className="botonGuardar">
                    <button onClick={pushToLocal} type="submit">
                      <span className="button_top" id="btnGuardar">
                        {' '}
                        Guardar{' '}
                      </span>
                    </button>
                  </div>
                  <div className="botonEliminar">
                    <button type="reset">
                      <span className="button_top"> Eliminar </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
