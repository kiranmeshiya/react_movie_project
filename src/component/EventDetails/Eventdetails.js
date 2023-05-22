import React from 'react'
import Eventdetailsbanner from './Eventdetailsbanner'
import Eventdetailsearch from './Eventdetailsearch'
import Eventabout from './Eventabout'
import Gallerysection from './Gallerysection'
import Spekersection from './Spekersection'
import Statasticsection from './Statasticsection'
import Faqsection from './Faqsection'
import Eventdetailsection from './Eventdetailsection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function Eventdetails() {
  return (
    <div>
       <Preloader/>
      <Overlay/>
      <Navbar/>
      <Eventdetailsbanner/>
      <Eventdetailsearch/>
      <Eventabout/>
      <Gallerysection/>
      <Spekersection/>
      <Statasticsection/>
      <Faqsection/>
      <Eventdetailsection/>
      <Footer/>
    </div>
  )
}
