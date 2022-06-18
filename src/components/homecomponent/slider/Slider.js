import React from 'react'
import Subscribe from './Subscribe'
import AntiqCard from './AntiqCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../css/bobble.css'


function Slider() {
  AOS.init();
  return (
    <>
      <div className='relative z-10'>
      
      <div className='z-0 grid grid-flow-row grid-cols-3 ml-20'>
        <span className=' bobble '></span>
        <span className=' bobble bobble1'></span>
        <span className=' bobble bobble2'></span>
      </div>

        <div className='container'>
        
            <div className='slider-area lg:grid-cols-2 md:grid-cols-1 2xl:pt-[180px] xl:pt-[146px] lg:pt-[100px]'>
              <div className='relative z-10'>
                <div className='2xl:w-[570px] xl:w-[540px] lg:w-11/12'>
                <span className='z-[5] relative after:absolute after:z-[2] after:bg-gradient-2 after:w-[700px] after:h-[700px] after:rounded-full after:mt-[-550px] after:ml-[-300px]'></span>
                  <h1 data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000" className='2xl:text-[72px] xl:text-[56px] lg:text-[44px] font-bold text-white xl:leading-[90px] lg:leading-[60px] mb-5 font-redhet'>Create and sell your <span className='nav-text-grd'>NFTs</span> Collection</h1>
                  <p className='text-[20px] text-[#67737D] leading-7 font-medium mb-10'>Vestibulum bibendum dictumst dolor odio. Semper vitae platea posuere eget sed amet nunc mauris.</p>
                  <button className='px-10 py-4 rounded-xl button-bg font-medium text-white'>Collect NFT</button>
                </div>
                <Subscribe />
              </div>
              <div>
                <AntiqCard />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Slider