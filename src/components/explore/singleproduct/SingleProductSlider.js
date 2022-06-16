import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Thumbs } from "swiper";

import sliderImg from '../../../assets/img/singlepdi/1.png'
import sliderImg1 from '../../../assets/img/singlepdi/2.png'
import sliderImg2 from '../../../assets/img/singlepdi/3.png'

export default function SingleProductSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img className="w-[570px] h-[500px] border-[16px] border-[#3F454E] rounded-[36px]" src={sliderImg} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[570px] h-[500px] border-[16px] border-[#3F454E] rounded-[36px]" src={sliderImg1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[570px] h-[500px] border-[16px] border-[#3F454E] rounded-[36px]" src={sliderImg2} alt='' />
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper mt-10 mb-[100px]"
      >
        <SwiperSlide>
          <img className="border-[12px] border-[#3F454E] w-[160px] h-[120px] rounded-[20px]" src={sliderImg} alt='' />
        </SwiperSlide>
        
        <SwiperSlide>
          <img className="border-[12px] border-[#3F454E] w-[160px] h-[120px] rounded-[20px]" src={sliderImg1} alt='' />
        </SwiperSlide>
        
        <SwiperSlide>
          <img className="border-[12px] border-[#3F454E] w-[160px] h-[120px] rounded-[20px]" src={sliderImg2} alt='' />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
