import React from 'react'
import useFancybox from "../hooks/useFancybox.js";

function Gallery() {
  const [fancyboxRef] = useFancybox({
    caption: (fancybox, carousel, slide) => slide.$trigger.dataset.caption,
  });

  return (
    <>
      <section className="inner-page-header position-relative overflow-hidden">
        <img
          data-aos-duration="1000"
          data-aos="zoom-out-up"
          className="absolute-bg object-fit-cover"
          src="assets/images/9.png"
        />
        <div className="bg-overly w-100 h-100 position-absolute top-0 start-0 pe-none" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1
                data-aos-duration="1000"
                data-aos="fade-up"
                className="fs-70 text-center text-white"
              >
                Gallery
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-100 pb-5">
          <div className="row">
            <div className="col-12">
              <div ref={fancyboxRef} className="fancybox-gallery d-grid grid-cols-3 gap-2">

                <a data-fancybox="gallery"
                  href="/assets/images/2.png"
                  data-caption="A house finally brought to life.">
                  <img src="/assets/images/2.png" alt="gallery-image" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/3.png"
                  data-caption="A house finally brought to life.">
                  <img src="/assets/images/3.png" alt="gallery-image" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/4.png"
                  data-caption="A house finally brought to life.">
                  <img src="/assets/images/4.png" alt="gallery-image" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/5.png"
                  data-caption="A house finally brought to life.">
                  <img src="/assets/images/5.png" alt="gallery-image" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/6.png"
                  data-caption="A house finally brought to life.">
                  <img src="/assets/images/6.png" alt="gallery-image" />
                </a>


                <a data-fancybox="gallery"
                  href="/assets/images/7.png"
                  data-caption="A house finally brought to life.">
                  <img src="/assets/images/7.png" alt="gallery-image" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/8.png"
                  data-caption="A house finally brought to life.">
                  <img src="/assets/images/8.png" alt="gallery-image" />
                </a>


                <a data-fancybox="gallery"
                  href="/assets/images/9.png"
                  data-caption="A house finally brought to life.">
                  <img src="/assets/images/9.png" alt="gallery-image" />
                </a>


                <a data-fancybox="gallery"
                  href="/assets/images/2.png"
                  data-caption="A house finally brought to life.">
                  <img src="/assets/images/card-1.png" alt="gallery-image" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/2.png"
                  data-caption="A house finally brought to life.">
                  <img src="/assets/images/hero-section-image.png" alt="gallery-image" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/2.png"
                  data-caption="A house finally brought to life.">
                  <img src="/assets/images/hero-2.png" alt="gallery-image" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/1.png"
                  data-caption="A house finally brought to life.">
                  <img src="/assets/images/1.png" alt="gallery-image" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
