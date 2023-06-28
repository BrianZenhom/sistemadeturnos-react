import React from 'react';

export function InputPaciente({ text, name, type, id }) {
  return (
    <div className={`${name}Paciente`}>
      <p>{text}</p>
      <div className="field">
        <input type={type} name={name} required={true} id={id} />
      </div>
    </div>
  );
}
