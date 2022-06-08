import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";

function AntqCards(props) {
  return (
    <>
        <div className='w-[270px] bg-[#2A2E3F] rounded-[30px] h-full p-3 nth-position'>
            <div className='w-full h-[220px]' style={{ backgroundImage: `url(${props.bgImage})` }}>

            </div>
            <div className='flex justify-between mt-4 px-5'>
                <b className='text-white text-[18px]'>{props.title}</b>
                <span className='text-[#566FFE]'>{props.rate}</span>
            </div>
            <div className='flex justify-between mt-1 px-5 pb-2'>
                <span className='text-[#7D8694]'>{props.dis}</span>
                <span className='text-[#7D8694] flex items-center'> <FcLikePlaceholder className="mr-2 cursor-pointer" />{props.like}</span>
            </div>
        </div>
    </>
  )
}

export default AntqCards