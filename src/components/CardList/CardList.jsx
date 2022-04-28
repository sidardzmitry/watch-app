import React from "react";
import "./CardList.css";
import { Container } from "react-bootstrap";
import CardItem from "../CardItem/CardItem";

const CardList = (props) => {
  const { sampleWatches } = props;

  return (
    <Container>
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-4 card__list">
        {sampleWatches.map((sampleWatches) => (
          <CardItem key={sampleWatches.id} {...sampleWatches} />
        ))}
      </div>
      <div className="box__btn__card__list">
          <button className="btn__card__list">View More</button>
      </div>
    </Container>
  );
};

export default CardList;
