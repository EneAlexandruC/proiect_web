import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import FormModificaAnunt from "./FormModificaAnunt";

function Anunt(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDeleteButtonClick = async (id) => {
    try {
      await axios.delete("http://localhost:8800/delete-anunturi" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="anunt-card" style={{ width: "33rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>By {props.author}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Container>
          <Row>
            <Col xs="auto">
              <Button
                className="anunt-card-button"
                variant="primary"
                href={props.url}
              >
                Vezi mai mult
              </Button>
            </Col>
            {props.isAuthorised && (
              <>
                <Col xs="auto">
                  <Button
                    className="anunt-card-button"
                    variant="primary"
                    onClick={() => handleDeleteButtonClick(props.id)}
                  >
                    Sterge
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button
                    className="anunt-card-button"
                    variant="primary"
                    onClick={handleShow}
                  >
                    Modifica
                  </Button>
                </Col>
              </>
            )}
            <FormModificaAnunt
              show={show}
              handleClose={handleClose}
              id={props.id}
              title={props.title}
              author={props.author}
              description={props.description}
              url={props.url}
            />
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Anunt;
