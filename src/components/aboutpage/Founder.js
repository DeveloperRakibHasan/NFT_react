import React from 'react'
import founder1 from '../../assets/img/about/2/1.png'
import founder2 from '../../assets/img/about/2/2.png'
import founder3 from '../../assets/img/about/2/3.png'
import founder4 from '../../assets/img/about/2/4.png'

function Founder() {
  return (
    <div className='bg-[#111826] w-full h-full xl:py-[100px] md:py-24 xm:py-10'>
        <div className='container'>
            <h4 className='text-white sm:mb-14 xm:mb-8 sm:text-[40px] xm:text-[30px]'>Founder</h4>
            <div className='grid grid-flow-row md:grid-cols-4 sm:grid-cols-2 xm:grid-cols-2 xm:gap-4 sm:gap-8 md:gap-4 lg:gap-8 justify-center'>
                <div>
                    <img className='w-full border-[12px] border-gray-800 rounded-[40px]' src={founder1} alt='' />
                    <div className='ml-4 lg:mt-10 md:mt-6 sm:mt-3 xm:mt-2'>
                    <h4 className='text-white lg:text-[20px] md:text-[18px] xm:text-[16px]'>Curtis M. Willber</h4>
                    <span className='text-gray-500 sm:text-[16px] xm:text-[14px]'>Co-Founder</span>
                    </div>
                </div>
                <div>
                    <img className='w-full border-[12px] border-gray-800 rounded-[40px]' src={founder2} alt='' />
                    <div className='ml-4 lg:mt-10 md:mt-6 sm:mt-3 xm:mt-2'>
                    <h4 className='text-white lg:text-[20px]  md:text-[18px] xm:text-[16px]'>Curtis M. Willber</h4>
                    <span className='text-gray-500'>Co-Founder</span>
                    </div>
                </div>
                <div>
                    <img className='w-full border-[12px] border-gray-800 rounded-[40px]' src={founder3} alt='' />
                    <div className='ml-4 lg:mt-10 md:mt-6 sm:mt-3 xm:mt-2'>
                    <h4 className='text-white lg:text-[20px]  md:text-[18px] xm:text-[16px]'>Curtis M. Willber</h4>
                    <span className='text-gray-500'>Co-Founder</span>
                    </div>
                </div>
                <div>
                    <img className='w-full border-[12px] border-gray-800 rounded-[40px]' src={founder4} alt='' />
                    <div className='ml-4 lg:mt-10 md:mt-6 sm:mt-3 xm:mt-2'>
                    <h4 className='text-white lg:text-[20px]  md:text-[18px] xm:text-[16px]'>Curtis M. Willber</h4>
                    <span className='text-gray-500'>Co-Founder</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Founder