import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./estiloHeader.css";

function header() {
  return (
    <Navbar className="adjustHeader">
      <NavbarBrand className="tittleHeader">SomaOrtopedia</NavbarBrand>
    </Navbar>
  );
}

export default header;
