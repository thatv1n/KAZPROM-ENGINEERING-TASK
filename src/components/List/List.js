import React from 'react';

import './list.css';

function List({ isRemoveItems, setIsRemoveItems, list }) {
  const addRemoveItems = (id) => {
    !isRemoveItems.includes(id) && setIsRemoveItems((item) => [...item, id]);
    isRemoveItems.includes(id) && setIsRemoveItems(isRemoveItems.filter((item) => item.id !== id));
  };

  return (
    <div className="rootList">
      {list.map((item) => {
        return (
          <label key={item.id} className="itemList" onClick={() => addRemoveItems(item.id)}>
            <input type="checkbox" /> <span>{item.text}</span>
          </label>
        );
      })}
      <button>Тест GraphQL</button>
    </div>
  );
}

export default List;
