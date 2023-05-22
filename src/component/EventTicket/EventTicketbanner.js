import React from 'react'

export default function EventTicketbanner() {
  return (
    <div>
       {/* ==========Banner-Section========== */}
       <section className="details-banner event-details-banner hero-area bg_img seat-plan-banner" data-background="assets/images/banner/banner07.jpg">
          <div className="container">
            <div className="details-banner-wrapper">
              <div className="details-banner-content style-two">
                <h3 className="title"><span className="d-block">Digital Marketing</span> 
                  <span className="d-block">Conference -2020</span></h3>
                <div className="tags">
                  <span>17 South Sherman Street Astoria, NY 11106</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Banner-Section========== */}
        {/* ==========Page-Title========== */}
        <section className="page-title bg-one">
          <div className="container">
            <div className="page-title-area">
              <div className="item md-order-1">
                <a href="#0" className="custom-button back-button">
                  <i className="flaticon-double-right-arrows-angles" />back
                </a>
              </div>
              <div className="item date-item">
                <span className="date">MON, SEP 09 2020</span>
              </div>
              <div className="item">
                <h5 className="title">05:00</h5>
                <p>Mins Left</p>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Page-Title========== */}
    </div>
  )
}
