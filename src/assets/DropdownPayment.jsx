import React, { useState } from 'react';

export function DropdownPayment({ selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const buttonOpenSelect = isOpen ? 'menu menu-open' : 'menu';
  const caretOpened = isOpen ? 'caret caret-rotate' : 'caret';

  const options = ['Tarjeta Credito', 'Tarjeta Debito', 'Transferencia'];

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" onClick={openHandler}>
      <div className="select" onClick={e => setIsActive(!isActive)}>
        <span className="selected" id="metpagoForm">
          {selected}
        </span>
        <div className={caretOpened}></div>
      </div>
      {isActive && (
        <ul className={buttonOpenSelect}>
          {options.map(option => (
            <li
              onClick={e => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
