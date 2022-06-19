import React from 'react'
import ProductCard from '../../homecomponent/product/ProductCard'

function RecentView() {
  return (
    <div className='mt-[170px]'>
        <h4 className='text-white mb-10'>Recent View</h4>
        <div className='grid grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-7'>
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
        </div>
    </div>
  )
}

export default RecentView