import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import ProductList from './ProductList';


function Product() {

  return (

    <div className='container my-thing pb-10 z-10'>
        <div className='flex justify-between mt-[100px] mb-10'>
            <h4 className='text-[36px] text-white font-roboto'>Explore Product</h4>
            <button className='text-white flex items-center'>View All <BsArrowRightShort className='text-[22px]' /> </button>
        </div>
        <ProductList />
    </div>

  )
}

export default Product