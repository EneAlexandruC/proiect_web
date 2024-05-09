import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/stema.png";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container style={{ marginLeft: "5rem" }}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            width="150"
            height="150"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ paddingLeft: "0" }}>
            <Nav.Link as={Link} to="/sectii" className="nav-link">
              Sectii
            </Nav.Link>
            <Nav.Link as={Link} to="/echipe" className="nav-link">
              Echipe
            </Nav.Link>
            <Nav.Link as={Link} to="/anunturi" className="nav-link">
              Anunturi
            </Nav.Link>
            <Nav.Link as={Link} to="/galerie" className="nav-link">
              Galerie
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
