import React from 'react'
import bgImage from '../../assets/img/3/1.png'
import user from '../../assets/img/2/1.png'

function BlogCard() {
  return (
    <div className='bg-[#232738] p-3 rounded-[30px]'>
        <div className=' relative text-white'>
        <img className=' w-full max-h-[300px]' src={bgImage} alt="" />
        <span className='px-4 py-2 rounded-3xl bg-[#232738] absolute top-5 left-4'>Design</span>
        </div>
        <div>
          <div className='px-4 mt-9'>
            <h2 className='text-white sm:text-[22px] xm:text-[16px]'>Behing the scene of top designers</h2>
          </div>
          <div className=' mt-3 px-5 pb-2'>
             <p className='text-[16px] text-gray-400'>Quis nunc sagittis, a tellus dignissim consequat. Amet a amet, aliquam eget. Congue pellentesque urna purus ut nulla in purus. </p>
          </div>
          <div className='flex justify-between items-center 2xl:px-5 xl:px-4 md:px-4 sm:mt-5 xm:mt-2 mb-6'>
            <div className='flex items-center'>
              <img className='w-[50px] h-[50px] rounded-full' src={user} alt="" />
              <div className='ml-5 text-gray-400'>
                <b>Alfonso Likens  </b>
                <p>writer</p>
              </div>
            </div>
            <small className='text-gray-600'>Aug 21 - 6:03 PM</small>
          </div>
        </div>
    </div>
  )
}

export default BlogCard