import React, { useEffect, useState } from "react";
import axios from "axios";
import Anunt from "./Anunt";
import { Container, Row, Col, Button } from "react-bootstrap";
import FromAddAnunt from "./FromAddAnunt";

function Anunturi({ isAuthorised }) {
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
            <Col
              key={anunt.ID}
              style={{ padding: "2rem", animation: "fadeIn 1s ease-in-out" }}
            >
              <Anunt
                id={anunt.ID}
                title={anunt.Title}
                author={anunt.Author}
                description={anunt.Description}
                url={anunt.Url}
                isAuthorised={isAuthorised}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {isAuthorised && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "4.5rem",
            paddingTop: "1.5rem",
          }}
        >
          <Button
            className="add-anunt"
            style={{ border: "0px" }}
            onClick={handleShow}
          >
            Adauga anunturi
          </Button>
        </div>
      )}
      <FromAddAnunt show={show} handleClose={handleClose} />
    </>
  );
}

export default Anunturi;
