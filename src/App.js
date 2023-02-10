import List from './components/List/List';

import './App.css';
import { useState } from 'react';
import { Modal } from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addItemList, remove } from './components/List/listSlice';
import { ModalAgree } from './components/ModalAgree';

function App() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.data);

  const [isModal, setIsModal] = useState(false);
  const [isModalAgree, setIsModalAgree] = useState(false);
  const [isRemoveItems, setIsRemoveItems] = useState([]);

  const addList = (item) => {
    dispatch(addItemList({ id: Math.random(), text: item }));
  };

  const removeItems = () => {
    dispatch(remove(isRemoveItems));
  };

  const isOpenModal = () => {
    setIsModal((item) => !item);
  };

  const isOpenModalAgree = () => {
    setIsModalAgree((item) => !item);
  };

  return (
    <div className="App">
      <List
        removeStore={removeItems}
        isRemoveItems={isRemoveItems}
        setIsRemoveItems={setIsRemoveItems}
        list={list}
      />

      <div className="groupButton">
        <button onClick={isOpenModal}>Добавить</button>
        <button onClick={isOpenModalAgree}>Удалить</button>
      </div>
      {isModal && <Modal closeModal={isOpenModal} addList={addList} />}
      {isModalAgree && (
        <ModalAgree
          closeModal={isOpenModalAgree}
          isRemoveItems={isRemoveItems}
          isAgree={removeItems}
          list={list}
        />
      )}
    </div>
  );
}

export default App;
