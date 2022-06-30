import React from 'react'
import BlogCard from './BlogCard'
import RecentArticles from './RecentArticles'
import BlogCategories from './BlogCategories'
import BlogConnect from './BlogConnect'

function BlogsItem() {

  const blogCardArray = [
    {
      id: 1,
      title: 'Behing the scene of top designers',
      dis: 'Quis nunc sagittis, a tellus dignissim consequat. Amet a amet, aliquam eget. Congue pellentesque urna purus ut nulla in purus.',
      img: require('../../assets/img/3/1.png'),
    },
    {
      id: 2,
      title: 'Behing the scene of top designers',
      dis: 'Quis nunc sagittis, a tellus dignissim consequat. Amet a amet, aliquam eget. Congue pellentesque urna purus ut nulla in purus.',
      img: require('../../assets/img/3/1.png'),
    },
    {
      id: 3,
      title: 'Behing the scene of top designers',
      dis: 'Quis nunc sagittis, a tellus dignissim consequat. Amet a amet, aliquam eget. Congue pellentesque urna purus ut nulla in purus.',
      img: require('../../assets/img/3/1.png'),
    },
    {
      id: 4,
      title: 'Behing the scene of top designers',
      dis: 'Quis nunc sagittis, a tellus dignissim consequat. Amet a amet, aliquam eget. Congue pellentesque urna purus ut nulla in purus.',
      img: require('../../assets/img/3/1.png'),
    },
  ]

  return (
    <div className='container py-10'>
        <div className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 xm:grid-cols-1 gap-8'>
            {
              blogCardArray.map((item)=> {
                return(
                  <div key={item.id}>
                  <BlogCard img={item.img} title={item.title} dis={item.dis}/>
                  </div>
                )
              })
            }
            
            <div className=' lg:col-start-3 md:col-start-2 xm:col-start-1 md:row-start-1 xm:row-start-auto row-span-6'>
               <RecentArticles/>
               <BlogCategories/>
                <BlogConnect />
            </div>
        </div>
    </div>
  )
}

export default BlogsItem