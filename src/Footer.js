import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./Estilo.css";

function footer() {
  return (
    <Navbar className="adjustHeaderFooter">
      <NavbarBrand className="linkFooter" href="/">
        Empresa
      </NavbarBrand>
      <NavbarBrand className="linkFooter">Informações</NavbarBrand>
      <NavbarBrand className="linkFooter">Contato </NavbarBrand>
    </Navbar>
  );
}
export default footer;
