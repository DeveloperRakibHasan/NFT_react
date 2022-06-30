import React from 'react'
import BlogNewsItem from './BlogNewsItem'
import Footer from '../footer/Footer'

function SingleBlogNews() {
  return (
    <>
    <div className='slider-dark-bg-grd h-full pt-20'>
        <BlogNewsItem />
        <Footer />
    </div>
    </>
  )
}

export default SingleBlogNews