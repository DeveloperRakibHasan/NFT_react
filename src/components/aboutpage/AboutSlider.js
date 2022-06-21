import React from 'react'
import aboutImg from '../../assets/img/about.png'
import aboutSliderIconLeft from '../../assets/img/1.png'
import aboutSliderIconRight from '../../assets/img/2.png'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import '../css/custom.css'


function AboutSlider() {
  return (
    <div className='bg-[#111826] w-full h-full py-[100px]'>
        <div className='container'>
            <div className='xl:w-6/12 lg:w-8/12 mx-auto'>
            <h2 className='sm:text-[36px] xm:text-[30px] text-white text-center sm:mb-[70px] xm:mb-[60px] font-bold'>What people are saying <br></br> about us</h2>
            <div className='flex justify-center'>
            <img src={aboutImg} alt='' />
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}

                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className='about-slider-bg rounded-[30px] py-12 px-7 mt-16'>
                    <div className='flex justify-between'>
                        <img src={aboutSliderIconLeft} alt='' />
                        <img src={aboutSliderIconRight} alt='' />
                    </div>
                    <div className='px-[70px] mt-[-40px] text-center'>
                        <p className='text-[#7D8694] sm:text-[16px] xm:text-[12px] sm:mb-10 xm:mb-6'>Magna id natoque fermentum vestibulum eleifend volutpat tellus. Tellus, in velit tellus, morbi aenean ac quis. Amet, consequat quis quis commodo luctus nunc, turpis. Faucibus arcu nunc tortor nulla metus diam. Eget elit, sit leo tincidunt scelerisque </p>
                        <b className='text-white font-roboto'>Alfonso T. Likens</b>
                        <span className='text-[#7D8694] flex justify-center sm:mt-4 xm:mt-2'><svg className='mr-2 text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7D8694" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg> United States</span>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='about-slider-bg rounded-[30px] py-12 px-7 mt-16'>
                    <div className='flex justify-between'>
                        <img src={aboutSliderIconLeft} alt='' />
                        <img src={aboutSliderIconRight} alt='' />
                    </div>
                    <div className='px-[70px] mt-[-40px] text-center'>
                        <p className='text-[#7D8694] sm:text-[16px] xm:text-[12px] sm:mb-10 xm:mb-6'>Magna id natoque fermentum vestibulum eleifend volutpat tellus. Tellus, in velit tellus, morbi aenean ac quis. Amet, consequat quis quis commodo luctus nunc, turpis. Faucibus arcu nunc tortor nulla metus diam. Eget elit, sit leo tincidunt scelerisque </p>
                        <b className='text-white font-roboto'>Alfonso T. Likens</b>
                        <span className='text-[#7D8694] flex justify-center sm:mt-4 xm:mt-2'><svg className='mr-2 text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7D8694" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg> United States</span>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='about-slider-bg rounded-[30px] py-12 px-7 mt-16'>
                    <div className='flex justify-between'>
                        <img src={aboutSliderIconLeft} alt='' />
                        <img src={aboutSliderIconRight} alt='' />
                    </div>
                    <div className='px-[70px] mt-[-40px] text-center'>
                        <p className='text-[#7D8694] sm:text-[16px] xm:text-[12px] sm:mb-10 xm:mb-6'>Magna id natoque fermentum vestibulum eleifend volutpat tellus. Tellus, in velit tellus, morbi aenean ac quis. Amet, consequat quis quis commodo luctus nunc, turpis. Faucibus arcu nunc tortor nulla metus diam. Eget elit, sit leo tincidunt scelerisque </p>
                        <b className='text-white font-roboto'>Alfonso T. Likens</b>
                        <span className='text-[#7D8694] flex justify-center sm:mt-4 xm:mt-2'><svg className='mr-2 text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7D8694" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg> United States</span>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>  
            </div>
        </div>
    </div>
  )
}

export default AboutSlider