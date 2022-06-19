import React from 'react'

function Copyright() {
  return (
    <div className='mt-20 text-center relative overflow-hidden'>
    <span className='before:absolute before:w-[80%] before:h-[1px] before:mt-3 2xl:before:ml-[5.5rem] xl:before:ml-[2.5rem] md:before:ml-[-39rem] before:lg:left-[-41%] before:bg-gray-700 after:absolute after:w-full after:h-[1px] after:mt-3 after:ml-2 after:bg-gray-700 copyright text-gray-600 sm:after:hidden sm:before:hidden'>&copy; Copyright Company 2022</span>
    </div>
  )
}

export default Copyright