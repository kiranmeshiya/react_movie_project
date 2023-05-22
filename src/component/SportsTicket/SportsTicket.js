import React from 'react'
import SportsTicketBanner from './SportsTicketBanner'
import SportsTicketsSection from './SportsTicketsSection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function SportsTicket() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <SportsTicketBanner/>
      <SportsTicketsSection/>
      <Footer/>
    </div>
  )
}
