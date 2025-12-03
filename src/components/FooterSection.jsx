import React from "react";

function FooterSection() {
  return (
    <>
      <section className="mt-100 py-5 cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-row flex-md-row flex-column align-items-center justify-content-between gap-3 text-md-start text-center">
                <div data-aos-duration="1000"  data-aos="fade-right">
                  <h2>Ready to get started?</h2>
                  <p className="mt-3 mt-md-4">
                    Contact us today for a quote or consultation!
                  </p>
                </div>
                <div class="h-fit" data-aos-duration="1000"  data-aos="fade-left">
                  <a href="#contact" class="btn btn-secondary">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section pt-50 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column gap-4">
              <div className="row align-items-center justify-content-between pb-50 row-gap-4">
                <div className="col-12 col-xl-2 d-flex flex-column gap-4">
                  <div className="footer-logo mx-auto mx-xl-start">
                    <a href="/">
                      <img src="/public/assets/images/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-12 col-xl-10">
                  <ul className="footer-nav list-unstyled d-flex flex-wrap align-items-center justify-content-center justify-content-xl-end gap-4 m-0 p-0">
                    <li className="nav-item">
                      <a
                        href=""
                        className="d-flex align-items-center gap-2 py-1"
                      >
                        <i className="fa-solid fa-phone" />
                        <span>About us</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href=""
                        className="d-flex align-items-center gap-2 py-1"
                      >
                        <i className="fa-solid fa-phone" />
                        <span>Services</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="tel: +92 318-2011060"
                        className="d-flex align-items-center gap-2 py-1"
                      >
                        <i className="fa-solid fa-phone" />
                        <span>Gallery</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href=""
                        className="d-flex align-items-center gap-2 py-1"
                      >
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
                  <p className="fs-14 text-grey text-center text-lg-start">
                    © <span id="year">2025</span> Kathy Construction. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterSection;
