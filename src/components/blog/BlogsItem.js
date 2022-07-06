import React, {useState, useEffect} from 'react'
import BlogCard from './BlogCard'
import RecentArticles from './RecentArticles'
import BlogCategories from './BlogCategories'
import BlogConnect from './BlogConnect'

function BlogsItem() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(
      response => response.json().then(data => {
        setPosts(data)
      })
    )

  }, []);

  return (
    <div className='container py-10'>
        <div className='grid grid-flow-row xl:grid-cols-3 md:grid-cols-2 xm:grid-cols-1 gap-8'>
            <BlogCard data={posts} />
            <div className=' xl:col-start-3 md:col-start-2 xm:col-start-1 md:row-start-1 xm:row-start-auto row-span-6'>
               <RecentArticles/>
               <BlogCategories/>
                <BlogConnect />
            </div>
        </div>
    </div>
  )
}

export default BlogsItem