import React from 'react'

export default function Sportsevent() {
  return (
    <div>
     
     <section className="event-section padding-top padding-bottom">
        <div className="container">
          <div className="row flex-wrap-reverse justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-3">
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <a href="#0">
                    <img src="assets/images/sidebar/banner/banner01.jpg" alt="banner" />
                  </a>
                </div>
              </div>
              <div className="widget-1 widget-check">
                <div className="widget-header">
                  <h5 className="m-title">Filter By</h5> <a href="#0" className="clear-check">Clear All</a>
                </div>
                <div className="widget-1-body">
                  <h6 className="subtitle">categories</h6>
                  <div className="check-area">
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="sp1" /><label htmlFor="sp1">all</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="sp2" /><label htmlFor="sp2">running</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="sp3" /><label htmlFor="sp3">E Sports</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="sp4" /><label htmlFor="sp4">race</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="sp5" /><label htmlFor="sp5">walking</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="sp6" /><label htmlFor="sp6">badminton</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="sp7" /><label htmlFor="sp7">table tenis</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="sp8" /><label htmlFor="sp8">football</label>
                    </div>
                    <div className="form-group">
                      <input type="checkbox" name="lang" id="sp9" /><label htmlFor="sp9">cricket</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <a href="#0">
                    <img src="assets/images/sidebar/banner/banner02.jpg" alt="banner" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9 mb-50 mb-lg-0">
              <div className="filter-tab">
                <div className="filter-area">
                  <div className="filter-main">
                    <div className="left w-100 justify-content-between">
                      <div className="item">
                        <span className="show">Show :</span>
                        <select className="select-bar">
                          <option value={12}>12</option>
                          <option value={15}>15</option>
                          <option value={18}>18</option>
                          <option value={21}>21</option>
                          <option value={24}>24</option>
                          <option value={27}>27</option>
                          <option value={30}>30</option>
                        </select>
                      </div>
                      <div className="item mr-0">
                        <span className="show">Sort By :</span>
                        <select className="select-bar">
                          <option value="showing">now showing</option>
                          <option value="exclusive">exclusive</option>
                          <option value="trending">trending</option>
                          <option value="most-view">most view</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <a href="sport-details.html">
                          <img src="assets/images/sports/sports01.jpg" alt="sports" />
                        </a>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href="sport-details.html">football league tournament</a>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <a href="sport-details.html">
                          <img src="assets/images/sports/sports02.jpg" alt="sports" />
                        </a>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href="sport-details.html">world cricket league 2020</a>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <a href="sport-details.html">
                          <img src="assets/images/sports/sports03.jpg" alt="sports" />
                        </a>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href="sport-details.html">basket ball tournament 2020</a>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <a href="sport-details.html">
                          <img src="assets/images/sports/sports04.jpg" alt="sports" />
                        </a>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href="sport-details.html">Football League 
                            Tournament</a>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <a href="sport-details.html">
                          <img src="assets/images/sports/sports05.jpg" alt="sports" />
                        </a>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href="sport-details.html">World Basketball
                            League 2020</a>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <a href="sport-details.html">
                          <img src="assets/images/sports/sports06.jpg" alt="sports" />
                        </a>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href="sport-details.html">World Golf
                            League 2020</a>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <a href="sport-details.html">
                          <img src="assets/images/sports/sports07.jpg" alt="sports" />
                        </a>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href="sport-details.html">World Basketball
                            League 2020</a>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <a href="sport-details.html">
                          <img src="assets/images/sports/sports08.jpg" alt="sports" />
                        </a>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href="sport-details.html">World Badminton 
                            Tournament</a>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <a href="sport-details.html">
                          <img src="assets/images/sports/sports09.jpg" alt="sports" />
                        </a>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href="sport-details.html">Digital Economy 
                            Conference</a>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <a href="sport-details.html">
                          <img src="assets/images/sports/sports10.jpg" alt="sports" />
                        </a>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href="sport-details.html">World Football
                            League 2020</a>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <a href="sport-details.html">
                          <img src="assets/images/sports/sports11.jpg" alt="sports" />
                        </a>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href="sport-details.html">World Bikeracing
                            League </a>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <a href="sport-details.html">
                          <img src="assets/images/sports/sports12.jpg" alt="sports" />
                        </a>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <a href="sport-details.html">World Bikeracing League </a>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination-area text-center">
                  <a href="#0"><i className="fas fa-angle-double-left" /><span>Prev</span></a>
                  <a href="#0">1</a>
                  <a href="#0">2</a>
                  <a href="#0" className="active">3</a>
                  <a href="#0">4</a>
                  <a href="#0">5</a>
                  <a href="#0"><span>Next</span><i className="fas fa-angle-double-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
