import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/stema.png";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container style={{ marginLeft: "5rem" }}>
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#features" className="nav-link">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-link">
              Pricing
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="nav-link">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="nav-link">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="nav-link">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="nav-link">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
