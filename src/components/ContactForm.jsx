import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);

      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Error sending message');
    }
  };

  return (
    <section className="form-section py-100 position-relative">
      <div className="container position-relative z-2">
        <div className="row flex-wrap-reverse justify-content-between">
          <div className='col-12 col-lg-6'>
            <iframe
              title="map"
              className="w-100 h-100 object-fit-cover"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52918450.40025157!2d-161.85240697328845!3d35.94976132466603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1764912116497!5m2!1sen!2s"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="col-12 col-lg-6">
            <form
              className="form d-flex flex-column shadow-sm rounded-3 gap-3 gap-lg-4"
              onSubmit={handleSubmit}
            >
              <div>
                <h2>Get a quote</h2>
                <p className="fw-medium mt-3">Our friendly team would love to hear from you!</p>
              </div>

              <div className="w-100 d-flex flex-wrap flex-sm-nowrap gap-3 mt-3 mt-lg-0">
                <div className="w-100 d-flex flex-column">
                  <label htmlFor="firstName" className="d-none d-sm-block">First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    type="text"
                    className="w-100 custom-form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="w-100 d-flex flex-column">
                  <label htmlFor="lastName" className="d-none d-sm-block">Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    type="text"
                    className="w-100 custom-form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="d-flex flex-column">
                <label htmlFor="email" className="d-none d-sm-block">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="w-100 custom-form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex flex-column">
                <label htmlFor="message" className="d-none d-sm-block">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Message..."
                  className="custom-form-control"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-lg btn-warning rounded">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
