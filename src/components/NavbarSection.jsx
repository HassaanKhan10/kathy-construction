import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarSection() {
  return (
    <section
      className="nav-section py-3 px-3 position-fixed top-0 start-0 end-0"
      data-aos-duration="300"
      data-aos="fade-down"
    >
      <Container className="py-2 py-lg-0">
        <Navbar expand="lg" collapseOnSelect className="py-0">
          <Navbar.Brand as={Link} to="/" className="me-0 px-3">
            <img src="assets/images/logo.png" alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar" className="justify-content-end">
            <Nav className="px-lg-4 py-3 pb-0 py-lg-0 justify-content-center">
              <Nav.Link as={Link} to="/" >
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/about" >
                About us
              </Nav.Link>

              <Nav.Link as={Link} to="/services" >
                Services
              </Nav.Link>

              <Nav.Link as={Link} to="/gallery" >
                Gallery
              </Nav.Link>

              <Nav.Link as={Link} to="/faq" >
                FAQ
              </Nav.Link>
            </Nav>

            <div className="d-flex align-items-center">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
}

export default NavbarSection;
