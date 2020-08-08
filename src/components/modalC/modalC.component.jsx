import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { close } from "./modalC.actions";
import "./modalC.css";

export default function ModalC() {
  const { show, contact } = useSelector((s) => s.modalC);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(close());
  };
  return (
    <Modal
      centered
      className="modal-c"
      show={show}
      onHide={onClose}
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        id:<b>{contact.id}</b>
      </Modal.Body>
      <Modal.Body>
        first name:<b>{contact.first_name}</b>
      </Modal.Body>
    </Modal>
  );
}
