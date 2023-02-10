import React from 'react';

import '../Modal/modal.css';

export const ModalAgree = ({ closeModal, isRemoveItems, isAgree, list }) => {
  const agree = () => {
    closeModal();
    isAgree();
    console.log();
  };

  const notAgree = () => {
    closeModal();
  };

  const removeList = list.filter((item) => isRemoveItems.includes(item.id));

  return (
    <div className="rootModal">
      <div className="closeModal" onClick={closeModal}>
        X
      </div>
      <h2>Вы действительно хотите удалить?</h2>
      {removeList?.map((item) => {
        return <div key={item.id}>{item.text}</div>;
      })}
      <button onClick={agree}>Да</button>
      <button onClick={notAgree}>Нет</button>
    </div>
  );
};
