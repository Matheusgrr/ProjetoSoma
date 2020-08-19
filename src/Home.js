import React from "react";
import { Row, Card, CardImg, CardTitle, CardText } from "reactstrap";
import imagemCard01 from "./imagens/equipe_soma.png";
import imagemCard02 from "./imagens/medicina.jpg";
import "./Estilo.css";
import { Link } from "react-router-dom";

const corCards = {
  backgroundColor: "#EDFDF9",
  borderColor: "#EDFDF9",
};
function home() {
  return (
    <Row>
      <Card
        body
        style={corCards}
        className="col-12 col-md-6 cardEstilo"
        tag={Link}
        to="/gallery"
      >
        <CardImg top width="100%" src={imagemCard01} />
        <CardTitle className="tituloCard">Conheça a equipe</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          mollitia sit, nesciunt, ut iure totam doloremque voluptates corporis
          quibusdam impedit ducimus eligendi molestiae magni!
        </CardText>
      </Card>
      <Card body style={corCards} className="col-12 col-md-6 text-center">
        <CardImg top width="100%" src={imagemCard02} />
        <CardTitle className="tituloCard">Marque sua consulta</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          mollitia sit, nesciunt, ut iure totam doloremque voluptates corporis
          quibusdam impedit ducimus eligendi molestiae magni!
        </CardText>
      </Card>
    </Row>
  );
}

export default home;
