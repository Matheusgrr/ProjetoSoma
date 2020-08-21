import React from "react";
import "./Estilo.css";
import medico02img from "./imagens/medico02.jpg";
import { Media, Row } from "reactstrap";

function medico02() {
  return (
    <Row>
      <div className="col-12 col-md-6">
        <Media className=" marginTB">
          <Media body className="text-center align-self-center">
            <Media heading>Conheça a equipe</Media>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            tempore molestias, aperiam dolor pariatur, accusantium minus beatae,
            dolores et cumque recusandae fuga placeat in eveniet perferendis
            temporibus debitis obcaecati blanditiis.
          </Media>
        </Media>
      </div>
      <img
        src={medico02img}
        className="col-12 col-md-6 imgSize marginTB"
        alt=""
      />
    </Row>
  );
}

export default medico02;
