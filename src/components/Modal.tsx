import styled, { keyframes } from "styled-components";
import { useEffect } from "react";

const Modal = ({ show, onClose, title, children }) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener("keydown", close);

    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [onClose]);

  if (!show) {
    return null;
  }

  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <CloseBtn className="close-btn" onClick={onClose}>
            ×
          </CloseBtn>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

const fadeInDown = keyframes`
0% {
  opacity: 0;
  -webkit-transform: translate3d(0,-100%,0);
  transform: translate3d(0,-100%,0);
}

100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
}
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: fit-content;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation: ${fadeInDown} 300ms;
`;

const CloseBtn = styled.button`
  color: white;
  float: right;
  font-size: 36px;
  font-weight: bold;
`;

const ModalHeader = styled.div`
  padding: 8px 16px;
  background-color: #ffd400;
  color: white;

  > h2 {
    font-size: 2rem;
    display: inline-block;
  }
`;

const ModalBody = styled.div`
  padding: 8px 16px;
`;

export { Modal };
