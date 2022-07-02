import React from 'react'
import BlogsItem from '../blog/BlogsItem'
import Footer from '../footer/Footer'
// import Abc from '../pagination/Abc'

function Blog() {
  return (
    <div className='slider-dark-bg-grd h-full pt-20'>
        <BlogsItem/>
        {/* <Abc/> */}
        <Footer />
    </div>
  )
}

export default Blog