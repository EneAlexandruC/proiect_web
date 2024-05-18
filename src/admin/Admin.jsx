import React, { useState } from "react";
import { Container, Form, Col, Card, Row, Button } from "react-bootstrap";
import CredentialModal from "./CredentialModal";
import { Link } from "react-router-dom";

const authCred = {
  username: "admin",
  password: "1234",
};

function Admin({ isAuthorised, setIsAuthorised }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showCredModal, setShowCredModal] = useState(false);

  const handleClose = () => setShowCredModal(false);
  const handleShow = () => setShowCredModal(true);

  const validate = () => {
    const errors = {};
    if (!username) {
      errors.username = "Username-ul este obligatoriu";
    } else if (username != authCred.username) {
      errors.username = "Username-ul este gresit";
    }
    if (!password) {
      errors.password = "Parola este obligatorie";
    } else if (password != authCred.password) {
      errors.password = "Parola este gresita";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsAuthorised(true);
      setShowModal(true);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header>Autentificare</Card.Header>
            <Card.Body>
              {showModal && (
                <CredentialModal
                  show={showCredModal}
                  handleClose={handleClose}
                />
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Introdu username-ul"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Parola</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Introdu parola"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3"
                  onClick={handleShow}
                >
                  Conecteaza-te
                </Button>

                {isAuthorised && (
                  <Link to="/">
                    <Button
                      variant="primary"
                      type="submit"
                      className="mt-3"
                      style={{ marginLeft: "20.6rem" }}
                      onClick={() => setIsAuthorised(false)}
                    >
                      Deconecteaza-te
                    </Button>
                  </Link>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
