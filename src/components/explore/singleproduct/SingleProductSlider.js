import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { GiSelfLove } from "react-icons/gi";
import { BiShareAlt } from "react-icons/bi";

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
          <img className="relative w-[570px] 2xl:h-[500px] xl:h-[400px] lg:h-[400px] md:h-[500px] sm:h-[400px] md:w-full xm:h-[300px] border-[16px] border-[#3F454E] rounded-[36px]" src={sliderImg} alt='' />
          <span className="flex absolute top-11 right-9 items-center gap-1 px-5 py-2 rounded-3xl bg-[#232738] text-white"><GiSelfLove /><span>214</span></span>
          <span className="flex absolute bottom-11 right-9 items-center gap-1 px-5 py-2 rounded-3xl bg-[#232738] text-white"><BiShareAlt /></span>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[570px] 2xl:h-[500px] xl:h-[400px] lg:h-[400px] md:h-[500px] sm:h-[400px] md:w-full xm:h-[300px] border-[16px] border-[#3F454E] rounded-[36px]" src={sliderImg1} alt='' />
           <span className="flex absolute top-11 right-9 items-center gap-1 px-5 py-2 rounded-3xl bg-[#232738] text-white"><GiSelfLove /><span>218</span></span>
          <span className="flex absolute bottom-11 right-9 items-center gap-1 px-5 py-2 rounded-3xl bg-[#232738] text-white"><BiShareAlt /></span>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[570px] 2xl:h-[500px] xl:h-[400px] lg:h-[400px] md:h-[500px] sm:h-[400px] md:w-full xm:h-[300px] border-[16px] border-[#3F454E] rounded-[36px]" src={sliderImg2} alt='' />
           <span className="flex absolute top-11 right-9 items-center gap-1 px-5 py-2 rounded-3xl bg-[#232738] text-white"><GiSelfLove /><span>334</span></span>
          <span className="flex absolute bottom-11 right-9 items-center gap-1 px-5 py-2 rounded-3xl bg-[#232738] text-white"><BiShareAlt /></span>
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper mt-10 md:mb-[100px] xm:mb-16"
      >
       <SwiperSlide>
          <img className="border-[10px] border-[#3F454E] w-[160px] xl:h-[122px] lg:h-[80px] md:h-[122px] sm:h-[80px] rounded-[20px]" src={sliderImg} alt='' />
        </SwiperSlide>
        
        <SwiperSlide>
          <img className="border-[10px] border-[#3F454E] w-[160px] xl:h-[122px] lg:h-[80px] md:h-[122px] sm:h-[80px] rounded-[20px]" src={sliderImg1} alt='' />
        </SwiperSlide>
        
        <SwiperSlide>
          <img className="border-[10px] border-[#3F454E] w-[160px] xl:h-[122px] lg:h-[80px] md:h-[122px] sm:h-[80px] rounded-[20px]" src={sliderImg2} alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
