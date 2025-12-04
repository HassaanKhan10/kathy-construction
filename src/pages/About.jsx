import React from 'react'

function about() {
  return (
    <>
      <section className="inner-page-header position-relative overflow-hidden">
        <img data-aos-duration="1000" data-aos="zoom-out-up" className="absolute-bg object-fit-cover" src="/public/assets/images/card-1.png" />
        <div className="bg-overly w-100 h-100 position-absolute top-0 start-0 pe-none" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 data-aos-duration="1000" data-aos="fade-up" className="fs-70 text-center text-white">About us</h1>
            </div>
          </div>
        </div>
      </section>

      <div className='container-sm pt-100 pb-5'>
        <div className='row'>
          <div className='col-12 post-content'>
            <p className='font-h6 fw-medium'>Kathy Construction is a trusted provider of mobile and manufactured home installation services, specializing in both IRC and HUD-compliant setups. With years of hands-on experience, we ensure every home is installed safely, securely, and according to all required building codes.</p>
            <p>We take pride in delivering high-quality workmanship, completing each project with precision and attention to detail. From foundation preparation to final inspection support, our team manages the full installation process with professionalism and reliability.</p>
            <h2 className='font-h4'>Our Expertise</h2>
            <p>We provide a complete range of installation solutions, including:</p>
            <ul>
              <li>
                IRC and HUD home installation
              </li>
              <li>
                Foundation setup and pier systems
              </li>
              <li>
                Home leveling and re-leveling
              </li>
              <li>
                Anchoring and tie-down systems
              </li>
              <li>
                Skirting installation
              </li>
              <li>
                Utility connection coordination
              </li>
              <li>
                Inspection preparation and compliance checks
              </li>
            </ul>
            <h2 className='font-h4'>Why We’re Different</h2>
            <p>Our commitment to safety, compliance, and long-term durability sets us apart. We focus on:</p>
            <ul>
              <li>Code-compliant installation practices</li>
              <li>Transparent communication</li>
              <li>Fast and clean job completion</li>
              <li>Experienced, trained, and insured professionals</li>
            </ul>
            <h2 className='font-h4'>Certifications</h2>
            <p>Our team is licensed, insured, and committed to upholding all HUD and IRC installation standards. We prioritize safety, quality, and compliance in every project to ensure your home is installed correctly and efficiently.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default about