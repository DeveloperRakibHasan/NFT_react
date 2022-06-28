import React from 'react'
import icon from '../../assets/img/footer-icon/facebook.png'
import tw from '../../assets/img/footer-icon/tw.png'
import instagram from '../../assets/img/footer-icon/in.png'
import li from '../../assets/img/footer-icon/li.png'

function BlogConnect() {
  return (
    <div className='mt-[30px]'>
        <div className='bg-[#232738] w-full rounded-3xl py-6 xl:px-9 lg:px-4 md:px-8 xm:px-8'>
            <h4 className='text-white font-bold mb-6 text-[18px]'>Let’s connect</h4>
            <div className='flex gap-6 mb-3 w-full'>
                <img className='w-10 h-10' src={icon} alt='' />
                <img className='w-10 h-10' src={tw} alt='' />
                <img className='w-10 h-10' src={instagram} alt='' />
                <img className='w-10 h-10' src={li} alt='' />
            </div>
        </div>
    </div>
  )
}

export default BlogConnect