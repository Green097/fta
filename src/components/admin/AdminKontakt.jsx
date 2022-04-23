import React, { useState, useEffect } from "react";
import { Container, Figure, Table } from "react-bootstrap";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import { hentContact, delContact } from "../../helpers/apiKald";

const AdminContact = () => {
  const [contact, setContact] = useState();
  const [fejl, setFejl] = useState();
  const [loading, setLoading] = useState(false);
  const [besked, setBesked] = useState();

  useEffect(() => {
    setLoading(true);
    hentContact().then((response) => {
      if (response) {
        setContact(response);
        setFejl(false);
      } else {
        setFejl(true);
        setContact();
      }
      setLoading(false);
    });
  }, [besked]);

  const handleSlet = (id) => {
    if (window.confirm("Confirm delete?") === true) {
      setLoading(true);
      delContact(id).then((response) => {
        if (response) {
          setBesked("contact slettet");
        } else {
          setBesked("server went boom - no delete!");
        }
        setLoading(false);
      });
    }
  };

  return (
    <Container>
      <h1 className="text-center">All Kontakt</h1>
      {contact && (
        <Table bordered hover>
          <thead>
            <tr>
              <th className="col-2">Navn</th>
              <th className="col-2">Company</th>
              <th className="col-2">Email</th>
              <th className="col-1">Phone</th>
              <th className="col-5">Message</th>
              <th className="col-1 text-center">Slet</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((c) => (
              <tr key={c._id}>
                <td className="py-4">{c.name}</td>
                <td className="py-4">{c.company}</td>
                <td className="py-4">{c.email}</td>
                <td className="py-4">{c.phone}</td>
                <td className="py-4">{c.message}</td>

                <td className="text-center p-4">
                  <AiFillDelete
                    className="pointer"
                    onClick={() => handleSlet(c._id)}
                  />
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

export default AdminContact;
