import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import CollectionCard from './CollectionCard';

function Collection() {
  return (
    <div className='container lg:pb-[200px] md:pb-[100px] xm:pb-[80px]'>
        <div className='flex justify-between py-10'>
        <h4 className='md:text-[36px] sm:text-[28px] text-white font-roboto'>Top Collection</h4>
            <button className='text-white flex items-center'>View All <BsArrowRightShort className='text-[22px]' /> </button>
        </div>
        <CollectionCard />
    </div>
  )
}

export default Collection