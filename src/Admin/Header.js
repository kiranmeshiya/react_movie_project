import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
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
          <Link to="/adddetails" className="active">Add Details</Link>
        </li>
       
        <li>
          <Link to="/viewdetails">View Details</Link>
        </li>
        <li className="header-button pr-0">
          <Link to="/login">Log Out</Link>
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
