import React from 'react'
import Preloader from '../Preloader'
import { Link } from 'react-router-dom'

export default function Errors() {
  return (
    <div>
      <Preloader/>
      <section className="section-404 padding-top padding-bottom">
        <div className="container">
          <div className="thumb-404">
            <img src="assets/images/404.png" alt={404} />
          </div>
          <h3 className="title">Oops.. looks like you got lost :( </h3>
          <Link to='/' className="custom-button">Back To Home <i className="flaticon-right" /></Link>
        </div>
      </section>
    </div>
  )
}
