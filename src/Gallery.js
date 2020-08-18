import React, { useState } from "react";
import { Carousel, CarouselItem, UncontrolledCarousel } from "reactstrap";
import madara from "./imagens/madara.jpg";
import iris from "./imagens/Iris3.png";

const items = [
  { src: madara, altText: "Imagem 1", caption: "Imagem 1" },
  { src: iris, altText: "Imagem 2", caption: "Imagem 2" },
];
function gallery() {
  return <UncontrolledCarousel items={items} />;
}

export default gallery;
