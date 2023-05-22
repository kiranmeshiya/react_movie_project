import React from 'react'
import Aboutbanner from './Aboutbanner'
import PhilosophySection from './PhilosophySection'
import AboutCounter from './AboutCounter'
import Clientsection from './Clientsection'
import AboutTestimonial from './AboutTestimonial'
import TourSection from './TourSection'
import Footer from '../Index/Footer'
import AboutSingle from './AboutSingle'
import AboutGallary from './AboutGallary'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'

export default function Pages() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <Aboutbanner/>
      <AboutSingle/>
      <PhilosophySection/>
      <AboutCounter/>
      <Clientsection/>
      <AboutTestimonial/>
      <AboutGallary/>
      <TourSection/>
      <Footer/>
    </div>
  )
}
