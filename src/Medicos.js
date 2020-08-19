import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function pagMedicos() {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag={Link} to="/medico01">
          Médico 1
        </BreadcrumbItem>
        <BreadcrumbItem tag={Link} to="/medico02">
          Médico 2
        </BreadcrumbItem>
        <BreadcrumbItem tag={Link} to="/medico03">
          Médico 3
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
export default pagMedicos;
