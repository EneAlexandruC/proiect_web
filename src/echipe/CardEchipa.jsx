import React, { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import OffcanvasMembrii from "./OffcanvasMembrii";
import axios from "axios";

function CardEchipa(props) {
  const [show, setShow] = useState(false);
  const [membri, setMembri] = useState([]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    const fetchMembrii = async (id) => {
      try {
        const res = await axios.get("http://localhost:8800/get-membri" + id);
        setMembri(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    setShow(true);
    fetchMembrii(props.id);
  };

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
            Inscrisa la data de {props.dataInscrierii}
          </Card.Footer>
        </Card>
      </Container>
      <OffcanvasMembrii
        show={show}
        handleClose={handleClose}
        nume={props.nume}
        id={props.id}
        membri={membri}
      />
    </>
  );
}

export default CardEchipa;
