import React from 'react'

export default function Movieticketbanner() {
  return (
    <div>
        {/* ==========Window-Warning-Section========== */}
        <section className="window-warning inActive">
          <div className="lay" />
          <div className="warning-item">
            <h6 className="subtitle">Welcome! </h6>
            <h4 className="title">Select Your Seats</h4>
            <div className="thumb">
              <img src="assets/images/movie/seat-plan.png" alt="movie" />
            </div>
            <a href="movie-seat-plan.html" className="custom-button seatPlanButton">Seat Plans<i className="fas fa-angle-right" /></a>
          </div>
        </section>
        {/* ==========Window-Warning-Section========== */}
        {/* ==========Banner-Section========== */}
        <section className="details-banner hero-area bg_img" data-background="assets/images/banner/banner03.jpg">
          <div className="container">
            <div className="details-banner-wrapper">
              <div className="details-banner-content">
                <h3 className="title">Venus </h3>
                <div className="tags">
                  <a href="#0">English</a>
                  <a href="#0">Hindi</a>
                  <a href="#0">Telegu</a>
                  <a href="#0">Tamil</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
