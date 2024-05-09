import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

function Introduction() {
  return (
    <Container style={{ marginLeft: 0, marginTop: "5rem" }}>
      <Row style={{ padding: "5rem" }}>
        <Col xs="auto">
          <h2
            className="custom-font"
            style={{ animation: "fadeIn 1s ease-in-out" }}
          >
            Clubul Sportiv "Padurarii Dacici" este o comunitate dedicata
            promovarii unui stil de viata sanatos prin activitati sportive
            diverse. Infiiat in 2010, clubul nostru are ca scop sa ofere
            oportunitati de antrenament si competitie pentru toate varstele si
            nivelurile de aptitudine fizica.
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;
