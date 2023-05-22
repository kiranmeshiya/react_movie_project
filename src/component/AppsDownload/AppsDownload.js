import React from 'react'
import AppsBanner from './AppsBanner'
import AppSingle from './AppSingle'
import AppSection from './AppSection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function AppsDownload() {
  return (
    <div>
       <Preloader/>
      <Overlay/>
      <Navbar/>
      <AppsBanner/>
      <AppSingle/>
      <AppSection/>
      <Footer/>
    </div>
  )
}
