import React, { Component } from "react";

export default function contactComponent(props) {
  return (
    <div key={props.contact.id}>
      {props.contact.id}-{props.contact.first_name}-{props.contact.last_name}
    </div>
  );
}
