import React from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function MainScreen() {
  const history = useHistory();

  const openModalA = () => {
    history.push("/modala");
  };

  const openModalB = () => {
    history.push("/modalb");
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
      <Button style={{ marginRight: 10 }} onClick={openModalA}>
        Button A
      </Button>
      <Button style={{ marginLeft: 10 }} onClick={openModalB}>
        Button B
      </Button>
    </Container>
  );
}
