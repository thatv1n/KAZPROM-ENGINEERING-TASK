import React, { useState } from 'react';

import './modal.css';

export const Modal = ({ closeModal, addList }) => {
  const [value, setValue] = useState('');

  const agree = () => {
    addList(value);
    setValue('');
  };

  return (
    <div className="rootModal">
      <div className="closeModal" onClick={closeModal}>
        X
      </div>
      <h2>Добавить?</h2>
      <input
        type="text"
        value={value}
        className="inputModal"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={agree}>Ок</button>
      <button onClick={closeModal}>отмена</button>
    </div>
  );
};
