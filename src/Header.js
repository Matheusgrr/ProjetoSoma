import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./Estilo.css";

function header() {
  return (
    <Navbar className="adjustHeaderFooter">
      <h1 className="tittle">SomaOrtopédia</h1>
    </Navbar>
  );
}

export default header;
