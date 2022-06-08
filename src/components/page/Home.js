import React from 'react'
import Slider from '../homecomponent/slider/Slider'
import Artiest from '../homecomponent/artist/Artiest'
import SellNft from '../homecomponent/sellnft/SellNft'
import Footer from '../footer/Footer'

function Home() {
  return (
    <>
    <div className='slider-dark-bg-grd h-full pt-20'>
        <Slider />
        <Artiest />
        <SellNft />
        <Footer />
    </div>
    </>
  )
}

export default Home