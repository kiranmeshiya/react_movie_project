import React from 'react'
import SportsTicketBanner from '../SportsTicket/SportsTicketBanner'
import SportsCheckoutSection from './SportsCheckoutSection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function SportsCheckout() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <SportsTicketBanner/>
      <SportsCheckoutSection/>
      <Footer/>
    </div>
  )
}
