import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import ProductList from './ProductList';

function Product() {
  return (
      <div className='slider-dark-bg-grd py-[100px]'>
         <div className='container'>
        <div className='flex justify-between pt-[100px] mb-10'>
            <h4 className='text-[36px] text-white font-roboto'>Explore Product</h4>
            <button className='text-white flex items-center'>View All <BsArrowRightShort className='text-[22px]' /> </button>
        </div>
        <ProductList />
    </div>
      </div>
  )
}

export default Product