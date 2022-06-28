import React from 'react'
import BlogCard from './BlogCard'
import RecentArticles from './RecentArticles'
import BlogCategories from './BlogCategories'
import BlogConnect from './BlogConnect'

function BlogsItem() {
  return (
    <div className='container py-10'>
        <div className='grid grid-flow-row grid-cols-3 gap-8'>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
           
            <div className=' col-start-3 row-start-1 row-span-6'>
               <RecentArticles/>
               <BlogCategories/>
                <BlogConnect />
            </div>
        </div>
    </div>
  )
}

export default BlogsItem