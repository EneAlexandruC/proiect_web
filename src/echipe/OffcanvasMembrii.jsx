import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasMembrii({ show, handleClose, nume, membri }) {
  const getSex = (membru) => {
    return membru.CNP[0] == 5 ? "M" : "F";
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
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Lista membri: {nume}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup>
          {membri.map((membru) => (
            <ListGroup.Item key={membru.ID}>
              Nume: {membru.Nume}, Varsta: {getVarsta(membru)}, Sex:
              {getSex(membru)}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffcanvasMembrii;
