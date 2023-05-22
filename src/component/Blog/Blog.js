import React from 'react'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
import Blogbanner from './Blogbanner'
import BlogSection from './BlogSection'
import Footer from '../Index/Footer'

export default function Blog() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <Blogbanner/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}
