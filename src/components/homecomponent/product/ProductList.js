import React from 'react'
import ProductCard from './ProductCard'


function ProductList() {
  return (
    <>
        <div className='grid grid-flow-row grid-cols-4 gap-8'>
          <div className="col-start-1 col-span-1 row-start-1 row-span-2">
            <ul className="mt-10">
              <li className='py-3 text-[20px] rounded-xl px-8 hover:button-bg text-white'>All</li>
              <li className='py-3 text-[20px] rounded-xl px-8 hover:button-bg text-white'>Games</li>
              <li className='py-3 text-[20px] rounded-xl px-8 hover:button-bg text-white'>Music</li>
              <li className='py-3 text-[20px] rounded-xl px-8 hover:button-bg text-white'>Art</li>
              <li className='py-3 text-[20px] rounded-xl px-8 hover:button-bg text-white'>Photograph</li>
              <li className='py-3 text-[20px] rounded-xl px-8 hover:button-bg text-white'>Domain</li>
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