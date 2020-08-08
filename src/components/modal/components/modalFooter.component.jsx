import React, { Component, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetModalState, init, reloadModal } from "../modal.actions";
import routes from "../../../routes";

export default function ModalFooter(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  let location = useLocation();

  const goToModal = (path) => {
    if (location.pathname == path) {
      dispatch(reloadModal());
    } else {
      history.push(path);
      dispatch(resetModalState());
    }
  };

  return (
    <>
      <Button className="a-btn" onClick={() => goToModal(routes.modala)}>
        All Contacts
      </Button>
      <Button className="b-btn" onClick={() => goToModal(routes.modalb)}>
        US Contacts
      </Button>
      <Button onClick={props.onClose}>Close</Button>
      <Form.Check
        type="checkbox"
        label="Only even"
        id="check"
        checked={props.showEven}
        onChange={props.checkShowEven}
      />
    </>
  );
}
