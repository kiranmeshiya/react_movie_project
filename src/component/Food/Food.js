import React from 'react'
import Movieseatbanner from '../MovieSeatplan/Movieseatbanner'
import Moviepagetitle from '../MovieSeatplan/Moviepagetitle'
import Foodsection from './Foodsection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function Food() {
  return (
    <div>
       <Preloader/>
      <Overlay/>
      <Navbar/>
       <Movieseatbanner/>
      <Moviepagetitle/>
      <Foodsection/>
      <Footer/>
    </div>
  )
}
