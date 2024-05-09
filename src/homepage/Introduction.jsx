import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import homepageTeamClub from "../assets/homepage-team-club.jpg";
import backgroundImage from "../assets/background-player-on-right.jpg";

function Introduction() {
  return (
    <Container style={{ marginLeft: 0, marginTop: "5rem" }}>
      <Row style={{ padding: "5rem" }}>
        <Col xs="auto">
          <h1
            className="custom-font"
            style={{ animation: "fadeIn 1s ease-in-out" }}
          >
            Bine ai venit pe site-ul web al clubului <b>SUGE-O SPORTIV</b>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="p-5">
          <h4
            style={{
              animation: "fadeIn 1s ease-in-out",
              textAlign: "center",
              marginLeft: "5rem",
              marginRight: "5rem",
            }}
          >
            Sed hendrerit a nisl ut sagittis. Aliquam quis condimentum elit.
            Maecenas tempor sed orci et iaculis. Integer vel diam placerat,
            tincidunt lacus eu, placerat elit. Nullam vestibulum odio quis
            gravida facilisis. Phasellus ultricies nisl in ante vestibulum,
            sollicitudin tempus nisi egestas. Aenean erat enim, placerat nec mi
            eu, luctus imperdiet justo. Sed sagittis feugiat aliquam. Mauris
            nibh velit, scelerisque sit amet viverra vitae, dictum nec arcu.
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;
