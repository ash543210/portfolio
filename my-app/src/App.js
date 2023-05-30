import NavBar from "./components/UI/NavBar";
import DetailForm from "./components/DetailForm";
import "./App.css";
import React from "react";
import Container from "react-bootstrap/esm/Container";

function App() {
  const detailHandler = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <DetailForm submitDetail={detailHandler} />
      </Container>
    </React.Fragment>
  );
}

export default App;
