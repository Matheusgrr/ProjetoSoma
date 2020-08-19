import React, { useState } from "react";
import { UncontrolledCarousel, Row, Media } from "reactstrap";
import madara from "./imagens/madara.jpg";
import iris from "./imagens/iris3.png";
import okiko from "./imagens/okiko2.jpg";
import "./Estilo.css";

const items = [
  { src: madara, altText: "Imagem 1", caption: "Imagem 1" },
  { src: iris, altText: "Imagem 2", caption: "Imagem 2" },
];
const configMargen = {
  padding: "20px 0",
  fontJustify: "center",
};

function gallery() {
  return (
    <Row>
      <UncontrolledCarousel items={items} className="col-md-6 marginTB" />
      <div className=" col-12 col-md-6">
        <Media className=" marginTB">
          <Media body className="text-center align-self-center">
            <Media heading>Conheça a equipe</Media>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            tempore molestias, aperiam dolor pariatur, accusantium minus beatae,
            dolores et cumque recusandae fuga placeat in eveniet perferendis
            temporibus debitis obcaecati blanditiis.
          </Media>
        </Media>

        <div className=" marginTB">
          <img src={okiko} className="imgTopGallery" alt="" />
        </div>
      </div>
    </Row>
  );
}

export default gallery;
