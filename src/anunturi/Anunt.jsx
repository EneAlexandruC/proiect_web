import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function Anunt(props) {
  const handleClick = async (id) => {
    try {
      await axios.delete("http://localhost:8800/delete-anunturi" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="anunt-card" style={{ width: "21rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>By {props.author}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Container>
          <Row>
            <Col>
              <Button
                className="anunt-card-button"
                variant="primary"
                href={props.url}
              >
                Vezi mai mult
              </Button>
            </Col>
            <Col>
              <Button
                className="anunt-card-button"
                variant="primary"
                onClick={() => handleClick(props.id)}
              >
                Sterge
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Anunt;
