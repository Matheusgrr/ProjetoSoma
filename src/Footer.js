import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./Estilo.css";

function footer() {
  return (
    <Navbar className="adjustHeaderFooter">
      <NavbarBrand href="/">Empresa</NavbarBrand>
      <NavbarBrand>Informações</NavbarBrand>
      <NavbarBrand>Contato </NavbarBrand>
    </Navbar>
  );
}
export default footer;
