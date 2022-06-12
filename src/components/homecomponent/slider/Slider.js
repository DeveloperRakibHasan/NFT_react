import React from 'react'
import Subscribe from './Subscribe'
import AntiqCard from './AntiqCard'
// import linkimg from '../../../assets/img/a.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Slider() {
  AOS.init();
  return (
    <>
      <div>
        <div className='container'>
        
            <div className='w-full grid grid-flow-row grid-cols-2'>
              <div className='relative z-10'>
                <div className='pt-[180px] w-[570px]'>
                <span className='z-[5] relative after:absolute after:z-[2] after:bg-gradient-2 after:w-[700px] after:h-[700px] after:rounded-full after:mt-[-550px] after:ml-[-300px]'></span>
                  <h1 data-aos="fade-right" data-aos-delay="100"  data-aos-duration="1000" className='text-[72px] font-bold text-white leading-[90px] mb-5 font-redhet'>Create and sell your <span className='nav-text-grd'>NFTs</span> Collection</h1>
                  <p className='text-[20px] text-[#67737D] leading-7 font-medium mb-10'>Vestibulum bibendum dictumst dolor odio. Semper vitae platea posuere eget sed amet nunc mauris.</p>
                  <button className='px-10 py-4 rounded-xl button-bg font-medium text-white'>Collect NFT</button>
                </div>
                <Subscribe />
              </div>
              <div className='pt-[180px]'>
                <AntiqCard />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Slider