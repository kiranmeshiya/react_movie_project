import React from 'react'
import Movieticketbanner from './Movieticketbanner'
import Movieticketbooksection from './Movieticketbooksection'
import Ticketbooksection from './Ticketbooksection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function Movieticketplan() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <Movieticketbanner/>
      <Movieticketbooksection/>
      <Ticketbooksection/>
      <Footer/>
    </div>
  )
}
