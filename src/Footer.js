import React from "react";
import { Navbar, NavItem, NavLink, NavbarBrand } from "reactstrap";
import "./Estilo.css";

function footer() {
  return (
    <Navbar className="adjustFooter">
      <NavbarBrand href="/">Empresa</NavbarBrand>
      <NavbarBrand>Informações</NavbarBrand>
      <NavbarBrand>Contato </NavbarBrand>
    </Navbar>
  );
}
export default footer;
