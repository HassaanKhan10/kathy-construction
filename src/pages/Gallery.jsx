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
          src="assets/images/card-1.png"
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
                  href="/assets/images/card-1.png"
                  data-caption="Installation Work 1">
                  <img src="/assets/images/card-1.png" alt="Installation Work 1" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/card-2.png"
                  data-caption="Installation Work 2">
                  <img src="/assets/images/card-2.png" alt="Installation Work 2" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/card-3.png"
                  data-caption="Installation Work 3">
                  <img src="/assets/images/card-3.png" alt="Installation Work 3" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/card-4.png"
                  data-caption="Installation Work 4">
                  <img src="/assets/images/card-4.png" alt="Installation Work 4" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/hero-2.png"
                  data-caption="Hero Section Image 2">
                  <img src="/assets/images/hero-2.png" alt="Hero Section Image 2" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/hero-3.png"
                  data-caption="Hero Section Image 3">
                  <img src="/assets/images/hero-3.png" alt="Hero Section Image 3" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/hero-4.png"
                  data-caption="Hero Section Image 4">
                  <img src="/assets/images/hero-4.png" alt="Hero Section Image 4" />
                </a>

                <a data-fancybox="gallery"
                  href="/assets/images/hero-section-image.png"
                  data-caption="Hero Main Image">
                  <img src="/assets/images/hero-section-image.png" alt="Hero Main Image" />
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
