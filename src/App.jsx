import React from "react";
import './styles/app.css'; 
import './styles/index.css';

function Navbar() {
  return (
    <>
   <section className="nav-section py-3 px-3 position-fixed top-0 start-0 end-0">
  <div className="container py-2 py-lg-0 overflow-visible">
    <nav className="navbar navbar-expand-lg py-0 gap-0 gap-lg-4 gap-xl-5">
      <a className="navbar-brand me-0" href="/">
        <img width={130} height={48} src="./assets/images/tiepk-logo.svg" alt="logo" />
      </a>
      <button className="navbar-toggler border-0 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        </span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav px-lg-4 me-lg-4 me-xxl-5 py-3 pb-0 py-lg-0">
          <li className="nav-item">
            <a className="nav-link home-nav text-grey text-hover-white active" href="#hero-section">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-grey text-hover-white" href="#about-us">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-grey text-hover-white" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-grey text-hover-white" href="#locations">Locations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-grey text-hover-white" href="#contact">Contact us</a>
          </li>
        </ul>
        <div className="d-flex align-items-center gap-3 gap-xl-4 p-3 pt-lg-0 pb-2 pb-lg-0 ps-4 ps-lg-0 pe-lg-0 contact-info">
          <i style={{fontSize: 18}} className="fas fa-at text-secondary fw-light d-none d-xl-block" />
          <div className="d-flex flex-column">
            <a href="tel: 022-2032560" className="text-primary fw-semibold text-nowrap">022-2032560</a>
            <span className="fs-12 fw-medium text-secondary text-nowrap">Head Office</span>
          </div>
          <a href="mailto: info@tiepk.com" className="mail-icon-wrapper ms-auto">
            <i className="fa-solid fa-comment" />
          </a>
        </div>
      </div>
    </nav>
  </div>
</section>

<section id="hero-section" className="hero-section d-flex align-items-center position-relative">
  <div className="bg-overly w-100 h-100 position-absolute top-0 start-0 z-1 pe-none" />
  <img style={{objectPosition: 'bottom'}} width={2114} height={764} className="w-100 h-100 object-fit-cover object-position position-absolute top-0 start-0 pe-none" src="./assets/images/banner-image.png" alt="banner-image" />
  <div className="container position-relative z-2">
    <div className="row">
      <div data-aos="fade-right" data-aos-duration={500} className="col-12 col-lg-7">
        <h1 className="fs-70 text-white fw-bold">The Enterprise of <span className="color-yellow">Endless</span>
          possibilities</h1>
        <p className="text-white mt-3 fs-18">The Indus Enterprises offers crane, lifter, and labor services, bringing endless possibilities for efficient and reliable logistics solutions.</p>
        <div className="d-flex flex-wrap gap-4 mt-5">
          <a href="#about-us" className="btn btn-primary">Our Services</a>
          <a href="#contact" className="btn btn-secondary">Contact us</a>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
}

export default Navbar;
