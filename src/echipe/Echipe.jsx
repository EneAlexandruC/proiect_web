import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardEchipa from "./CardEchipa";
import axios from "axios";

function Echipe({ isAuthorised }) {
  const [echipe, setEchipe] = useState([]);

  useEffect(() => {
    console.log("Fetching");
    const fetchEchipe = async () => {
      try {
        const res = await axios.get("http://localhost:8800/get-echipe");
        console.log(res.data);
        setEchipe(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEchipe();
  }, []);

  return (
    <Container style={{ paddingTop: "2rem" }}>
      <Row>
        {echipe.map((echipa) => {
          console.log("echipa");
          return (
            <Col key={echipa.ID} style={{ padding: "2rem" }}>
              <CardEchipa
                id={echipa.ID}
                nume={echipa.Nume}
                dataInscrierii={echipa.DataInscriere}
                isAuthorised={isAuthorised}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Echipe;
