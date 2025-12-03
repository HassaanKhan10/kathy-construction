import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarSection() {
  return (
    <section
      className="nav-section py-3 px-3 position-fixed top-0 start-0 end-0"
      data-aos-duration="300"
      data-aos="fade-down"
    >
      <Container className="py-2 py-lg-0">
        <Navbar expand="lg" collapseOnSelect className="py-0">
          {/* Logo */}
          <Navbar.Brand href="/" className="me-0 px-3">
            <img src="assets/images/logo.png" alt="logo" />
          </Navbar.Brand>

          {/* Toggler */}
          <Navbar.Toggle aria-controls="main-navbar" />

          {/* Menu Items */}
          <Navbar.Collapse id="main-navbar" className="justify-content-end">
            <Nav className="px-lg-4 py-3 pb-0 py-lg-0">
              <Nav.Link href="#hero-section" className="home-nav text-grey text-hover-white">
                Home
              </Nav.Link>

              <Nav.Link href="#about-us" className="text-grey text-hover-white">
                About us
              </Nav.Link>

              <Nav.Link href="#services" className="text-grey text-hover-white">
                Services
              </Nav.Link>

              <Nav.Link href="#locations" className="text-grey text-hover-white">
                Gallery
              </Nav.Link>

              <Nav.Link href="#contact" className="text-grey text-hover-white">
                FAQ
              </Nav.Link>
            </Nav>

            {/* Button */}
            <div className="d-flex align-items-center ms-lg-3">
              <a href="#about-us" className="btn btn-primary me-3">
                Get a Quote
              </a>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
}

export default NavbarSection;
