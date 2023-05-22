import React from 'react'
import Moviedetaisbanner from './Moviedetaisbanner'
import Booksection from './Booksection'
import Moviesection from './Moviesection'
import Footer from '../Index/Footer'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
export default function Moviedetails() {
  return (
    <div>
       <Preloader/>
      <Overlay/>
      <Navbar/>
      <Moviedetaisbanner/>
      <Booksection/>
      <Moviesection/>
      <Footer/>
    </div>
  )
}
