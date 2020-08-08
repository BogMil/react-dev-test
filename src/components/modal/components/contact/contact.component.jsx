import React, { Component } from "react";
import "./contact.css";
import { useDispatch } from "react-redux";
import { open as openModalC } from "../../../modalC/modalC.actions";

export default function ContactComponent(props) {
  const dispatch = useDispatch();
  const onOpenModalC = () => {
    dispatch(openModalC(props.contact));
  };

  return (
    <div key={props.contact.id} className="contact" onClick={onOpenModalC}>
      {props.contact.id}-{props.contact.first_name}-{props.contact.last_name}
    </div>
  );
}
