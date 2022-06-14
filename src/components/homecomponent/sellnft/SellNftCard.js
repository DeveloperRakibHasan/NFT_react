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
            className='p-8 bg-[#232738] rounded-2xl hover:bg-[#1F2332] duration-150'
            >
            <div className='flex justify-between mb-10'>
                <span><img src={props.img} alt="" /></span>
                <p className='text-[#3F4456] text-[14px] font-redhet font-bold flex items-center '>Step <span className='ml-2 text-[40px]'>{props.stepnum}</span> </p>
            </div>
            <div>
                <h4 className='text-white text-[24px] font-roboto mb-5'>{props.title}</h4>
                <p className='text-[#7D8694] mb-9 leading-7'>{props.pragraph}</p>
                <button className='text-white text-[22px]'><BsArrowRightShort/></button>
            </div>
        </div>
    </>
  )
}

export default SellNftCard