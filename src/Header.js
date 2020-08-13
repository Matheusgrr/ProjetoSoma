import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./estiloHeader.css";

function header() {
  return (
    <Navbar className="adjustHeader">
      <h1 className="tittle">SomaOrtopedia</h1>
    </Navbar>
  );
}

export default header;
