import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Row } from "reactstrap";
import "./Estilo.css";
import medico01 from "./Medico01";
import medico02 from "./Medico02";
import medico03 from "./Medico03";

function pagMedicos() {
  return (
    <Row>
      <Router>
        <Breadcrumb className="col-12 marginTB" tag="nav" listTag="div">
          <BreadcrumbItem tag={Link} to="/medicos">
            Médico 1
          </BreadcrumbItem>
          <BreadcrumbItem tag={Link} to="/medico02">
            Médico 2
          </BreadcrumbItem>
          <BreadcrumbItem tag={Link} to="/medico03">
            Médico 3
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <Route path="/medicos" component={medico01} />
          <Route path="/medico02" component={medico02} />
          <Route path="/medico03" component={medico03} />
        </div>
      </Router>
    </Row>
  );
}
export default pagMedicos;
