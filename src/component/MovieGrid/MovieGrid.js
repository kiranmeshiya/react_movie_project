import React from 'react'
import BannerMovieGrid from './BannerMovieGrid'
import TicketSearch from '../Index/TicketSearch'
import MovieSection from './MovieSection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function MovieGrid() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <BannerMovieGrid/>
      <TicketSearch/>
      <MovieSection/>
      <Footer/>
    </div>
  )
}
