import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const ClientModal = (props) => {
  const { enable, closeFnc, saveFnc } = props;
  return (
    <>
      <Modal show={enable} onHide={closeFnc}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeFnc}>
            Close
          </Button>
          <Button variant="primary" onClick={saveFnc}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ClientModal;
