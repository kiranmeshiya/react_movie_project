import React from 'react'
import Preloader from '../Preloader'
import Overlay from '../Overlay'
import Navbar from '../Navbar'
import BlogSingleBanner from './BlogSingleBanner'
import BlogSingledetail from './BlogSingledetail'
import Footer from '../Index/Footer'

export default function BlogSingle() {
  return (
    <div>
      <Preloader/>
      <Overlay/>
      <Navbar/>
      <BlogSingleBanner/>
      <BlogSingledetail/>
      <Footer/>
    </div>
  )
}
