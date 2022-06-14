import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import img1 from '../../assets/img/micon/1.png'
import img2 from '../../assets/img/micon/2.png'
import img3 from '../../assets/img/micon/3.png'
import img4 from '../../assets/img/micon/4.png'
import img5 from '../../assets/img/micon/5.png'
import img6 from '../../assets/img/micon/6.png'


function ProductList() {

  const productArray = [
    {
      id: 1,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/1.png'),
  
    },
    {
      id: 1,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/2.png'),
  
    },
    {
      id: 1,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/3.png'),
  
    },
    {
      id: 1,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/4.png'),
  
    },
    {
      id: 1,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/5.png'),
  
    },
    {
      id: 1,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/6.png'),
  
    },
    {
      id: 1,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/1.png'),
  
    },
    {
      id: 1,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/2.png'),
  
    },
    {
      id: 1,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/3.png'),
  
    },
  
  ]

  return (
    <>
        <div className='grid grid-flow-row grid-cols-4 gap-8'>
          <div className="col-start-1 col-span-1 row-start-1 row-span-3">
            <ul className="mt-10 w-fit">
              <li className='flex items-center py-4 mb-1 cursor-pointer text-[20px] rounded-xl px-8 hover:button-bg text-white'><img className='mr-2 mt-[-6px] w-10' src={img1} alt='' />All</li>
              <li className='flex items-center py-4 mb-1 cursor-pointer text-[20px] rounded-xl px-8 hover:button-bg text-white'><img className='mr-2 mt-[-6px] w-10' src={img2} alt='' />Games</li>
              <li className='flex items-center py-4 mb-1 cursor-pointer text-[20px] rounded-xl px-8 hover:button-bg text-white'><img className='mr-2 mt-[-6px] w-10' src={img3} alt='' />Music</li>
              <li className='flex items-center py-4 mb-1 cursor-pointer text-[20px] rounded-xl px-8 hover:button-bg text-white'><img className='mr-2 mt-[-6px] w-10' src={img4} alt='' />Art</li>
              <li className='flex items-center py-4 mb-1 cursor-pointer text-[20px] rounded-xl px-8 hover:button-bg text-white'><img className='mr-2 mt-[-6px] w-10' src={img5} alt='' />Photograph</li>
              <li className='flex items-center py-4 mb-1 cursor-pointer text-[20px] rounded-xl px-8 hover:button-bg text-white'><img className='mr-2 mt-[-6px] w-10' src={img6} alt='' />Domain</li>
            </ul>
          </div>

          {productArray.map((item,id)=>{
            return(
              <div key={item.id}>
                <Link to={`/explore/${id}`}>
                <ProductCard title={item.title} rate={item.rate} dis={item.dis} bgImage={item.image}/>
                </Link>
              </div>
            )
          })}
        
        </div>
    </>
  )
}

export default ProductList