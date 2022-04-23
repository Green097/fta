import React from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";

import HeadLogo from "../assets/img/gero.png";
import cLogo from "../assets/img/logo.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./Layouts.scss";

const Header = () => {
  return (
    <>
      <Container fluid>
        <Row
          className="text-center d-flex justify-content-center align-items-center"
          id="headerCon"
        >
          <Col xs="0" md="12" className="align-self-start d-none d-md-block">
            <Figure className="col-2 p-2 d-flex justify-content-start">
              <img className="fImg" src={cLogo} alt="corner logo" />
            </Figure>
          </Col>
          <Col xs="12" md="3" className="my-5">
            <h2 className="text-danger fontBold">Events</h2>
          </Col>
          <Col xs="12" md="5">
            <Figure className="p-2">
              <img className="fImg" src={HeadLogo} alt="Logo" />
            </Figure>
          </Col>
          <Col xs="12" md="3" className="my-5">
            <h2 className="text-danger fontBold">Travels</h2>
          </Col>
          <Col xs="12" className="bounce text-center align-self-end p-2">
            <h1>
              <AiOutlineArrowDown />
            </h1>
          </Col>
        </Row>
        <div id="Home" />
      </Container>
    </>
  );
};

export default Header;
