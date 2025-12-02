import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
    <section className="pt-100 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div id="services" className="badge badge-warning fw-semibold">
                SERVICES
              </div>
              <h2 className="text-center pb-50  mt-4 ">Our Services</h2>
            </div>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              loop={true}
              grabCursor={true}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1, 
                },
                768: {
                  slidesPerView: 2, 
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className="card d-flex flex-column gap-3 h-100">
                  <div>
                    <div className="img-wrapper ratio-9x16 overflow-hidden">
                      <img
                        className="position-absolute w-100 h-100 object-fit-cover"
                        src="/assets/images/card-1.png"
                        alt="Card-image"
                      />
                    </div>
                    <div className="p-4">
                      <h4>IRC & HUD Installation</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card d-flex flex-column gap-3 h-100">
                  <div>
                    <div className="img-wrapper ratio-9x16 overflow-hidden">
                      <img
                        className="position-absolute w-100 h-100 object-fit-cover"
                        src="/assets/images/card-2.png"
                        alt="Card-image"
                      />
                    </div>
                    <div className="p-4">
                      <h4>Re-leveling</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card d-flex flex-column gap-3 h-100">
                  <div>
                    <div className="img-wrapper ratio-9x16 overflow-hidden">
                      <img
                        className="position-absolute w-100 h-100 object-fit-cover"
                        src="/assets/images/card-3.png"
                        alt="Card-image"
                      />
                    </div>
                    <div className="p-4">
                      <h4>Anchoring</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card d-flex flex-column gap-3 h-100">
                  <div>
                    <div className="img-wrapper ratio-9x16 overflow-hidden">
                      <img
                        className="position-absolute w-100 h-100 object-fit-cover"
                        src="/assets/images/card-4.png"
                        alt="Card-image"
                      />
                    </div>
                    <div className="p-4">
                      <h4>Skirting</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card d-flex flex-column gap-3 h-100">
                  <div>
                    <div className="img-wrapper ratio-9x16 overflow-hidden">
                      <img
                        className="position-absolute w-100 h-100 object-fit-cover"
                        src="/assets/images/card-2.png"
                        alt="Card-image"
                      />
                    </div>
                    <div className="p-4">
                      <h4>Foundation setup</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card d-flex flex-column gap-3 h-100">
                  <div>
                    <div className="img-wrapper ratio-9x16 overflow-hidden">
                      <img
                        className="position-absolute w-100 h-100 object-fit-cover"
                        src="/assets/images/card-2.png"
                        alt="Card-image"
                      />
                    </div>
                    <div className="p-4">
                      <h4>Utility connections</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card d-flex flex-column gap-3 h-100">
                  <div>
                    <div className="img-wrapper ratio-9x16 overflow-hidden">
                      <img
                        className="position-absolute w-100 h-100 object-fit-cover"
                        src="/assets/images/card-4.png"
                        alt="Card-image"
                      />
                    </div>
                    <div className="p-4">
                      <h4>Inspection assistance</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="d-flex justify-content-center mt-5">
              <a href="" className="btn btn-primary bg-dark text-white">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
