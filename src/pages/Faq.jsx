import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
    return (
        <>
            <section className="inner-page-header position-relative overflow-hidden">
                <img data-aos-duration="1000" data-aos="zoom-out-up" className="absolute-bg object-fit-cover" src="assets/images/card-1.png" />
                <div className="bg-overly w-100 h-100 position-absolute top-0 start-0 pe-none" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 data-aos-duration="1000" data-aos="fade-up" className="fs-70 text-center text-white">Frequently Asked Questions</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pt-100 pb-5'>
                <div className="container container-sm">
                    <div className="row">
                        <div className="col-12">
                            <h2 class="border-left-primary font-h4 mb-4">IRC vs HUD Homes</h2>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is a HUD home?</Accordion.Header>
                                    <Accordion.Body>
                                        A HUD home is a manufactured home built under federal HUD standards. These homes follow national construction and installation guidelines.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What is an IRC home?</Accordion.Header>
                                    <Accordion.Body>
                                        An IRC home is built using International Residential Code standards—similar to site-built homes and local building codes.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What is the main difference between IRC and HUD homes?</Accordion.Header>
                                    <Accordion.Body>
                                        HUD is a national code for manufactured homes; IRC follows local building codes for residential structures. Installation methods differ based on the home type.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <h2 class="border-left-primary font-h4 mt-5 mb-4">Installation Requirements</h2>
                            <Accordion>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What do I need before installation starts?</Accordion.Header>
                                    <Accordion.Body>
                                        A prepared site, permits (if required), clear access for delivery, and utility availability.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Do I need to provide the foundation?</Accordion.Header>
                                    <Accordion.Body>
                                        We guide you on foundation requirements and prepare the foundation if needed.
                                    </Accordion.Body>
                                </Accordion.Item>
                                 <Accordion.Item eventKey="5">
                                    <Accordion.Header>Do I need to provide the foundation?</Accordion.Header>
                                    <Accordion.Body>
                                        We guide you on foundation requirements and prepare the foundation if needed.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                             <h2 class="border-left-primary font-h4 mt-5 mb-4">Safety & Building Codes</h2>
                            <Accordion>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Are your installations code-compliant?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we follow all HUD and IRC guidelines for safe and compliant installation.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>Do you use proper anchoring and leveling standards?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes. All anchoring, tie-downs, leveling, and foundation work follow approved safety codes.
                                    </Accordion.Body>
                                </Accordion.Item>
                                 <Accordion.Item eventKey="8">
                                    <Accordion.Header>Do you prepare the home for inspections?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we make sure the home meets all inspection requirements.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                             <h2 class="border-left-primary font-h4 mt-5 mb-4">Common Customer Questions</h2>
                            <Accordion>
                                <Accordion.Item eventKey="9">
                                    <Accordion.Header>How long does installation take?</Accordion.Header>
                                    <Accordion.Body>
                                        Most installations are completed within 1–3 days depending on the home and site.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="10">
                                    <Accordion.Header>Do you offer re-leveling and anchoring services?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we provide re-leveling, anchoring, skirting, and full setup services.
                                    </Accordion.Body>
                                </Accordion.Item>
                                 <Accordion.Item eventKey="11">
                                    <Accordion.Header>Do you connect utilities?</Accordion.Header>
                                    <Accordion.Body>
                                        We assist with water, sewer, and electrical connection coordination.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq