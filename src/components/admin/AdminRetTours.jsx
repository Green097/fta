import React, { useEffect, useState } from "react";
import { Button, Container, Row, Form, Figure } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { hentIdTours, retTours } from "../../helpers/apiKald";

import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import useShowThumb from "../../hooks/useShowThumb";

const AdminRetRejser = () => {
  const { id } = useParams();

  const [tours, setTours] = useState();
  const [fejl, setFejl] = useState();
  const [loading, setLoading] = useState(false);
  const [besked, setBesked] = useState();
  const [updateToggle, setUpdateToggle] = useState(true);

  const [editorteaser, setEditorteaser] = useState();
  const [editortxt, setEditortxt] = useState();
  const [editorroom, setEditorroom] = useState();
  const [thumb, setThumb] = useShowThumb();
  const [thumbc, setThumbc] = useShowThumb();

  useEffect(() => {
    setLoading(true);
    hentIdTours(id).then((response) => {
      if (response) {
        setTours(response);
        setFejl(false);
      } else {
        setFejl(true);
        setTours();
      }
      setLoading(false);
    });
  }, [updateToggle]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const rettet = new FormData(e.target);

    setLoading(true);
    retTours(id, rettet).then((response) => {
      if (response) {
        setBesked("Tours rettet");
        setUpdateToggle(!updateToggle);
        setThumb();
        e.target.reset();
        setFejl();
      } else {
        setFejl(true);
        setBesked();
      }
      setLoading(false);
    });
  };

  return (
    <Container>
      <h1 className="text-center">Ret Tours</h1>

      {besked && <h2 className="alert">{besked}</h2>}

      {tours && (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" defaultValue={tours.title} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Teaser</Form.Label>
            <textarea
              name="teaser"
              defaultValue={editorteaser}
              className="form-control"
              style={{ display: "none" }}
            />
            <CKEditor
              editor={Editor}
              data={tours.teaser}
              onReady={(editor) => setEditorteaser(editor.getData())}
              onChange={(event, editor) => setEditorteaser(editor.getData())}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Content</Form.Label>
            <textarea
              name="content"
              defaultValue={editortxt}
              className="form-control"
              style={{ display: "none" }}
            />
            <CKEditor
              editor={Editor}
              data={tours.content}
              onReady={(editor) => setEditortxt(editor.getData())}
              onChange={(event, editor) => setEditortxt(editor.getData())}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Room type</Form.Label>
            <textarea
              name="roomtype"
              defaultValue={editorroom}
              className="form-control"
              style={{ display: "none" }}
            />
            <CKEditor
              editor={Editor}
              data={tours.roomtype}
              onReady={(editor) => setEditorroom(editor.getData())}
              onChange={(event, editor) => setEditorroom(editor.getData())}
            />
          </Form.Group>
          <Row>
            <Form.Group className="col-6">
              <Form.Label>Travel date</Form.Label>
              <Form.Control
                type="text"
                name="traveldate"
                defaultValue={tours.traveldate}
              />
            </Form.Group>
            <Form.Group className="col-6">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                name="duration"
                defaultValue={tours.duration}
              />
            </Form.Group>
            <Form.Group className="col-4">
              <Form.Label>Min. price</Form.Label>
              <Form.Control
                type="text"
                name="priceminimum"
                defaultValue={tours.priceminimum}
              />
            </Form.Group>
            <Form.Group className="col-4">
              <Form.Label>Max. price</Form.Label>
              <Form.Control
                type="text"
                name="pricemaximum"
                defaultValue={tours.pricemaximum}
              />
            </Form.Group>
            <Form.Group className="col-4">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                name="rating"
                defaultValue={tours.rating}
              />
            </Form.Group>

            <Form.Group className="col-6">
              <Form.Label>Slider image</Form.Label>
              <Form.Control
                type="file"
                name="galleryimages"
                onChange={(e) => setThumb(e.target.files[(0, 2)])}
              />
              {thumb && (
                <Form.Label className="col-3 p-2 mt-1 text-center">
                  <Figure>
                    <img src={thumb} className="fImg" alt="thumb" />
                    <figcaption>New image</figcaption>
                  </Figure>
                </Form.Label>
              )}
              <Form.Label className="col-3 mt-1 p-2 text-center">
                <Figure>
                  <img
                    src={
                      "http://localhost:5099/images/tours/" + tours.gallery[0]
                    }
                    className="fImg"
                    alt="current gallery"
                  />
                  <figcaption>Current gallery</figcaption>
                </Figure>
              </Form.Label>
            </Form.Group>
            <Form.Group className="col-6">
              <Form.Label>Cover image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={(e) => setThumbc(e.target.files[0])}
              />
              {thumbc && (
                <Form.Label className="col-3 p-2 mt-1 text-center">
                  <Figure>
                    <img src={thumbc} className="fImg" alt="thumbcover" />
                    <figcaption>New image</figcaption>
                  </Figure>
                </Form.Label>
              )}
              <Form.Label className="col-3 mt-1 p-2 text-center">
                <Figure>
                  <img
                    src={
                      "http://localhost:5099/images/tours/" + tours.coverimage
                    }
                    className="fImg"
                    alt="current cover"
                  />
                  <figcaption>Current cover</figcaption>
                </Figure>
              </Form.Label>
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" className="my-2">
            Submit
          </Button>
        </Form>
      )}
      {loading && <h1>Loading...</h1>}
      {fejl && <h1>Server Boom</h1>}
    </Container>
  );
};

export default AdminRetRejser;
