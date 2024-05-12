import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasMembrii({ show, handleClose, nume }) {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{nume}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffcanvasMembrii;
