import React from 'react'
import founder1 from '../../assets/img/about/2/1.png'
import founder2 from '../../assets/img/about/2/2.png'
import founder3 from '../../assets/img/about/2/3.png'
import founder4 from '../../assets/img/about/2/4.png'

function Founder() {
  return (
    <div className='bg-[#111826] w-full h-full py-[100px]'>
        <div className='container'>
            <h4 className='text-white mb-14 text-[40px]'>Founder</h4>
            <div className='grid grid-flow-row grid-cols-4 gap-8 justify-center'>
                <div>
                    <img className='w-full border-[12px] border-gray-800 rounded-[40px]' src={founder1} alt='' />
                    <div className='ml-4 mt-10'>
                    <h4 className='text-white'>Curtis M. Willber</h4>
                    <span className='text-gray-500'>Co-Founder</span>
                    </div>
                </div>
                <div>
                    <img className='w-full border-[12px] border-gray-800 rounded-[40px]' src={founder2} alt='' />
                    <div className='ml-4 mt-10'>
                    <h4 className='text-white'>Curtis M. Willber</h4>
                    <span className='text-gray-500'>Co-Founder</span>
                    </div>
                </div>
                <div>
                    <img className='w-full border-[12px] border-gray-800 rounded-[40px]' src={founder3} alt='' />
                    <div className='ml-4 mt-10'>
                    <h4 className='text-white'>Curtis M. Willber</h4>
                    <span className='text-gray-500'>Co-Founder</span>
                    </div>
                </div>
                <div>
                    <img className='w-full border-[12px] border-gray-800 rounded-[40px]' src={founder4} alt='' />
                    <div className='ml-4 mt-10'>
                    <h4 className='text-white'>Curtis M. Willber</h4>
                    <span className='text-gray-500'>Co-Founder</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Founder