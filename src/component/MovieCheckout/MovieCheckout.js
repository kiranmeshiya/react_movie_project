import React from 'react'
import Movieseatbanner from '../MovieSeatplan/Movieseatbanner'
import Moviecheckoutsection from './Moviecheckoutsection'
import Footer from '../Index/Footer'
import Moviepagetitle from '../MovieSeatplan/Moviepagetitle'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function MovieCheckout() {
  return (
    <div>
       <Preloader/>
      <Overlay/>
      <Navbar/>
      <Movieseatbanner/>
      <Moviepagetitle/>
      <Moviecheckoutsection/>
      <Footer/>
    </div>
  )
}
