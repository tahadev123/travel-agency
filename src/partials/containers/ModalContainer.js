"use client"
import styled from "styled-components";

const Div = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  backdrop-filter: blur(4px);

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    min-width: 2.5rem;
    min-height: 2.5rem;
  }
`;

function ModalContainer({ children, isShowModal, setIsShowModal }) {
  if (!isShowModal) return;

  return (
    <Div>
      <div className="container">
        <div className="modal">{children}</div>
      </div>
    </Div>
  );
}

export default ModalContainer;
