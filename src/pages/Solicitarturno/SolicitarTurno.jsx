import React, { useState } from 'react';
import { Navbar } from '../Home/navbar';
import { Footer } from '../Home/Footer';

import './solicitarturno.css';
import { InputPaciente } from './inputPaciente';

export function SolicitarTurno() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonOpenSelect = isOpen ? 'menu menu-open' : 'menu';
  const caretOpened = isOpen ? 'caret-rotate' : 'caret';

  const openHandler = () => {
    setIsOpen(!isOpen);
  };
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
                    text="Profesional:"
                  />
                  <InputPaciente
                    name="abonado"
                    type="text"
                    id="abonadoForm"
                    text="Fecha y horario:"
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
                      <div className="dropdown" onClick={openHandler}>
                        <div className="select">
                          <span className="selected" id="metpagoForm">
                            Tarjeta debito
                          </span>
                          <div className={caretOpened}></div>
                        </div>
                        <ul className={buttonOpenSelect}>
                          <li>Transferencia</li>
                          <li>Tarjeta credito</li>
                          <li>Tarjeta debito</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* <!-- BUTTONS --> */}
            <div className="botonesFormulario">
              <div className="botonGuardar">
                <button type="button">
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
        </section>
      </div>
      <Footer />
    </>
  );
}
