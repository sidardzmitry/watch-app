import React from "react";
import "./HeaderContent.css";
import { Container, Row, Col, Image } from "react-bootstrap";

const HeaderContent = () => {
  return (
    <Container className="header__content">
      <Row >
        <Col md="5">
          <div className="content content__one">
            <h1>Time is Precious</h1>
          </div>
        </Col>
        <Col md="2">
          <div>
            <Image src="/access/watch-content.png" />
          </div>
        </Col>
        <Col md="5">
          <div className="content content__two">
            <h1>Spend it Usefully</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderContent;
