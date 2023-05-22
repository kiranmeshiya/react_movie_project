import React from 'react'
import Sportdetailbanner from './Sportdetailbanner'
import SportCounter from './SportCounter'
import SportAbout from './SportAbout'
import Statasticsection from '../EventDetails/Statasticsection'
import Faqsection from '../EventDetails/Faqsection'
import Footer from '../Index/Footer'
import SportDetailsection from './SportDetailsection'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function SportDetails() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <Sportdetailbanner/>
      <SportCounter/>
      <SportAbout/>
      <Statasticsection/>
      <Faqsection/>
      <SportDetailsection/>
      <Footer/>
    </div>
  )
}
