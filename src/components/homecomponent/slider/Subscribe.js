import React from 'react'

function Subscribe() {
  return (
    <div>
        <div className='xl:flex lg:grid lg:grid-flow-row lg:grid-cols-2 md:grid-cols-3 md:grid md:grid-flow-row  lg:justify-center mt-20'>
            <div className='2xl:pr-8 xl:pr-4 xl:border-r lg:border-0 xl:mb-0 lg:mb-2'>
                <h4 className='subscribe-text 2xl:text-[36px] xl:text-[28px] lg:text-[22px]'>13k <span className='ml-4 text-blue-500 font-medium text-[18px]'>Subscriber</span></h4>
            </div>
            <div className='2xl:px-8 xl:px-4  xl:border-r lg:border-0 xl:mb-0 lg:mb-2'>
                <h4 className='subscribe-text 2xl:text-[36px] xl:text-[28px] lg:text-[22px]'>33k <span className='ml-4 text-blue-500 font-medium text-[18px]'>Subscriber</span></h4>
            </div>
            <div className='2xl:ml-8 xl:ml-4'>
                <h4 className='subscribe-text 2xl:text-[36px] xl:text-[28px] lg:text-[22px]'>16k+ <span className='ml-4 text-blue-500 font-medium text-[18px]'>Subscriber</span></h4>
            </div>
        </div>
    </div>
  )
}

export default Subscribe