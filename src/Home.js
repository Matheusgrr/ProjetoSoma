import React from "react";
import { Row, Card, CardImg, CardTitle, CardText } from "reactstrap";
import imagemCard01 from "./imagens/equipe_soma.png";
import "./estiloHeader.css";

function home() {
  return (
    <Row>
      <Card className="col-12 col-md-5 cardHome text-center">
        <CardImg top width="100%" src={imagemCard01} />
        <CardTitle>Primeiro Card</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          mollitia sit, nesciunt, ut iure totam doloremque voluptates corporis
          quibusdam impedit ducimus eligendi molestiae magni! Iure ipsam
          perferendis iusto minus voluptates.
        </CardText>
      </Card>
    </Row>
  );
}

export default home;
