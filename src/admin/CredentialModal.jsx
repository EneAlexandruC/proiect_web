import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function CredentialModal({ show, handleClose }) {
  return (
    <>
      <Modal show={show}>
        <Modal.Body>
          Datele de validare au fost verificate cu succes!
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CredentialModal;
