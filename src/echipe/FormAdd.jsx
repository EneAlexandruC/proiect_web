import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

function FromAdd({ show, handleClose, fetchMembrii, id }) {
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [CNP, setCNP] = useState("");

  const handleSubmit = async (event, id) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8800/add-membru", {
        ID_echipa: parseInt(id),
        Nume: nume,
        Prenume: prenume,
        CNP: CNP,
      });

      setNume("");
      setPrenume("");
      setCNP("");

      handleClose();
      fetchMembrii();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adaugare membru</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(event) => {
            handleSubmit(event, id);
          }}
        >
          <Form.Group controlId="formNume">
            <Form.Label>Nume</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nume"
              value={nume}
              onChange={(e) => setNume(e.target.value)}
            />
            <br />
          </Form.Group>
          <Form.Group controlId="formPrenume">
            <Form.Label>Prenume</Form.Label>
            <Form.Control
              type="text"
              placeholder="Prenume"
              value={prenume}
              onChange={(e) => setPrenume(e.target.value)}
            />
            <br />
          </Form.Group>
          <Form.Group controlId="formCNP">
            <Form.Label>CNP</Form.Label>
            <Form.Control
              type="text"
              placeholder="CNP"
              value={CNP}
              onChange={(e) => setCNP(e.target.value)}
            />
            <br />
          </Form.Group>
          <Button
            type="submit"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "0px",
            }}
          >
            Adauga membru
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FromAdd;
