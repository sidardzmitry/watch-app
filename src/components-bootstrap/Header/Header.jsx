import React from "react";
import "./Header.css";
import {
  Container,
  Navbar,
  Image,
  Nav,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid="md">
      <Navbar expand="lg" bg="light">
        <Container className="header__container">
          <Navbar.Brand href="#home">
            <Image src="/access/logo.svg" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <NavDropdown title="Catalog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">About Us</Nav.Link>
              <NavDropdown title="Our Stories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contacts</Nav.Link>
            </Nav>

            <FormControl type="text" className="header__input" />

            <Nav className="me-auto ">
              <NavDropdown title="USD $" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="ENG" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">
                <Image src="/access/heart.svg" />
              </Nav.Link>
              <Nav.Link href="#link">
                <Image src="/access/cart.svg" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
