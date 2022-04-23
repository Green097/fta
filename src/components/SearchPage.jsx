import React, { useEffect, useState } from "react";
import { Button, Col, Container, Figure, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

import { søgTours } from "../helpers/apiKald";
import moment from "moment";
import { Rating } from "@material-ui/lab";

import "./Tours.scss";
import RejserModal from "./RejserModal";

const SearchPage = () => {
  const { id } = useParams();

  const [tours, setTours] = useState();
  const [fejl, setFejl] = useState();
  const [loading, setLoading] = useState(false);
  const [besked, setBesked] = useState();

  useEffect(() => {
    setLoading(true);
    søgTours(id).then((response) => {
      if (response) {
        setTours(response);
        setFejl(false);
      } else {
        setFejl(true);
        setTours();
      }
      setLoading(false);
    });
  }, [id]);

  return (
    <Container>
      <h1>Søg results</h1>
      <h4>matching: {id}</h4>

      {besked && <h2 className="alert">{besked}</h2>}
      <Row>
        {tours &&
          tours.map((t) => (
            <Col xs="12" md="6" lg="4" className="p-2" key={t._id}>
              <div className="card">
                <Col xs={12}>
                  <img
                    src={"http://localhost:5099/images/tours/" + t.coverimage}
                    key={t._id}
                    className="card-img-top"
                    alt="Cover image"
                  />
                </Col>
                <Col xs={12} className="card-body">
                  <div className="card-title d-flex justify-content-between">
                    <h3 className="col-6">{t.title}</h3>
                    <Rating
                      name="read-only"
                      className="text-end justify-content-end col-6"
                      value={t.rating}
                      readOnly
                    />
                  </div>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {moment(t.traveldate).format("DD. MMMM YYYY")}
                  </h6>
                  <div className="card-text mb-2">{parse(t.teaser)}</div>
                  <RejserModal t={t} />
                </Col>
              </div>
            </Col>
          ))}
      </Row>
      {loading && <h1>Loading...</h1>}
      {fejl && <h1>Intet match</h1>}
    </Container>
  );
};

export default SearchPage;
