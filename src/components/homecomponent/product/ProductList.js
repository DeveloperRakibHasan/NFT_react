import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../../../assets/img/micon/1.png'
import img2 from '../../../assets/img/micon/2.png'
import img3 from '../../../assets/img/micon/3.png'
import img4 from '../../../assets/img/micon/4.png'
import img5 from '../../../assets/img/micon/5.png'
import img6 from '../../../assets/img/micon/6.png'
 

function ProductList() {

  return (
    <>
        <div className='grid grid-flow-row xl:grid-cols-4 lg:grid-cols-3 gap-8'>
          <div className="col-start-1 col-span-1 row-start-1 xl:row-span-2 lg:row-span-3 ">
            <ul className="mt-10 w-fit">
              <li className='flex items-center py-3 cursor-pointer mb-1 text-[20px] rounded-xl px-8 hover:button-bg text-white'><img className='mr-2 mt-[-6px] w-10' src={img1} alt='' /> All</li>
              <li className='flex items-center py-3 cursor-pointer mb-1 text-[20px] rounded-xl px-8 hover:button-bg text-white'><img className='mr-2 mt-[-6px] w-10' src={img2} alt='' />Games</li>
              <li className='flex items-center py-3 cursor-pointer mb-1 text-[20px] rounded-xl px-8 hover:button-bg text-white'><img className='mr-2 mt-[-6px] w-10' src={img3} alt='' />Music</li>
              <li className='flex items-center py-3 cursor-pointer mb-1 text-[20px] rounded-xl px-8 hover:button-bg text-white'><img className='mr-2 mt-[-6px] w-10' src={img4} alt='' />Art</li>
              <li className='flex items-center py-3 cursor-pointer mb-1 text-[20px] rounded-xl px-8 hover:button-bg text-white'><img className='mr-2 mt-[-6px] w-10' src={img5} alt='' />Photograph</li>
              <li className='flex items-center py-3 cursor-pointer mb-1 text-[20px] rounded-xl px-8 hover:button-bg text-white'><img className='mr-2 mt-[-6px] w-10' src={img6} alt='' />Domain</li>
            </ul>
          </div>
          <ProductCard
            title="Antique"
            rate="0.234wETH"
            dis="Highest bid 1/20"
            bgImage={require('../../../assets/img/3/1.png')}
           />
          <ProductCard
            title="Antique"
            rate="0.234wETH"
            dis="Highest bid 1/20"
            bgImage={require('../../../assets/img/3/2.png')}
           />
          <ProductCard
            title="Antique"
            rate="0.234wETH"
            dis="Highest bid 1/20"
            bgImage={require('../../../assets/img/3/3.png')}
           />
          <ProductCard
            title="Antique"
            rate="0.234wETH"
            dis="Highest bid 1/20"
            bgImage={require('../../../assets/img/3/4.png')}
           />
          <ProductCard
            title="Antique"
            rate="0.234wETH"
            dis="Highest bid 1/20"
            bgImage={require('../../../assets/img/3/5.png')}
           />
          <ProductCard
            title="Antique"
            rate="0.234wETH"
            dis="Highest bid 1/20"
            bgImage={require('../../../assets/img/3/6.png')}
           />
          
          
        </div>
    </>
  )
}

export default ProductList