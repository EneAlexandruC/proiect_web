import React, { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import OffcanvasMembrii from "./OffcanvasMembrii";

function CardEchipa(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{props.nume}</Card.Title>
            <Button variant="primary" onClick={handleShow}>
              Arata membrii
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Echipa inscrisa la data de:{props.dataInscrierii}
          </Card.Footer>
        </Card>
      </Container>
      <OffcanvasMembrii
        show={show}
        handleClose={handleClose}
        nume={props.nume}
      />
    </>
  );
}

export default CardEchipa;
