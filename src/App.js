import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Header />
      <Container fluid={true}>
        <Home />
      </Container>
    </Router>
  );
}

export default App;
