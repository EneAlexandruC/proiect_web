import axios from "axios";
import { useState } from "react";
import { Button, ListGroup, Container, Col, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import FromAdd from "./FormAdd";
import FromModifica from "./FormModifica";

function OffcanvasMembrii({
  show,
  handleClose,
  nume,
  membri,
  fetchMembrii,
  idEchipa,
  isAuthorised,
}) {
  const [showFormAdd, setShowFormAdd] = useState(false);
  const [showFormUpdate, setShowFormUp] = useState(false);

  const handleShowFormsAdd = () => setShowFormAdd(true);
  const handleCloseFormsAdd = () => setShowFormAdd(false);

  const handleShowFormsUp = () => setShowFormUp(true);
  const handleCloseFormsUp = () => setShowFormUp(false);

  const handleDeleteButtonClick = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:8800/delete-membru" + id
      );
      fetchMembrii();
    } catch (err) {
      console.log(err);
    }
  };

  const getSex = (membru) => {
    return membru.CNP[0] == 5 || membru.CNP[0] == 1 ? "M" : "F";
  };

  const getVarsta = (membru) => {
    var an = "20";
    if (membru.CNP[0] != 5 && membru.CNP[0] != 6) {
      an = "19";
    }
    var anNastere = an + membru.CNP.slice(1, 3);
    return 2024 - parseInt(anNastere);
  };

  return (
    <Offcanvas show={show} onHide={handleClose} className="anunt-card">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Lista membri: {nume}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup>
          {membri.map((membru) => (
            <ListGroup.Item key={membru.ID} className="anunt-card">
              Nume: {membru.Nume}
              <br />
              Varsta: {getVarsta(membru)}
              <br />
              Sex: {getSex(membru)}
              {isAuthorised && (
                <Container>
                  <Row className="justify-content-center mt-3">
                    <Col>
                      <Button
                        onClick={handleShowFormsUp}
                        className="anunt-card-button"
                      >
                        Modifica
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        onClick={() => {
                          handleDeleteButtonClick(membru.ID);
                        }}
                        className="anunt-card-button"
                      >
                        Sterge
                      </Button>
                    </Col>
                    <FromModifica
                      show={showFormUpdate}
                      handleClose={handleCloseFormsUp}
                      fetchMembrii={fetchMembrii}
                      id={membru.ID}
                    />
                  </Row>
                </Container>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
        {isAuthorised && (
          <Button
            onClick={handleShowFormsAdd}
            className="mt-3 anunt-card-button"
          >
            Adauga
          </Button>
        )}
        <FromAdd
          show={showFormAdd}
          handleClose={handleCloseFormsAdd}
          fetchMembrii={fetchMembrii}
          id={idEchipa}
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffcanvasMembrii;
