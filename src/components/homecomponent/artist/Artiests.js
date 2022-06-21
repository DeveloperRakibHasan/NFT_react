import React from 'react'
import { TbCurrencyDollar } from "react-icons/tb";

function Artiests(props) {
  return (
    <div className='slider-items'>
        <div>
            <img src={props.img} alt="" />
        </div>
        <div className='2xl:ml-8 xl:ml-6 md:ml-4 sm:ml-4 xm:ml-2 pr-2 lg:ml-5'>
            <h4 className='text-white mb-2 xl:text-[25px] lg:text-[22px] md:text-[18px] xm:text-[16px]'>{props.title}</h4>
            <p className='text-blue-500 flex xl:text-[16px] lg:text-[13px] md:text-[12px] xm:text-[12px]'><span className='button-bg mr-2 w-6 h-6 flex items-center justify-center rounded-full text-white'><TbCurrencyDollar /></span>{props.price}</p>
        </div>
    </div>
  )
}

export default Artiests