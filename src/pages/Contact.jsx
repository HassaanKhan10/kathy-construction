import React from 'react'
import ContactForm from '../components/ContactForm.jsx';

function Contact() {
    return (
        <>
            <section className="inner-page-header position-relative overflow-hidden">
                <img data-aos-duration="1000" data-aos="zoom-out-up" className="absolute-bg object-fit-cover" src="assets/images/3.png" />
                <div className="bg-overly w-100 h-100 position-absolute top-0 start-0 pe-none" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 data-aos-duration="1000" data-aos="fade-up" className="fs-70 text-center text-white">Contact us</h1>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />

            <section className="py-5">
                <div className="container">
                    <h2 className="text-center pb-50" data-aos-duration="1000" data-aos="fade-down">Business Hours</h2>
                    <div className="row row-gap-4 align-items-center">
                        <div data-aos-duration="1000" data-aos="zoom-out-up" className="col-lg-4">
                            <div className="card d-flex flex-column gap-3 h-100 p-4">
                                <h6 className="text-secondary">
                                    Mon–Fri: 9:00 AM – 6:00 PM
                                </h6>
                            </div>
                        </div>
                        <div data-aos-duration="1000" data-aos="zoom-out-up" className="col-lg-4">
                            <div className="card d-flex flex-column gap-3 h-100 p-4">
                                <h6 className="text-secondary">
                                    Sat: 10:00 AM – 3:00 PM
                                </h6>
                            </div>
                        </div>
                        <div data-aos-duration="1000" data-aos="zoom-out-up" className="col-lg-4">
                            <div className="card d-flex flex-column gap-3 h-100 p-4">
                                <h6 className="text-secondary">
                                    Sun: Closed
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Contact