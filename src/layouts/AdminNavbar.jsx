import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <Navbar
      expand="md"
      className="mb-2 text-center navbar-dark bg-dark rounded mb-4"
    >
      <Nav className="container text-center navFont">
        <li className="col">
          <Nav.Link as={Link} to="/">
            F1 Home
          </Nav.Link>
        </li>
        <li className="col">
          <Nav.Link as={Link} to="/admin">
            AdminHome
          </Nav.Link>
        </li>
        <li className="col">
          <Nav.Link as={Link} to="/admin/admintours">
            AdminTours
          </Nav.Link>
        </li>
        <li className="col">
          <Nav.Link as={Link} to="/admin/adminfront">
            Admin Frontpage
          </Nav.Link>
        </li>
        <li className="col">
          <Nav.Link as={Link} to="/admin/adminbesked">
            Admin Besked
          </Nav.Link>
        </li>
      </Nav>
    </Navbar>
  );
};

export default AdminNavbar;
