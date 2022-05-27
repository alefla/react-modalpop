import React from "react";
import ReactDOM from "react-dom";

const MODAL = {
  fontSize: "2rem",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "lightBlue",
  padding: "60px",
  zIndex: "1000",
};
const MODAL_OVERLAY = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: "1000",
};
const BUTTON = {
  fontSize: "1.4rem",
  margin: "3rem",
};

const Modal = ({ open, children, closeModal }) => {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <div style={MODAL_OVERLAY}>
      <div style={MODAL}>
        {children}

        <button onClick={closeModal} style={BUTTON}>
          close modal
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
