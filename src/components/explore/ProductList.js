import React from 'react'
import ProductCard from './ProductCard'
// import { Link } from 'react-router-dom'
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
      id: 2,
      title: 'Antique1',
      rate: '0.235wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/2.png'),
  
    },
    {
      id: 3,
      title: 'Antique2',
      rate: '0.236wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/3.png'),
  
    },
    {
      id: 4,
      title: 'Antique3',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/4.png'),
  
    },
    {
      id: 5,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/5.png'),
  
    },
    {
      id: 6,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/6.png'),
  
    },
    {
      id: 7,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/1.png'),
  
    },
    {
      id: 8,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/2.png'),
  
    },
    {
      id: 9,
      title: 'Antique',
      rate: '0.234wETH',
      dis: 'Highest bid 1/20',
      image: require('../../assets/img/3/3.png'),
  
    },
  
  ]

  return (

    <>
        <div className='grid grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-8 md:gap-6'>
          <div className="col-start-1 col-span-1 row-start-1 xl:row-span-3 lg:row-span-5 lg:col-span-1 md:col-span-2">
            <ul className="lg:mt-10 lg:block md:mt-0 md:mb-10 w-fit md:grid md:grid-flow-row md:grid-cols-3">
              <li className='explore-list'><img className='mr-2 mt-[-6px] w-10' src={img1} alt='' />All</li>
              <li className='explore-list'><img className='mr-2 mt-[-6px] w-10' src={img2} alt='' />Games</li>
              <li className='explore-list'><img className='mr-2 mt-[-6px] w-10' src={img3} alt='' />Music</li>
              <li className='explore-list'><img className='mr-2 mt-[-6px] w-10' src={img4} alt='' />Art</li>
              <li className='explore-list'><img className='mr-2 mt-[-6px] w-10' src={img5} alt='' />Photograph</li>
              <li className='explore-list'><img className='mr-2 mt-[-6px] w-10' src={img6} alt='' />Domain</li>
            </ul>
          </div>

          {productArray.map((item,id)=>{
            return(
              <div key={item.id}>
                  <ProductCard singleProductLink={item.id} title={item.title} rate={item.rate} dis={item.dis} bgImage={item.image} item={item} key={item.id+id}/>
              </div>
            )
          })}
        
        </div>
    </>
  )
}

export default ProductList