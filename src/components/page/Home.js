import React from 'react'
import Slider from '../homecomponent/slider/Slider'
import Artiest from '../homecomponent/artist/Artiest'
import SellNft from '../homecomponent/sellnft/SellNft'
import Product from '../homecomponent/product/Product'
import Collection from '../homecomponent/collection/Collection'
import Footer from '../footer/Footer'

function Home() {
  return (
    <>
    <div className='slider-dark-bg-grd h-full pt-20'>
        <Slider />
        <Artiest />
        <Product />
        <SellNft />
        <Collection />
        <Footer />
    </div>
    </>
  )
}

export default Home