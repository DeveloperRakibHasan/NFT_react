import React from 'react'
import { TbCurrencyDollar } from "react-icons/tb";

function Artiests(props) {
  return (
    <div className='flex items-center bg-[#232738] rounded-[30px] w-[320px] p-3'>
        <div>
            <img src={props.img} alt="" />
        </div>
        <div className='ml-8'>
            <h4 className='text-white mb-2'>{props.title}</h4>
            <p className='text-blue-500 flex'><span className='button-bg mr-2 w-6 h-6 flex items-center justify-center rounded-full text-white'><TbCurrencyDollar /></span>{props.price}</p>
        </div>
    </div>
  )
}

export default Artiests