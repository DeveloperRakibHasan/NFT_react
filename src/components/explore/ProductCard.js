import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../assets/img/user/1.png'
import user1 from '../../assets/img/user/2.png'
import user2 from '../../assets/img/user/3.png'
import user3 from '../../assets/img/user/4.png'
import { GiSelfLove } from "react-icons/gi";
import { BiShareAlt } from "react-icons/bi";

function ProductCard(props) {
  return (
    <Link to={`/explore/${props.singleProductLink}`}>
      <div className='bg-[#232738] p-3 rounded-[30px]'>
        <img src={props.bgImage} alt="" />
        <div>
          <div className='flex justify-between sm:mt-4 xm:mt-2 md:px-5 sm:px-1'>
            <b className='text-white sm:text-[18px] xm:text-[16px]'>{props.title}</b>
            <span className='text-[#566FFE] sm:text-[18px] xm:text-[14px]'>{props.rate}</span>
          </div>
          <div className='flex justify-between items-center mt-1 md:px-5 sm:px-1 pb-2'>
              <span className='text-[#7D8694] sm:text-[16px] xm:text-[14px]'>{props.dis}</span>
              <span className='text-[#7D8694] flex items-center'> <GiSelfLove className="mr-2" />214</span>
          </div>
          <div className='flex justify-between items-center 2xl:px-5 xl:px-4 md:px-4 sm:mt-5 xm:mt-2 mb-6'>
            <div className='flex'>
              <img className=' xm:w-[25px] xm:h-[25px]' src={user} alt="" />
              <img className='ml-[-10px] xm:w-[25px] xm:h-[25px]' src={user1} alt="" />
              <img className='ml-[-10px] xm:w-[25px] xm:h-[25px]' src={user2} alt="" />
              <img className='ml-[-10px] xm:w-[25px] xm:h-[25px]' src={user3} alt="" />
              <span className='ml-2 text-[#7D8694] sm:text-[16px] xm:text-[12px]'>99+ place bid</span>
            </div>
            <BiShareAlt className='text-white' />
          </div>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard