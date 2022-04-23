import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Rejser from "./components/Rejser";
import Kontakt from "./components/Kontakt";
import SearchPage from "./components/SearchPage";
import Login from "./pages/Login";

import AdminLayout from "./layouts/AdminLayout";
import AdminHome from "./components/admin/AdminHome";
import AdminRejser from "./components/admin/AdminRejser";
import AdminOpretRejser from "./components/admin/AdminOpretTours";
import AdminRetRejser from "./components/admin/AdminRetTours";
import AdminFrontpage from "./components/admin/AdminFrontpage";
import AdminKontakt from "./components/admin/AdminKontakt";
import Header from "./layouts/Header";

function App() {
  return (
    <div className="bg-light">
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="tours" element={<Rejser />} />
          <Route path="Kontakt" element={<Kontakt />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="tours/soeg/:id" element={<SearchPage />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="/admin/admintours" element={<AdminRejser />} />
            <Route
              path="/admin/admintoursopret"
              element={<AdminOpretRejser />}
            />
            <Route
              path="/admin/admintoursret/:id"
              element={<AdminRetRejser />}
            />{" "}
            <Route path="/admin/adminfront" element={<AdminFrontpage />} />
            <Route path="/admin/adminbesked" element={<AdminKontakt />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
