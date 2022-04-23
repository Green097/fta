import React from "react";

import { Container } from "react-bootstrap";
import Kontakt from "../components/Kontakt";
import Omos from "../components/Omos";
import Rejser from "../components/Rejser";


const Home = () => {
  return (
    <Container id="homeCon" className="fluid" >
      <Omos />
      <Rejser />
      <Kontakt />
    </Container>
  );
};

export default Home;
