import React from 'react'
import user from '../../assets/img/2/1.png'

function ShowComment(props) {
  return (

    <div className='border border-[#2F384A] rounded-[18px] mb-[30px] p-6'>
        <div className='flex items-center'>
            <img className='w-[50px] h-[50px] rounded-full' src={user} alt="" />
            <div className='xl:ml-5 md:ml-3 xm:ml-5  xl:text-[16px] xm:text-[14px] text-gray-400'>
                <b>Alfonso Likens</b>
                <p>writer</p>
            </div>
        </div>
        <p className='text-gray-500 mt-4 xm:text-[12px] sm:text-[14px] md:text-[16px]'>Neque, morbi purus felis orci leo tincidunt ultrices. Mauris enim nulla magna tellus odio. Quis vel bibendum diam facilisi eu cursus. Massa vestibulum lorem lorem porttitor eu nulla natoque vitae. </p>
        <button className='text-blue-500 mt-6 mb-2'>Reply</button>
    </div>
        )

}

export default ShowComment