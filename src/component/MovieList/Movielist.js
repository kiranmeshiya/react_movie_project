import React from 'react'
import Banner from '../Index/Banner'
import TicketSearch from '../Index/TicketSearch'
import Movielistsection from './Movielistsection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function Movielist() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <Banner/>
      <TicketSearch/>
      <Movielistsection/>
      <Footer/>
    </div>
  )
}
