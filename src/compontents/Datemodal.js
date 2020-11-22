import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Kalendari from "./Kalendari";

function Datemodal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="black" onClick={handleShow}>
        <i
          class="fas fa-calendar-alt  text-white"
          style={{ fontSize: "1.5rem" }}
        ></i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Kalendari />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Datemodal;
