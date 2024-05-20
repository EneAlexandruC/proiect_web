import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/galerie_poza_1.jpg";
import img2 from "../assets/galerie_poza_4.jpg";

function Galerie() {
  return (
    <Container style={{ fontSize: "2rem" }}>
      <Row style={{ animation: "fadeIn 1s ease-in-out" }}>
        <Col>
          <img
            src={img1}
            alt="poza_demonstratie-1"
            width="480"
            height="300"
            className="poza-galerie"
          />
        </Col>
        <Col style={{ paddingTop: "4rem" }}>
          <i>
            Sportul este un izvor de sănătate şi prospeţime, un factor de
            longevitate. <br />
            -Ana Aslan
          </i>
        </Col>
      </Row>
      <Row style={{ animation: "fadeIn 1s ease-in-out" }}>
        <Col style={{ paddingTop: "2rem" }}>
          <i>
            Sportul serios nu are legătură cu jocul cinstit. Are legătură cu
            ura, invidia, lauda de sine, dispreţul faţă de toate regulile şi
            plăcerea sadică de a privi brutalitatea. Cu alte cuvinte, este
            război fără împuşcături. <br />
            -George Orwell
          </i>
        </Col>
        <Col>
          <img
            src={img2}
            alt="poza_demonstratie-1"
            width="700"
            height="400"
            className="poza-galerie"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Galerie;
