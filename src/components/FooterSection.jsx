import React from "react";

function FooterSection() {
  return (
    <>
      <section className="mt-100 py-5 cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-row flex-md-row flex-column align-items-center justify-content-between gap-3 text-md-start text-center">
                <div data-aos-duration="1000" data-aos="fade-right">
                  <h2>Ready to get started?</h2>
                  <p className="mt-3 mt-md-4">
                    Contact us today for a quote or consultation!
                  </p>
                </div>
                <div class="h-fit" data-aos-duration="1000" data-aos="fade-left">
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
                      <img src="assets/images/logo.png" alt="" />
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
                  <div className="social-links d-flex flex-wrap align-items-center justify-content-center justify-content-xl-end gap-4 mt-4">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round">
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                      <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" />
                    </svg></a>
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round">
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                      <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" />
                      <path d="M17.5078 6.5L17.4988 6.5" />
                    </svg></a>

                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M2.50012 12C2.50012 7.52166 2.50012 5.28249 3.89136 3.89124C5.28261 2.5 7.52178 2.5 12.0001 2.5C16.4785 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4785 21.5 12.0001 21.5C7.52178 21.5 5.28261 21.5 3.89136 20.1088C2.50012 18.7175 2.50012 16.4783 2.50012 12Z" />
                      <path d="M7.00012 17L11.1937 12.8065M17.0001 7L12.8066 11.1935M12.8066 11.1935L9.7779 7H7.00012L11.1937 12.8065M12.8066 11.1935L17.0001 17H14.2223L11.1937 12.8065" />
                    </svg></a>
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" />
                      <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" />
                    </svg></a>
                  </div>
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
