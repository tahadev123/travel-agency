"use client";
import { useState, createContext } from "react";

const ModalProvider = createContext({
  isShowModal: false,
  setIsShowModal: () => {},
});

function ShowModalContext({ children }) {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <ModalProvider.Provider value={{ isShowModal, setIsShowModal }}>
      {children}
    </ModalProvider.Provider>
  );
}

export default ModalProvider
export { ShowModalContext }