import React from 'react'

function Subscribe() {
  return (
    <div>
        <div className='xl:flex xm:grid xm:grid-flow-row lg:grid-cols-2 md:grid-cols-3 md:grid-flow-row sm:grid-cols-3 xm:grid-cols-2 lg:justify-center md:mt-20 sm:my-8 xm:my-8'>
            <div className='2xl:pr-8 xl:pr-4 xl:border-r lg:border-0 xl:mb-0 lg:mb-2'>
                <h4 className='subscribe-text 2xl:text-[36px] xl:text-[28px] md:text-[22px] sm:text-[20px] xm:text-[18px]'>13k <span className='ml-4 text-blue-500 font-medium md:text-[18px] sm:text-[16px]'>Subscriber</span></h4>
            </div>
            <div className='2xl:px-8 xl:px-4  xl:border-r lg:border-0 xl:mb-0 lg:mb-2'>
                <h4 className='subscribe-text 2xl:text-[36px] xl:text-[28px] md:text-[22px] sm:text-[20px] xm:text-[18px]'>33k <span className='ml-4 text-blue-500 font-medium md:text-[18px] sm:text-[16px]'>Subscriber</span></h4>
            </div>
            <div className='2xl:ml-8 xl:ml-4'>
                <h4 className='subscribe-text 2xl:text-[36px] xl:text-[28px] md:text-[22px] sm:text-[20px] xm:text-[18px]'>16k+ <span className='ml-4 text-blue-500 font-medium md:text-[18px] sm:text-[16px]'>Subscriber</span></h4>
            </div>
        </div>
    </div>
  )
}

export default Subscribe