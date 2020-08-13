import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header />
      <Container></Container>
    </Router>
  );
}

export default App;
