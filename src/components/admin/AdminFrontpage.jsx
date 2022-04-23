import React, { useEffect, useState } from "react";
import { Button, Container, Row, Form, Figure } from "react-bootstrap";
import { useParams } from "react-router-dom";

import {
  hentOmos,
  retAbout,
  hentKontakt,
  retKtInfo,
  hentFooter,
  retFooter,
} from "../../helpers/apiKald";

import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import useShowThumb from "../../hooks/useShowThumb";

const AdminRetFront = () => {
  const [omos, setOmos] = useState();
  const [kontakt, setKontakt] = useState();
  const [footer, setFooter] = useState();
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
  }, [besked]);

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
  }, [besked]);

  useEffect(() => {
    setLoading(true);
    hentFooter().then((response) => {
      if (response) {
        setFooter(response);
        setFejl(false);
      } else {
        setFejl(true);
        setFooter();
      }
      setLoading(false);
    });
  }, [besked]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const rettet = new FormData(e.target);

    setLoading(true);
    retAbout(rettet).then((response) => {
      if (response) {
        setBesked("Frontpage er rettet");
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

    setLoading(true);
    retKtInfo(rettet).then((response) => {
      if (response) {
        setBesked("Frontpage er rettet");
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

    setLoading(true);
    retFooter(rettet).then((response) => {
      if (response) {
        setBesked("Frontpage er rettet");
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
      <h1 className="text-center">Ret Frontpage</h1>
      {besked && <h2 className="alert">{besked}</h2>}
      <Form onSubmit={handleSubmit}>
        <Row>
          {omos && (
            <div className="col-4">
              <div className="card p-2">
                <Form.Group>
                  <Form.Label>About</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    defaultValue={omos.title}
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
                    data={omos.content}
                    onReady={(editor) => setEditortxt(editor.getData())}
                    onChange={(event, editor) => setEditortxt(editor.getData())}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>About img</Form.Label>
                  <Form.Control
                    type="file"
                    name="galleryimages"
                    onChange={(e) => setThumb(e.target.files[(0, 2)])}
                  />
                  {thumb && (
                    <Form.Label className="p-2 mt-1 text-center">
                      <Figure>
                        <img src={thumb} className="fImg" alt="thumb" />
                        <figcaption>New image</figcaption>
                      </Figure>
                    </Form.Label>
                  )}
                  <Form.Label className="col-3 mt-1 p-2 text-center">
                    <Figure>
                      <img
                        src={"http://localhost:5099/images/about/" + omos.image}
                        className="fImg"
                        alt="about img"
                      />
                      <figcaption>Current gallery</figcaption>
                    </Figure>
                  </Form.Label>
                </Form.Group>
              </div>
            </div>
          )}
          {kontakt && (
            <div className="col-4">
              <div className="card p-2">
                <Form.Group>
                  <Form.Label>Kontakt</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    defaultValue={kontakt.company}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>CVR</Form.Label>
                  <Form.Control
                    type="text"
                    name="cvr"
                    defaultValue={kontakt.cvr}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    defaultValue={kontakt.address}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Zipcity</Form.Label>
                  <Form.Control
                    type="text"
                    name="zipcoty"
                    defaultValue={kontakt.zipcity}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    defaultValue={kontakt.country}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    defaultValue={kontakt.phone}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    defaultValue={kontakt.email}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Opening hours</Form.Label>
                  <Form.Control
                    type="text"
                    name="openinghours"
                    defaultValue={kontakt.openinghours}
                  />
                </Form.Group>
              </div>
            </div>
          )}
          {footer && (
            <div className="col-4">
              <div className="card p-2">
              <Form.Group>
                <Form.Label>Footer</Form.Label>
                <Form.Control
                  type="text"
                  name="footertext"
                  defaultValue={footer.footertext}
                />
              </Form.Group>
            </div></div>
          )}
        </Row>
        {loading && <h1>Loading...</h1>}
        {fejl && <h1>Server Boom</h1>}
        <Button variant="primary" type="submit" className="my-2">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AdminRetFront;

{
  /* <Form.Group className="col-6">
<Form.Label>Travel date</Form.Label>
<Form.Control
  type="text"
  name="traveldate"
  defaultValue={tours.traveldate}
/>
</Form.Group> */
}
