import React, { useEffect, useState } from "react";
import axios from "axios";
import Anunt from "./Anunt";
import { Container, Row, Col, Button } from "react-bootstrap";
import FromAnunt from "./FromAnunt";

function Anunturi() {
  const [anunturi, setAnunturi] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchAnunturi = async () => {
      try {
        const res = await axios.get("http://localhost:8800/get-anunturi");
        setAnunturi(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAnunturi();
  }, []);

  return (
    <>
      <Container style={{ paddingTop: "2rem" }}>
        <Row>
          {anunturi.map((anunt) => (
            <Col key={anunt.ID} style={{ padding: "2rem" }}>
              <Anunt
                id={anunt.ID}
                title={anunt.Title}
                author={anunt.Author}
                description={anunt.Description}
                url={anunt.Url}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="d-flex justify-content-end">
        <Button
          className="add-anunt"
          style={{ border: "0px" }}
          onClick={handleShow}
        >
          Adauga anunturi!
        </Button>
        <FromAnunt show={show} handleClose={handleClose} />
      </Container>
    </>
  );
}

export default Anunturi;
