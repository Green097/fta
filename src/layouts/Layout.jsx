import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navigation";

const Layout = () => {
  return (
    <>
      {window.location.pathname === "/" && <Header />}
      <Navbar />
      <div id="layoutCon">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
