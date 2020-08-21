import React from "react";
import "./Estilo.css";
import medico01img from "./imagens/medico01.jpg";
import { Media, Row } from "reactstrap";

function medico01() {
  return (
    <Row>
      <div className="col-12 col-md-6">
        <Media className=" marginTB">
          <Media body className="text-center align-self-center">
            <Media heading>Doutor Fulado da Silva Sauro</Media>
            Formado na universidade federal da terra do nunca, UFTN. Se
            especializou em ortopedia em Narnia. Ligado nas maiores evoluções
            tecnologicas que estão acontecendo na área, atravez de congressos
            etc. Fulano de tal já atua na área há 20 anos, apaixonado por pesca
            e por navegar.
          </Media>
        </Media>
      </div>
      <img
        src={medico01img}
        className="col-12 col-md-6 imgSize marginTB"
        alt=""
      />
    </Row>
  );
}

export default medico01;
