import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import arrow from '../../../assets/img/icon/arrow.svg'

function SellNftCard(props) {
  AOS.init();
  return (
    <>
        <div data-aos="fade-left"
            data-aos-delay="100"
           data-aos-duration="500" 
            className='2xl:p-8 xl:p-6 lg:p-8 md:p-6 sm:p-8 xm:p-8 bg-[#232738] rounded-2xl hover:bg-[#1F2332] duration-150'
            >
            <div className='flex justify-between sm:mb-10 xm:mb-4'>
                <span><img className='2xl:w-full xl:w-[60px] md:w-[60px] xm:w-[60px]' src={props.img} alt="" /></span>
                <p className='text-[#717585] text-[14px] font-redhet font-bold flex items-center '>Step <span className='ml-2 text-[#4A4D5B] text-[40px]'>{props.stepnum}</span> </p>
            </div>
            <div>
                <h4 className='text-white 2xl:text-[24px] xl:text-[20px] font-roboto mb-4'>{props.title}</h4>
                <p className='text-[#7D8694] 2xl:mb-0 xl:mb-0 leading-7'>{props.pragraph}</p>
                <button className='text-white md:mt-0 sm:mt-2 text-[22px]'><img src={arrow} alt='' /></button>
            </div>
        </div>
    </>
  )
}

export default SellNftCard