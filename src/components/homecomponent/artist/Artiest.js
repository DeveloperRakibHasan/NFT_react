import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import Artiests from './Artiests';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Artiest() {
  return (
    <div className='container'>
        <div className='flex justify-between mt-[100px] mb-10'>
            <h4 className='text-[36px] text-white font-roboto'>Top Artist</h4>
            <button className='text-white flex items-center'>View All <BsArrowRightShort className='text-[22px]' /> </button>
        </div>

        <Swiper
        spaceBetween={20}
        slidesPerView={4}
        pagination={true}
        modules={[Pagination]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/1.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/2.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/3.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/4.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/1.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/2.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      <SwiperSlide>
       <Artiests 
          img={require('../../../assets/img/2/4.png')}
          title="Antique"
          price="$2000,000"
        />
      </SwiperSlide>
      ...
    </Swiper>   
    </div>
  )
}

export default Artiest