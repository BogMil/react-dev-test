import React, { Component, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalFooter from "../modalFooter.component";
import { useHistory } from "react-router-dom";
import { getContacts } from "../modal.service";

export default function ModalAComponent(props) {
  const history = useHistory();

  useEffect(() => {
    async function fetchContacts() {
      console.log(await getContacts());
    }
    fetchContacts();
  });
  //www.upwork.com/ab/jobs/search/details/~01d91772ca2c9ad635/?q=reactjs&sort=recency
  https: const _close = () => {
    history.push("/");
  };
  return (
    <Modal show={true}>
      <Modal.Header onHide={_close}>
        <Modal.Title>Modal A</Modal.Title>
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
