import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useLocation } from "react-router-dom";

import { hentTours } from "../helpers/apiKald";
import { Col, Container, Figure, Row } from "react-bootstrap";
import moment from "moment";
import { Rating } from "@material-ui/lab";
import Pagination from "../components/Pagination";

import "./Tours.scss";
import RejserModal from "./RejserModal";

const Rejser = () => {
  const { state } = useLocation();

  const [tours, setTours] = useState();
  const [fejl, setFejl] = useState();
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let indexOfLastItem, indexOffFirstItem, currentItems;

  if (tours && tours.length) {
    indexOfLastItem = currentPage * itemsPerPage;
    indexOffFirstItem = indexOfLastItem - itemsPerPage;
  }

  useEffect(() => {
    setLoading(true);
    hentTours().then((response) => {
      if (response) {
        setTours(response);
        setFejl(false);
      } else {
        setFejl(true);
        setTours();
      }
      setLoading(false);
    });
  }, []);

  return (
    <Container id="tours">
      <h2 className="compBanner rounded text-center bg-secondary">Rejsemål</h2>
      {tours && (
        <Row>
          {tours.slice(indexOffFirstItem, indexOfLastItem).map((t) => (
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
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={tours.length}
            paginate={paginate}
          />
        </Row>
      )}
      {loading && <h1>Loading...</h1>}
      {fejl && <h1>Server Boom</h1>}
    </Container>
  );
};

export default Rejser;
