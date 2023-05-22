import React from 'react'
import Eventbanner from './Eventbanner'
import Eventsearch from './Eventsearch'
import Eventsection from './Eventsection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function Event() {
  return (
    <div>
       <Preloader/>
      <Overlay/>
      <Navbar/>
      <Eventbanner/>
      <Eventsearch/>
      <Eventsection/>
      <Footer/>
    </div>
  )
}
