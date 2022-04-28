import React from "react";
import "./CardItem.css";
import { Card, Button } from "react-bootstrap";

const CardItem = (props) => {
  const { brand, collection, model, image, price } = props;

  return (
    <Card className="card__item">
      <Card.Img variant="top" src={image}/>
      <Card.Body className="body__card__item">
        <Card.Title className="title__card__item">{brand}</Card.Title>
        <Card.Text className="text__card__item">{collection}</Card.Text>
        <Card.Text className="text__card__item">{model}</Card.Text>
        <Button className="btn__card__item">$ {price}</Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
