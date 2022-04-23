import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { opretTours } from "../../helpers/apiKald";

import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import useShowThumb from "../../hooks/useShowThumb";

const AdminOpretRejser = () => {
  const [fejl, setFejl] = useState();
  const [loading, setLoading] = useState(false);
  const [besked, setBesked] = useState();

  const [editorteaser, setEditorteaser] = useState();
  const [editortxt, setEditortxt] = useState();
  const [editorroom, setEditorroom] = useState();
  const [thumb, makeThumb] = useShowThumb();
  const [thumbc, makeThumbc] = useShowThumb();

  const handleSubmit = (e) => {
    e.preventDefault();

    const tours = new FormData(e.target);

    setLoading(true);
    opretTours(tours).then((response) => {
      if (response) {
        setBesked("Ny Tours oprettet");
        setFejl();

        e.target.reset();
        setEditortxt("");
      } else {
        setFejl(true);
        setBesked();
      }
      setLoading(false);
    });
  };

  return (
    <Container>
      <h1 className="text-center">Opret ny tour</h1>

      {besked && <h2 className="alert">{besked}</h2>}

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" />
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
            data={editorteaser}
            onChange={(event, editor) => {
              const data = editor.getData();
              setEditorteaser(data);
            }}
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
            data={editortxt}
            onChange={(event, editor) => {
              const data = editor.getData();
              setEditortxt(data);
            }}
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
            data={editorroom}
            onChange={(event, editor) => {
              const data = editor.getData();
              setEditorroom(data);
            }}
          />
        </Form.Group>
        <Row>
          <Form.Group className="col-6">
            <Form.Label>Travel date</Form.Label>
            <Form.Control type="text" name="traveldate" />
          </Form.Group>
          <Form.Group className="col-6">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" name="duration" />
          </Form.Group>
          <Form.Group className="col-4">
            <Form.Label>Min. price</Form.Label>
            <Form.Control type="text" name="priceminimum" />
          </Form.Group>
          <Form.Group className="col-4">
            <Form.Label>Max. price</Form.Label>
            <Form.Control type="text" name="pricemaximum" />
          </Form.Group>
          <Form.Group className="col-4">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="text" name="rating" />
          </Form.Group>

          <Form.Group className="col-6">
            <Form.Label>Slider image</Form.Label>
            <Form.Control
              type="file"
              name="galleryimages"
              onChange={(e) => makeThumb(e.target.files[0])}
            />
            {thumb && (
              <Form.Label className="col-3 mt-1">
                <img src={thumb} className="fImg" alt="thumb" />
              </Form.Label>
            )}
          </Form.Group>
          <Form.Group className="col-6">
            <Form.Label>Cover image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={(e) => makeThumbc(e.target.files[0])}
            />
            {thumbc && (
              <Form.Label className="col-3 mt-1">
                <img src={thumbc} className="fImg" alt="thumbcover" />
              </Form.Label>
            )}
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit" className="my-2">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AdminOpretRejser;
