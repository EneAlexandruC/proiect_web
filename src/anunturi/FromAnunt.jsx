import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

function FromAnunt({ show, handleClose }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8800/post-anunturi", {
        Title: title,
        Author: author,
        Description: description,
        Url: url,
      });
      console.log("Title:", title);
      console.log("Author:", author);
      console.log("Description:", description);
      console.log("Url:", url);

      setTitle("");
      setAuthor("");
      setDescription("");
      setUrl("");

      handleClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adăugare anunț</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Titlu</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduceti titlul anuntului"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
          </Form.Group>
          <Form.Group controlId="formAuthor">
            <Form.Label>Autor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduceti numele autorului"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <br />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Descriere</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Introduceti descrierea anuntului"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
          </Form.Group>
          <Form.Group controlId="formUrl">
            <Form.Label>URL</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Introduceti calea catre stire"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
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
            Adauga anunt
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FromAnunt;
