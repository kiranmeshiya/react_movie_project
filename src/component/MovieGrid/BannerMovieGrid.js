import React from 'react'

export default function BannerMovieGrid() {
  return (
    <div>
      <section className="banner-section">
        <div className="banner-bg bg_img bg-fixed" data-background="assets/images/banner/banner02.jpg" />
        <div className="container">
          <div className="banner-content">
            <h1 className="title bold">get <span className="color-theme">movie</span> tickets</h1>
            <p>Buy movie tickets in advance, find movie times watch trailers, read movie reviews and much more</p>
          </div>
        </div>
      </section>
    </div>
  )
}
