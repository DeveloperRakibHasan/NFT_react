import React from 'react'
import { TbCurrencyDollar } from "react-icons/tb";

function Artiests(props) {
  return (
    <div className='slider-items 2xl:w-[320px] xl:w-[250px]'>
        <div>
            <img src={props.img} alt="" />
        </div>
        <div className='2xl:ml-8 xl:ml-6 pr-2 lg:ml-5'>
            <h4 className='text-white mb-2'>{props.title}</h4>
            <p className='text-blue-500 flex'><span className='button-bg mr-2 w-6 h-6 flex items-center justify-center rounded-full text-white'><TbCurrencyDollar /></span>{props.price}</p>
        </div>
    </div>
  )
}

export default Artiests