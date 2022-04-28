import React from "react";
import { Row, Col, Card, Button, Container} from "react-bootstrap";
import "./HeaderCards.css";

const HeaderCards = () => {
  return (
    <Container className="header__cards">
      <Row xs='1'>
          <Col md="6" className="col">
            <Card className="text-dark">
              <Card.Img
                src="/access/card1-content.jpg"
                alt="Card image"
                height={620}
              />
              <Card.ImgOverlay>
                <Card.Title className="title__card1">Classic</Card.Title>
                <Card.Title className="title__card11">For Him</Card.Title>
                <Button className="title__btn1">Shop Now</Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md="6" className="col">
            <Card className="text-dark">
              <Card.Img
                src="/access/card2-content.jpg"
                alt="Card image"
                height={620}
              />
              <Card.ImgOverlay className="asd">
                <Card.Title className="title__card2">Trendy</Card.Title>
                <Card.Title className="title__card22">For Her</Card.Title>
                <Button className="title__btn2">Shop Now</Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
      </Row>
    </Container>
  );
};

export default HeaderCards;
