import React, { useContext } from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";

import Logo from "../assets/img/logo.png";
import Search from "./Search";

import "./Layouts.scss";
const Navigation = () => {
  return (
    <Navbar
      sticky="top"
      variant="dark"
      expand="md"
      className="mb-2 text-center navbar-dark bg-dark "
      id="navi"
    >
      <Container className="align-items-around">
        <Navbar.Brand
          href="/#Home"
          className="col-md-3 col-sm-8 p-2 offset-md-1"
        >
          <img className="img-fluid" src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mb-0">
          <Nav className="navHover navFont">
            <Nav.Link href="/#omos">Om os</Nav.Link>
            <Nav.Link href="/#tours">Produkter</Nav.Link>
            <Nav.Link href="/#kontakt">Kontakt</Nav.Link>
            <Nav.Link href="/admin" className="text-muted">admin</Nav.Link>
            {/* <div className="d-sm-block d-md-none">
              <Search />
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="d-none d-md-block">
        <Search />
      </div>
      <Col xs="0" md="1" />
    </Navbar>
  );
};

export default Navigation;
