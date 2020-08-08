import React from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../style.css";
import routes from "../../routes";

export default function MainScreen() {
  const history = useHistory();

  const openModalA = () => {
    history.push(routes.modala);
  };

  const openModalB = () => {
    history.push(routes.modalb);
  };
  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        className="a-btn"
        style={{ marginRight: 10 }}
        onClick={openModalA}
      >
        Button A
      </Button>
      <Button className="b-btn" style={{ marginLeft: 10 }} onClick={openModalB}>
        Button B
      </Button>
    </Container>
  );
}
