import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import { opretBesked } from "../helpers/apiKald";
import { hentKontakt } from "../helpers/apiKald";
import "./Kontakt.scss";

const Kontakt = () => {
  const [kontakt, setKontakt] = useState();
  const [fejl, setFejl] = useState();
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState();

  useEffect(() => {
    setLoading(true);
    hentKontakt().then((response) => {
      if (response) {
        setKontakt(response);
        setFejl(false);
      } else {
        setFejl(true);
        setKontakt();
      }
      setLoading(false);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const besked = new FormData(e.target);

    setLoading(true);
    opretBesked(besked).then((response) => {
      if (response) {
        setPopup(response.message);
        setFejl();

        e.target.reset();
      } else {
        setFejl(true);
        setPopup();
      }
      setLoading(false);
    });
  };

  return (
    <Container id="kontakt" className="text-left my-3">
      <h2 className="compBanner rounded text-center bg-secondary">Kontakt </h2>
      {popup && <h3 className="p-2 text-center " >Din besked er nu sendt!</h3>}
      <Row>
        {kontakt && (
          <Col xs={12} className="px-4 col-md-6">
            <h2 className="bold">Kontakt Information</h2>
            <h4 className="bold">{kontakt.company}</h4>
            <h6>CVR - {kontakt.cvr}</h6>
            <p>
              {kontakt.address}<br />
              {kontakt.zipcity} <br />
              {kontakt.country} <br />
              <BsTelephone /> {kontakt.phone} <br />
              <HiOutlineMail /> {kontakt.email}
            </p>
          </Col>
        )}
        {loading && <h1>Loading...</h1>}
        {fejl && <h1>Server Boom</h1>}

        <Col xs={12} className="px-4 col-md-6">
          <h2>Skriv til os</h2>
          <Form onSubmit={handleSubmit} className="py-1 row">
            <label className="inputCon col-12">
              <input
                type="text"
                className="w-100 mt-2 p-2 inputTXT"
                placeholder="Navn"
                name="name"
                required
              />
            </label>
            <label className="inputCon col-12">
              <input
                type="text"
                className="w-100 p-2 mt-2 inputTXT"
                placeholder="Firma/Organisation"
                name="company"
                required
              />
            </label>
            <label className="inputCon col-12">
              <input
                type="email"
                className="w-100 p-2 mt-2 inputTXT"
                placeholder="Email Adresse"
                name="email"
                required
              />
            </label>
            <label className="inputCon col-12">
              <input
                type="tel"
                className="w-100 p-2 mt-2 inputTXT"
                placeholder="Telefon"
                name="phone"
                required
              />
            </label>

            <label className="inputCon col-12">
              <textarea
                className="w-100 p-2 mt-2 inputTXT"
                name="message"
                placeholder="Besked"
              ></textarea>
            </label>
            <button
              type="submit"
              className="btn btn-danger p-2 my-2 text-center col-2 mx-3"
            >
              Send
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Kontakt;
