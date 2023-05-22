import React from 'react'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
import ContactBanner from './ContactBanner'
import ContactSection from './ContactSection'
import ContactCounter from './ContactCounter'
import Footer from '../Index/Footer'

export default function Contact() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <ContactBanner/>
      <ContactSection/>
      <ContactCounter/>
      <Footer/>
    </div>
  )
}
