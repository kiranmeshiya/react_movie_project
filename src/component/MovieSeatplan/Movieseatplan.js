import React from 'react'
import Movieseatbanner from './Movieseatbanner'
import Moviepagetitle from './Moviepagetitle'
import Movieseatsection from './Movieseatsection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function Movieseatplan() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <Movieseatbanner/>
      <Moviepagetitle/>
      <Movieseatsection/>
      <Footer/>
    </div>
  )
}
