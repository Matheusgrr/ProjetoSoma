import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Gallery from "./Gallery";
import "./Estilo.css";

function App() {
  return (
    <Router>
      <Header />
      <Container fluid={true} className="colorPage">
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
