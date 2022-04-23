import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

import { hentOmos } from "../helpers/apiKald";
import { Col, Container, Figure, Row } from "react-bootstrap";

const Omos = () => {
  const [omos, setOmos] = useState();
  const [fejl, setFejl] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    hentOmos().then((response) => {
      if (response) {
        setOmos(response);
        setFejl(false);
      } else {
        setFejl(true);
        setOmos();
      }
      setLoading(false);
    });
  }, []);

  return (
    <Container className="text-left" id="omos">
      <h2 className="compBanner rounded text-center bg-secondary p-2 mt-5">Om os</h2>
      {omos && (
        <div className="flex-item">
          <Row className="my-4">
            <Col xs="12" md="8" className="">
              {/* <h4 className="">{omos.title}</h4> */}
              {parse(omos.content)}
            </Col>
            <Col xs="0" md="4">
              <Figure className="fImg">
                <img
                  className="img-fluid"
                  src={"http://localhost:5099/images/about/" + omos.image}
                />
              </Figure>
            </Col>
          </Row>
        </div>
      )}
      {loading && <h1>Loading...</h1>}
      {fejl && <h1>Server Boom</h1>}
    </Container>
  );
};

export default Omos;
