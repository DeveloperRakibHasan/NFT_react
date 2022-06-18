import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

function SellNftCard(props) {
  AOS.init();
  return (
    <>
        <div data-aos="fade-left"
            data-aos-delay="300"
           data-aos-duration="1500" 
            className='2xl:p-8 xl:p-6 lg:p-8 bg-[#232738] rounded-2xl hover:bg-[#1F2332] duration-150'
            >
            <div className='flex justify-between mb-10'>
                <span><img className='2xl:w-full xl:w-[60px]' src={props.img} alt="" /></span>
                <p className='text-[#3F4456] text-[14px] font-redhet font-bold flex items-center '>Step <span className='ml-2 text-[40px]'>{props.stepnum}</span> </p>
            </div>
            <div>
                <h4 className='text-white 2xl:text-[24px] xl:text-[20px] font-roboto mb-5'>{props.title}</h4>
                <p className='text-[#7D8694] 2xl:mb-9 xl:mb-6 leading-7'>{props.pragraph}</p>
                <button className='text-white text-[22px]'><BsArrowRightShort/></button>
            </div>
        </div>
    </>
  )
}

export default SellNftCard