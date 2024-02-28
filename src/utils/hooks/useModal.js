import { useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const openModal = (item) => {
    setIsModalOpen(true);
    setClickedItem(item);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setClickedItem(null);
  };

  return { isModalOpen, clickedItem, openModal, closeModal };
};

export default useModal;