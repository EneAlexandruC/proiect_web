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

  const fetchMembrii = async (id) => {
    try {
      const res = await axios.get("http://localhost:8800/get-membri" + id);
      setMembri(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleShow = () => {
    setShow(true);
    fetchMembrii(props.id);
  };

  return (
    <>
      <Container>
        <Card className="text-center anunt-card">
          <Card.Body>
            <Card.Title className="p-4 m-3">
              <h1>{props.nume}</h1>
            </Card.Title>
            <Button
              variant="primary"
              onClick={handleShow}
              className="anunt-card-button"
            >
              Arata membri
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Inscrisa la data de {props.dataInscrierii}
          </Card.Footer>
        </Card>
      </Container>
      <OffcanvasMembrii
        isAuthorised={props.isAuthorised}
        show={show}
        handleClose={handleClose}
        nume={props.nume}
        idEchipa={props.id}
        membri={membri}
        fetchMembrii={() => {
          fetchMembrii(props.id);
        }}
      />
    </>
  );
}

export default CardEchipa;
