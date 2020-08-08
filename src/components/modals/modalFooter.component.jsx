import React, { Component, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function ModalFooter(props) {
  const [checked, setChecked] = useState(false);
  const check = () => {
    console.log("check");
    setChecked(!checked);
  };
  return (
    <>
      <Button>All Contacts</Button>
      <Button>US Contacts</Button>
      <Button onClick={props.onClose}>Close</Button>
      <Form.Check
        type="checkbox"
        label="Only even"
        id="check"
        checked={checked}
        onChange={check}
      />
    </>
  );
}
