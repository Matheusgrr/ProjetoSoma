import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import "./Estilo.css";

function header() {
  return (
    <Navbar className="adjustHeaderFooter" tag={Link} to="/">
      <h1 className="tittle">SomaOrtopédia</h1>
    </Navbar>
  );
}

export default header;
