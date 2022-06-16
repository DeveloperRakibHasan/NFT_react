import React from 'react'
import AboutUs from '../aboutpage/AboutUs'
import Founder from '../aboutpage/Founder'
import AboutSlider from '../aboutpage/AboutSlider'
import Nftfasality from '../aboutpage/Nftfasality'
import NftCard from '../aboutpage/NftCard'
import Footer from '../footer/Footer'
import Sucess from '../aboutpage/Sucess'

function About() {
  return (
    <>
      <AboutUs />
      <Sucess />
      <Founder />
      <AboutSlider />
      <Nftfasality />
      <NftCard />
      <Footer />
    </>
  )
}

export default About