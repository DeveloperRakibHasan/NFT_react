import React from 'react'
import RecentArticles from '../blog/RecentArticles'
import BlogCategories from '../blog/BlogCategories'
import BlogConnect from '../blog/BlogConnect'
import img from '../../assets/img/3/a.png'
import Comment from './Comment'
// import ShowComment from './ShowComment'
import user from '../../assets/img/2/1.png'

function BlogNewsItem() {
  return (
    <div className='container py-10'>
    <div className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 xm:grid-cols-1 gap-8'>
       <div className='lg:col-start-1 md:col-start-1 md:row-start-1 xm:row-start-auto col-span-2'>
        <div className='bg-[#232738] rounded-[30px] p-4'>
         <img className='w-full' src={img} alt='' />
         <div className='mt-12 p-8'>
            <h2 className='w-6/12 font-bold text-white font-redhet'>Behing the scene of top designers</h2>
            <div className='flex justify-between items-center mt-6 mb-8'>
            <div className='flex items-center'>
              <img className='w-[50px] h-[50px] rounded-full' src={user} alt="" />
              <div className='xl:ml-5 md:ml-3 xm:ml-5 xl:text-[16px] lg:text-[14px] text-gray-400'>
                <b>Alfonso Likens</b>
                <p>writer</p>
              </div>
            </div>
            <small className='text-gray-600 xl:text-[14px] lg:text-[11px]'>Aug 21 - 6:03 PM</small>
          </div>
          <p className='text-gray-400'>
          Blandit nunc, quisque nulla nisl feugiat proin venenatis. Amet mattis tincidunt in faucibus mus pharetra non, eget semper. Suspendisse hac quis lacus, eget. Habitasse viverra nunc purus tempor quis et convallis. Luctus turpis malesuada diam urna. Ultricies purus amet imperdiet eu. Imperdiet nibh pharetra eleifend vel, blandit augue sit. Et, commodo augue tortor neque et. Purus nibh commodo lacus mi varius. Arcu, eget gravida sed odio libero eros. Adipiscing commodo et nisl consectetur. Egestas odio elementum nisi vitae pharetra. Eu cursus cras lorem posuere tristique. Quis sed aliquet eget id cum. Donec arcu vestibulum odio viverra malesuada senectus pharetra tellus mi. Egestas risus massa quis adipiscing elementum, molestie elit. Pretium viverra scelerisque porta id pellentesque. Sed diam penatibus feugiat commodo aliquet est. Et, elementum phasellus eu, rhoncus malesuada nisl magna. Magna eget id fringilla ultrices pharetra in in.
          </p>
          <h4 className='font-roboto font-bold text-[24px] mt-10 text-white mb-5'>Behing the scene of top designers</h4>
          <p className='text-gray-400'>Amet volutpat a integer et pellentesque. Dignissim pulvinar nisl, sit massa proin viverra ac luctus consectetur. Imperdiet quis orci pellentesque fringilla. Aliquam nulla neque sit ultricies facilisi ut lorem. Suspendisse pellentesque cursus massa ut. Quis tincidunt neque sit sit fames vitae fermentum metus. Luctus dignissim morbi ac in pellentesque. Neque, morbi purus felis orci leo tincidunt ultrices. Mauris enim nulla magna tellus odio. Quis vel bibendum diam facilisi eu cursus. Massa vestibulum lorem lorem porttitor eu nulla natoque vitae. Interdum commodo habitant tincidunt vel interdum eget. Ipsum urna velit et lacinia praesent. Tortor amet pellentesque neque ipsum donec eu elit tellus id. Aliquet vel gravida at etiam pretium etiam id maecenas. Tellus maecenas orci augue laoreet sit eu id. Et, suscipit porta magna dui sed pharetra. Duis at congue nisl, lectus. Scelerisque scelerisque ipsum, neque sed porttitor ultricies gravida fermentum dui. Eu, blandit sagittis sagittis et mollis ac quisque.</p>
         </div>
        </div>
       </div>
       <div className='lg:col-start-1 md:col-start-1 xm:row-start-auto col-span-2 mt-[30px]'>
        <div className='bg-[#232738] rounded-[30px] px-9 py-6'>
        <h4 className='text-white font-bold mb-8'>Comment</h4>
        <div className='border border-[#2F384A] rounded-[18px] mb-[30px] p-6'>
        <div className='flex items-center'>
            <img className='w-[50px] h-[50px] rounded-full' src={user} alt="" />
            <div className='xl:ml-5 md:ml-3 xm:ml-5 xl:text-[16px] lg:text-[14px] text-gray-400'>
                <b>Alfonso Likens</b>
                <p>writer</p>
            </div>
        </div>
        <p className='text-gray-500 mt-4'>Neque, morbi purus felis orci leo tincidunt ultrices. Mauris enim nulla magna tellus odio. Quis vel bibendum diam facilisi eu cursus. Massa vestibulum lorem lorem porttitor eu nulla natoque vitae. </p>
        <button className='text-blue-500 mt-6 mb-2'>Reply</button>
    </div>
            {/* <ShowComment /> */}
            <Comment />
        </div>
       </div>
        
        <div className=' lg:col-start-3 md:col-start-2 xm:col-start-1 md:row-start-1 xm:row-start-auto row-span-6'>
           <RecentArticles/>
           <BlogCategories/>
            <BlogConnect />
        </div>
    </div>
</div>
  )
}

export default BlogNewsItem