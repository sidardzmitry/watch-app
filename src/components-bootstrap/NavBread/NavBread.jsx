import React from "react";
import "./NavBread.css";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

const NavBread = () => {
  return (
    <Container className="card__list">
      <Row className="card__list__navbar">
        <Col md="6">
          <h1 className="card__list__title">Popular Products</h1>
        </Col>
        <Col md="6">
          <div className="card__list__bread">
              <span className="bread__text this">Featured</span>
              <span className="bread__text">Latest</span>
              <span className="bread__text">Sale</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBread;
