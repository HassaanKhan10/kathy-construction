import React from "react";
import HeroSlider from "./components/HeroSlider";
import './styles/App.css';
import './styles/index.css';

function Navbar() {
  return (
    <>
      <section className="nav-section py-3 px-3 position-fixed top-0 start-0 end-0">
        <div className="container py-2 py-lg-0">
          <nav className="navbar navbar-expand-lg py-0 ">
            <a className="navbar-brand me-0 p-3" href="/">
              <h6 className="text-white">Kathy's Logo</h6>
            </a>
            <button className="navbar-toggler border-0 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
              </span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav px-lg-4 py-3 pb-0 py-lg-0">
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
                  <a className="nav-link text-grey text-hover-white" href="#locations">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-grey text-hover-white" href="#contact">FAQ</a>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-3 gap-xl-4 p-3 pt-lg-0 pb-2 pb-lg-0 ps-4 ps-lg-0 pe-lg-0 contact-info">
                <a href="#about-us" className="btn btn-primary rounded-0 py-4 px-5">Get a Quote</a>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <section id="hero-section" className="hero-section d-flex align-items-center position-relative">
        <div className="bg-overly w-100 h-100 position-absolute top-0 start-0 z-1 pe-none" />
        <img className="w-100 h-100 object-fit-cover object-position position-absolute top-0 start-0 pe-none" src="/assets/images/hero-2.png" alt="banner-image" />
        <div className="container position-relative z-2">
          <div className="row">
            <div data-aos="fade-right" data-aos-duration={500} className="col-12 col-lg-7">
              <h1 className="text-white">Kathy Construction</h1>
              <p className="text-white mt-3 fs-24">Professional, Code-Compliant IRC & HUD Home Installation Services Built for Safety, Stability, and Long-Term Performance.</p>
              <div className="d-flex flex-wrap gap-4 mt-5">
                <a href="#about-us" className="btn btn-primary">Our Services</a>
                <a href="#contact" className="btn btn-secondary">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="about-us" className="about-section container py-100">
        <div className="row">
          <div className="col-12">
            <div data-aos-duration={1000} data-aos="fade-in" className="col-12 col-lg-9">
              <div id="services" className="badge badge-warning fw-semibold">ABOUT INSTALLATION</div>
              <h2 className="font-h4 mt-4 fw-semibold">From foundation setup to final inspection, our team handles every step of your IRC & HUD home installation with precision and care. Your dream home, installed right.</h2>
              <a className="btn btn-sm btn-secondary mt-4" href="#experience-section">Learn more</a>
            </div>
          </div>
        </div>
      </section>


      <section style={{ background: '#121212' }} className="choose-section py-100">
        <div className="container">
          <div className="row align-items-center">
            <h2 className="text-white text-center pb-100">Why Choose Us?</h2>
            <div className="col-lg-4">
              <div className="card d-flex flex-column gap-3 h-100 p-4">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#FED403" stroke-width="1.5" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="#FED403" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <h5 className="text-white">Certified & Experienced Installers</h5>
                <p className="text-white">We bring proven expertise in IRC and HUD home installation, ensuring every project meets the highest standards.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card d-flex flex-column gap-3 h-100 p-4">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 11C15.5 9.067 13.933 7.5 12 7.5C10.067 7.5 8.5 9.067 8.5 11C8.5 12.933 10.067 14.5 12 14.5C13.933 14.5 15.5 12.933 15.5 11Z" stroke="#FED403" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15.481 11.3499C15.803 11.4475 16.1445 11.5 16.4983 11.5C18.4313 11.5 19.9983 9.933 19.9983 8C19.9983 6.067 18.4313 4.5 16.4983 4.5C14.6834 4.5 13.1911 5.8814 13.0156 7.65013" stroke="#FED403" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.9827 7.65013C10.8072 5.8814 9.31492 4.5 7.5 4.5C5.567 4.5 4 6.067 4 8C4 9.933 5.567 11.5 7.5 11.5C7.85381 11.5 8.19535 11.4475 8.51727 11.3499" stroke="#FED403" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M22 16.5C22 13.7386 19.5376 11.5 16.5 11.5" stroke="#FED403" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.5 19.5C17.5 16.7386 15.0376 14.5 12 14.5C8.96243 14.5 6.5 16.7386 6.5 19.5" stroke="#FED403" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7.5 11.5C4.46243 11.5 2 13.7386 2 16.5" stroke="#FED403" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h5 className="text-white">Fast, Clean, and Professional Work</h5>
                <p className="text-white">We bring proven expertise in IRC and HUD home installation, ensuring every project meets the highest standards.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card d-flex flex-column gap-3 h-100 p-4">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z" stroke="#FED403" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z" stroke="#FED403" stroke-width="1.5" />
                </svg>

                <h5 className="text-white">IRC & HUD Code-Compliant Installations</h5>
                <p className="text-white">We bring proven expertise in IRC and HUD home installation, ensuring every project meets the highest standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroSlider />

<section className="mt-100 px-3 px-md-4 px-lg-5 cta-section">
  <div className="container">
    <div className="position-relative overflow-hidden py-4 py-md-5 px-4 inner-wrapper text-center">
      <div className="col-12 col-sm-8 col-md-6 mx-auto">
        <h2 className="text-white">
          Ready to get started?
        </h2>
        <p className="mt-3 mt-md-4 text-white">
          Contact us today for a quote or consultation!.
        </p>
        <button className="btn btn-secondary mt-3 mt-md-4 mx-auto d-block" data-cal-namespace="30min" data-cal-link="ibad-khan/30min" data-cal-config="{&quot;layout&quot;:&quot;month_view&quot;}">
          Get a Quote
        </button>
      </div>
    </div>
  </div>
</section>

<section className="footer-section pt-50 pb-4 mt-100">
  <div className="container">
    <div className="row">
      <div className="col-12 d-flex flex-column gap-4">
        <div className="row align-items-center justify-content-between pb-50 row-gap-4">
          <div className="col-12 col-xl-2 d-flex flex-column gap-4">
            <div className="img-wrapper mx-auto mx-xl-start">
              <a href="/">
                <h6 className="text-white">Kathy's Logo</h6>
              </a>
            </div>
          </div>
          <div className="col-12 col-xl-10">
            <ul className="footer-nav list-unstyled d-flex flex-wrap align-items-center justify-content-center justify-content-xl-end gap-4 m-0 p-0">
              <li className="nav-item">
                <a href="" className="d-flex align-items-center gap-2 py-1">
                  <i className="fa-solid fa-phone" />
                  <span>About us</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="d-flex align-items-center gap-2 py-1">
                  <i className="fa-solid fa-phone" />
                  <span>Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="tel: +92 318-2011060" className="d-flex align-items-center gap-2 py-1">
                  <i className="fa-solid fa-phone" />
                  <span>Gallery</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="d-flex align-items-center gap-2 py-1">
                  <i className="fa-solid fa-phone" />
                  <span>FAQ</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid px-0 pt-4 bottom-container">
    <div className="container">
      <div className="row flex-wrap-reverse align-items-center row-gap-3">
        <div className="col-12 col-lg-8 mx-auto">
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-2">
            <p className="fs-14 text-grey text-center text-lg-start">© <span id="year">2025</span> Kathy Construction. All rights
              reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





    </>
  );
}

export default Navbar;
