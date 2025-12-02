import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavbarSection() {
  return (
    <div>
      <section className="nav-section py-3 px-3 position-fixed top-0 start-0 end-0">
        <div className="container py-2 py-lg-0">
          <nav className="navbar navbar-expand-lg py-0 ">
            <a className="navbar-brand me-0 p-3" href="/">
              <h6 className="text-white">Kathy's Logo</h6>
            </a>
            <button
              className="navbar-toggler border-0 px-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav px-lg-4 py-3 pb-0 py-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link home-nav text-grey text-hover-white active"
                    href="#hero-section"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-grey text-hover-white"
                    href="#about-us"
                  >
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-grey text-hover-white"
                    href="#services"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-grey text-hover-white"
                    href="#locations"
                  >
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-grey text-hover-white"
                    href="#contact"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-3 gap-xl-4 p-3 pt-lg-0 pb-2 pb-lg-0 ps-4 ps-lg-0 pe-lg-0 contact-info">
                <a
                  href="#about-us"
                  className="btn btn-primary rounded-0 py-4 px-5"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default NavbarSection;
