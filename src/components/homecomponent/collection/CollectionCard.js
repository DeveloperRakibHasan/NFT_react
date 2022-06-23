import React from 'react'
import img1 from '../../../assets/img/4/1.png'
import img2 from '../../../assets/img/4/2.png'
import img3 from '../../../assets/img/4/3.png'
import img4 from '../../../assets/img/4/4.png'
import img5 from '../../../assets/img/4/5.png'
import img6 from '../../../assets/img/4/6.png'
import img7 from '../../../assets/img/4/7.png'
import img8 from '../../../assets/img/4/8.png'
import img9 from '../../../assets/img/4/9.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function CollectionCard() {
    AOS.init();
  return (
    <div className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7'>
        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" className='bg-[#232738] rounded-[30px] p-3'>
            <div className='grid grid-flow-row grid-cols-2 gap-2'>
                <img className='w-full' src={img1} alt="" />
                <img className='w-full' src={img2} alt="" />
                <img className='col-span-2 w-full' src={img3} alt="" />
            </div>
            <div className='flex justify-between pt-7 pb-4 items-center px-3'>
                <h6 className='text-white'>Qubic Art</h6>
                <span className='px-4 py-2 rounded-[30px] bg-[#111826] text-[#7D8694]'>56 Items</span>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="600" className='bg-[#232738] rounded-[30px] p-3'>
            <div className='grid grid-flow-row grid-cols-2 gap-2'>
                <img  className='col-span-2 w-full' src={img4} alt="" />
                <img className='w-full' src={img5} alt="" />
                <img className='w-full' src={img6} alt="" />
            </div>
            <div className='flex justify-between pt-7 pb-4 items-center px-3'>
                <h6 className='text-white'>Abstract art</h6>
                <span className='px-4 py-2 rounded-[30px] bg-[#111826] text-[#7D8694]'>56 Items</span>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className='bg-[#232738] rounded-[30px] p-3'>
            <div className='grid grid-flow-row grid-cols-2 gap-2'>
                <img className='w-full' src={img7} alt="" />
                <img className='w-full' src={img8} alt="" />
                <img className='col-span-2 w-full' src={img9} alt="" />
            </div>
            <div className='flex justify-between pt-7 pb-4 items-center px-3'>
                <h6 className='text-white'>Editorial Art</h6>
                <span className='px-4 py-2 rounded-[30px] bg-[#111826] text-[#7D8694]'>56 Items</span>
            </div>
        </div>
    </div>
  )
}

export default CollectionCard