import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./Estilo.css";

function header() {
  return (
    <Navbar className="adjustHeader">
      <h1>SomaOrtopédia</h1>
    </Navbar>
  );
}

export default header;
