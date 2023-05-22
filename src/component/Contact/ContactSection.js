import React from 'react'

export default function ContactSection() {
  return (
    <div>
            <section className="contact-section padding-top">
        <div className="contact-container">
          <div className="bg-thumb bg_img" data-background="assets/images/contact/contact.jpg" />
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-7 col-lg-6 col-xl-5">
                <div className="section-header-3 left-style">
                  <span className="cate">contact us</span>
                  <h2 className="title">get in touch</h2>
                  <p>We’d love to talk about how we can work together. Send us a message below and we’ll respond as soon as possible.</p>
                </div>
                <form className="contact-form" id="contact_form_submit">
                  <div className="form-group">
                    <label htmlFor="name">Name <span>*</span></label>
                    <input type="text" placeholder="Enter Your Full Name" name="name" id="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="text" placeholder="Enter Your Email" name="email" id="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject <span>*</span></label>
                    <input type="text" placeholder="Enter Your Subject" name="subject" id="subject" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message <span>*</span></label>
                    <textarea name="message" id="message" placeholder="Enter Your Message" required defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <input type="submit" defaultValue="Send Message" />
                  </div>
                </form>
              </div>
              <div className="col-md-5 col-lg-6">
                <div className="padding-top padding-bottom contact-info">
                  <div className="info-area">
                    <div className="info-item">
                      <div className="info-thumb">
                        <img src="assets/images/contact/contact01.png" alt="contact" />
                      </div>
                      <div className="info-content">
                        <h6 className="title">phone number</h6>
                        <a href="Tel:82828282034">+1234 56789</a>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-thumb">
                        <img src="assets/images/contact/contact02.png" alt="contact" />
                      </div>
                      <div className="info-content">
                        <h6 className="title">Email</h6>
                        <a href="Mailto:info@gmail.com"><span className="__cf_email__" data-cfemail="147d7a727b54567b7871607b">[email&nbsp;protected]</span> .com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
