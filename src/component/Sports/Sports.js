import React from 'react'
import SportsBanner from './SportsBanner'
import SportsTicketsearch from './SportsTicketsearch'
import Sportsevent from './Sportsevent'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function Sports() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <SportsBanner/>
      <SportsTicketsearch/>
      <Sportsevent/>
      <Footer/>
    </div>
  )
}
