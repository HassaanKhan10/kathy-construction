import React from 'react'
import ContactForm from '../components/ContactForm.jsx';

function Contact() {
    return (
        <>
            <section className="inner-page-header position-relative overflow-hidden">
                <img data-aos-duration="1000" data-aos="zoom-out-up" className="absolute-bg object-fit-cover" src="assets/images/card-1.png" />
                <div className="bg-overly w-100 h-100 position-absolute top-0 start-0 pe-none" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 data-aos-duration="1000" data-aos="fade-up" className="fs-70 text-center text-white">Contact us</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="form-section py-100 position-relative">
                <div className="container position-relative z-2">
                    <div className="row flex-wrap-reverse justify-content-between">
                        <div className='col-12 col-lg-6'> <iframe title="map" className="w-100 h-100 object-fit-cover " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52918450.40025157!2d-161.85240697328845!3d35.94976132466603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1764912116497!5m2!1sen!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        </div>
                        <div className="col-12 col-lg-6" data-aos="fade-left">
                            <form className="form d-flex flex-column shadow-sm rounded-3 gap-3 gap-lg-4">
                                <div>
                                    <h2 className="">Get a quote</h2>
                                    <p className="fw-medium mt-3">Our friendly team would love to hear from you!</p>
                                </div>
                                <div data-aos="fade-in" className="w-100 d-flex flex-wrap flex-sm-nowrap gap-3 mt-3 mt-lg-0 aos-init aos-animate">
                                    <div className="w-100 d-flex flex-column">
                                        <label className="d-none d-sm-block" htmlFor="first-name">First name <span className="text-danger">*</span></label>
                                        <input id="first-name" className="w-100 custom-form-control" placeholder="First name" type="text" />
                                    </div>
                                    <div className="w-100 d-flex flex-column">
                                        <label className="d-none d-sm-block" htmlFor="last-name">Last name <span className="text-danger">*</span></label>
                                        <input id="last-name" className="w-100 custom-form-control" placeholder="Last name" type="text" />
                                    </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <label className="d-none d-sm-block" htmlFor="email">Email <span className="text-danger">*</span></label>
                                    <input id="email" className="w-100 custom-form-control" placeholder="you@gmail.com" type="text" />
                                </div>
                                <div className="d-flex flex-column">
                                    <label className="d-none d-sm-block" htmlFor="textarea">Message <span className="text-danger">*</span></label>
                                    <textarea rows={6} className="custom-form-control" placeholder="Message..." id="textarea" defaultValue={""} />
                                </div>
                                <button id="submit-btn" className="btn btn-lg btn-warning rounded">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}

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