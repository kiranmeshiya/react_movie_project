import React from 'react'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
import Eventcheckoutsection from './Eventcheckoutsection'
import Footer from '../Index/Footer'
import EventTicketbanner from '../EventTicket/EventTicketbanner'

export default function EventCheckout() {
  return (
    <div>
       <Preloader/>
      <Overlay/>
      <Navbar/>
            <EventTicketbanner/>
            <Eventcheckoutsection/>
            <Footer/>
    </div>
  )
}
