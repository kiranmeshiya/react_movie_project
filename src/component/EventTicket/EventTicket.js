import React from 'react'
import EventTicketbanner from './EventTicketbanner'
import EventTicketSection from './EventTicketSection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function EventTicket() {
  return (
    <div>
       <Preloader/>
      <Overlay/>
      <Navbar/>
      <EventTicketbanner/>
      <EventTicketSection/>
      <Footer/>
    </div>
  )
}
