import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Container
        style={{
          textAlign: "center",
          fontSize: "6rem",
          paddingBottom: "10rem",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <Row>
          <Col>Unde ne puteti gasi?</Col>
        </Row>
      </Container>
      <Container
        style={{
          textAlign: "center",
          fontSize: "3rem",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <Row className="pb-3">
          <Col>Adresa: Craiova, Strada Libertatii, Nr. 16</Col>
        </Row>
        <Row className="pb-3">
          <Col>E-mail: daciiliberi@gmail.com</Col>
        </Row>
        <Row className="pb-3">
          <Col>Telefon: +40 778 395 667</Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
