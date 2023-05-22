import React from 'react'
// import Navbar from '../Navbar'
import Banner from './Banner'
import TicketSearch from './TicketSearch'
import MovieMain from './MovieMain'
import Footer from './Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function Home() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <Banner/>
      <TicketSearch/>
      <MovieMain/>
      <Footer/>
    </div>
  )
}
