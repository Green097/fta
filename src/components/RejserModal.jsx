import React, { useState } from "react";
import { Button, Carousel, Figure, Modal } from "react-bootstrap";
import { Rating } from "@material-ui/lab";
import parse from "html-react-parser";
import moment from "moment";

export default function RejserModal({ t }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn btn-danger" onClick={handleShow}>
        Læs mere
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-muted">FTA Travel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel hover={true}>
            <Carousel.Item>
              <Figure>
                <img
                  className="fImg"
                  src={"http://localhost:5099/images/tours/" + t.gallery[0]}
                  alt="gallery img 1"
                />
              </Figure>
            </Carousel.Item>
            <Carousel.Item>
              <Figure>
                <img
                  className="fImg"
                  src={"http://localhost:5099/images/tours/" + t.gallery[1]}
                  alt="gallery img 2"
                />
              </Figure>
            </Carousel.Item>
            <Carousel.Item>
              <Figure>
                <img
                  className="fImg"
                  src={"http://localhost:5099/images/tours/" + t.gallery[2]}
                  alt="gallery img 3"
                />
              </Figure>
            </Carousel.Item>
          </Carousel>
          <div className="card-title d-flex justify-content-between">
            <h1 className="col-6">{t.title}</h1>
            <Rating
              name="read-only"
              className="text-end justify-content-end col-6"
              value={t.rating}
              readOnly
            />
          </div>
          <h3>Du får:</h3>
          <div className="card-text mb-2">{parse(t.content)}</div>
            <h4>Værelsestyper</h4>
          <div className="card-text mb-2">{parse(t.roomtype)}</div>
          <h6 className="card-subtitle mb-2 text-muted">
            {moment(t.traveldate).format("DD. MMMM YYYY")}
          </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
