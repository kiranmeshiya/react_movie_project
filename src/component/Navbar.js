import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <header className="header-section">
  <div className="container">
    <div className="header-wrapper">
      <div className="logo">
        <Link to="/login">
          <img src="assets/images/logo/logo.png" alt="logo" />
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link to="/" className="active">Home</Link>
        </li>
        <li className="menu-item-has-children">
          <a href="#0">movies</a>
          <ul className="submenu">
            <li>
              <Link to='/movie-grid'>Movie Grid</Link>
            </li>
            <li>
              <Link to='/movie-list'>Movie List</Link>
            </li>
            <li>
              <Link to="/movie-details">Movie Details</Link>
            </li>
                   <li>
              <Link to='/movie-ticket-plan'>Movie Ticket Plan</Link>
            </li>
            <li>
              <Link to="/movie-seat-plan">Movie Seat Plan</Link>
            </li>
            <li>
              <Link to="/movie-checkout">Movie Checkout</Link>
            </li>
            <li>
              <Link to='/food'>Movie Food</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link to='/events'>events</Link>
          <ul className="submenu">
            <li>
              <Link to='/events'>Events</Link>
            </li>
            <li>
              <Link to="/event-details">Event Details</Link>
            </li>
            <li>
              <Link to="/event-speaker">Event Speaker</Link>
            </li>
            <li>
              <Link to="/event-ticket">Event Ticket</Link>
            </li>
            <li>
              <Link to="/event-checkout">Event Checkout</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link to='/sports'>sports</Link>
          <ul className="submenu">
            <li>
              <Link to='/sports'>Sports</Link>
            </li>
            <li>
              <Link to="/sport-details">Sport Details</Link>
            </li>
            <li>
              <Link to="/sport-tickets">Sport Ticket</Link>
            </li>
            <li>
              <Link to="/sport-checkout">Sport Checkout</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link to='/about'>pages</Link>
          <ul className="submenu">
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to="/apps-download">Apps Download</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/404">404</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link to="/blog">blog</Link>
          <ul className="submenu">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/blog-single">Blog Single</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li className="header-button pr-0">
          <Link to="/sign-up">join us</Link>
        </li>
      </ul>
      <div className="header-bar d-lg-none">
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
</header>

    </div>
  )
}
