import React from 'react'
import user from '../../../assets/img/user/1.png'
import user1 from '../../../assets/img/user/2.png'
import user2 from '../../../assets/img/user/3.png'
import user3 from '../../../assets/img/user/4.png'
import { GiSelfLove } from "react-icons/gi";
import { BiShareAlt } from "react-icons/bi";

function ProductCard(props) {
  return (
    <div className='bg-[#232738] p-3 rounded-[30px]'>
        <img className='w-full' src={props.bgImage} alt="" />
        <div>
          <div className='flex justify-between mt-4 px-5'>
            <b className='text-white text-[18px]'>{props.title}</b>
            <span className='text-[#566FFE]'>{props.rate}</span>
          </div>
          <div className='flex justify-between items-center mt-1 px-5 pb-2'>
              <span className='text-[#7D8694]'>{props.dis}</span>
              <span className='text-[#7D8694] flex items-center'> <GiSelfLove className="mr-2" />214</span>
          </div>
          <div className='flex justify-between items-center 2xl:px-5 xl:px-3 lg:px-3 md:px-4 sm:px-2 xm:px-5 2xl:mt-5 2xl:mb-6 xl:mt-4 mb-5'>
            <div className='flex'>
              <img src={user} alt="" />
              <img className='ml-[-10px]' src={user1} alt="" />
              <img className='ml-[-10px]' src={user2} alt="" />
              <img className='ml-[-10px]' src={user3} alt="" />
              <span className='ml-2 text-[#7D8694]'>99+ place bid</span>
            </div>
            <BiShareAlt className='text-white' />
          </div>
        </div>
    </div>
  )
}

export default ProductCard