import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalFooter from "../modalFooter.component";
import { useHistory } from "react-router-dom";

export default function ModalBComponent(props) {
  const history = useHistory();

  const _close = () => {
    history.push("/");
  };

  return (
    <Modal show={true}>
      <Modal.Header onHide={_close}>
        <Modal.Title>Modal B</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer style={{ justifyContent: "flex-start" }}>
        <ModalFooter onClose={_close} />
      </Modal.Footer>
    </Modal>
  );
}
