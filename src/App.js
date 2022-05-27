import React, { useState } from "react";
import Modal from "./Modal";

const MAIN_CONTAINER = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "3rem",
  fontSize: "2rem",
};
const CONTENT = {
  height: "20vh",
  backgroundColor: "orange",
  width: "80vw",
  textAlign: "center",
  paddingTop: "3rem",
  marginLeft: "10vh",
  fontSize: "2rem",
};
const BUTTON = {
  fontSize: "1.6rem",
  background: "darkcyan",
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={MAIN_CONTAINER}>
        <button onClick={() => setIsOpen(true)} style={BUTTON}>
          open modal
        </button>
        <Modal open={isOpen} closeModal={() => setIsOpen(false)}>
          This is Modal
        </Modal>
      </div>
      <div style={CONTENT}>This is other content</div>
    </>
  );
};

export default App;
