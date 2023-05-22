import React from 'react'
import Eventspekerbanner from './Eventspekerbanner'
import SpekerSingle from './SpekerSingle'
import Spekersection from '../EventDetails/Spekersection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function Eventspeker() {
  return (
    <div>
       <Preloader/>
      <Overlay/>
      <Navbar/>
      <Eventspekerbanner/>
      <SpekerSingle/>
      <Spekersection/>
      <Footer/>
    </div>
  )
}
