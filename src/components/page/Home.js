import React from 'react'
import Slider from '../homecomponent/slider/Slider'
import Artiest from '../homecomponent/artist/Artiest'
import SellNft from '../homecomponent/sellnft/SellNft'
import Footer from '../footer/Footer'
import '../css/bobble.css'

function Home() {
  return (
    <>
    <div className='slider-dark-bg-grd h-full pt-20'>
    <div className='-z-0 grid grid-flow-row grid-cols-3 ml-20 relative'>
      <span className=' bobble '></span>
      <span className=' bobble bobble1'></span>
      <span className=' bobble bobble2'></span>
      </div>
        <Slider />
        <Artiest />
        <SellNft />
        <Footer />
    </div>
    </>
  )
}

export default Home