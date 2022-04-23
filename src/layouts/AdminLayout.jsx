import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";

// import { LoginContext } from "../context/LoginContext";

import Footer from "./Footer";
import AdminRetRejser from "../components/admin/AdminRetTours";
import { Container } from "react-bootstrap";

const AdminLayout = ({ children }) => {
  // const { user } = useContext(LoginContext);

  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }

  return (
    <Container>
      <AdminNavbar />
      <Outlet />
    </Container>
  );
};

export default AdminLayout;
