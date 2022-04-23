import React, { useState, useEffect } from "react";

import { hentFooter } from "../helpers/apiKald";
import { Col, Container, Figure, Row } from "react-bootstrap";
const Footer = () => {
    
  const [footer, setFooter] = useState();
  const [fejl, setFejl] = useState();
  const [loading, setLoading] = useState(false);

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
  }, []);

    return (

        <Container fluid className="text-center p-0" id="footer">
        {footer && (
            
        <h3 className="footerBanner text-center mb-0 bg-dark">© {footer.footertext}</h3>
        )}
        {loading && <h1>Loading...</h1>}
        {fejl && <h1>Server Boom</h1>}
      </Container>
    )
}

export default Footer;