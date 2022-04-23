import React, { useState, useEffect } from "react";
import { Container, Figure, Table } from "react-bootstrap";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import { hentTours, delTours, imageUrl } from "../../helpers/apiKald";
import "./admintours.scss"

const AdminTours = () => {
  const [tours, setTours] = useState();
  const [fejl, setFejl] = useState();
  const [loading, setLoading] = useState(false);
  const [besked, setBesked] = useState();

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
  }, [besked]);

  const handleSlet = (id) => {
    if (window.confirm("Confirm delete?") === true) {
      setLoading(true);
      delTours(id).then((response) => {
        if (response) {
          setBesked("tours slettet");
        } else {
          setBesked("server went boom - no delete!");
        }
        setLoading(false);
      });
    }
  };

  return (
    <Container>
      <h1 className="text-center">All Tours</h1>
      {tours && (
        <Table bordered hover>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th colSpan={2} className="col-2">
                <Link to="/admin/admintoursopret">Opret Nyt</Link>
              </th>
            </tr>
            <tr>
              <th className="col-1">Navn</th>
              <th className="col-9">Info</th>

              <th className="col-1 text-center">
                Ret
              </th>
              <th className="col-1 text-center">
                Slet
              </th>
            </tr>
          </thead>
          <tbody>
            {tours.map((t) => (
              <tr key={t._id}>
                <td>
                  <Figure className="text-center m-0">
                  <img
                    src={"http://localhost:5099/images/tours/" + t.coverimage}
                    className="fImg"
                  />
                  <figcaption>{t.title}</figcaption>
                  </Figure>
                </td>

                <td className="py-4">{t.teaser}</td>
                <td className="text-center p-4">
                <Link to={"/admin/admintoursret/" + t._id} className="linkRMV">
                  <AiFillEdit /></Link>
                </td>
                <td className="text-center p-4">
                  <AiFillDelete className="pointer" onClick={() => handleSlet(t._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {loading && <h1>Loading...</h1>}
      {fejl && <h1>Server Boom</h1>}
    </Container>
  );
};

export default AdminTours;
