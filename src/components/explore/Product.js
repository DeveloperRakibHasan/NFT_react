import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import ProductList from './ProductList';

function Product() {
  return (
      <div className='slider-dark-bg-grd py-[100px]'>
         <div className='container'>
        <div className='flex justify-between items-center md:pt-[100px] sm:pt-10 sm:mb-10 xm:mb-4'>
            <h4 className='md:text-[36px] sm:text-[28px] xm:text-[24px] text-white font-roboto'>Explore Product</h4>
            <button className='text-white flex items-center'>View All <BsArrowRightShort className='text-[22px]' /> </button>
        </div>
        <ProductList />
    </div>
      </div>
  )
}

export default Product