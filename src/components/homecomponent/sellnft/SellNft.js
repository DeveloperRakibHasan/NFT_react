import React from 'react'
import SellNftCard from './SellNftCard'
import AOS from 'aos';
import 'aos/dist/aos.css';

function SellNft() {
    AOS.init();
  return (
   <>
   <div className='py-[120px] overflow-hidden'>
    <div className='container'>
            <div className='mb-10'>
                <h2 data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className='text-[48px] text-center text-white font-redhet font-bold flex justify-center'>Easy to Create and sell <br></br> your NFTs</h2>
            </div>
            <div className='grid grid-flow-row xl:grid-cols-4 lg:grid-cols-2 gap-7'>
                <SellNftCard 
                 img={require('../../../assets/img/icon1/1.png')}
                 stepnum="01"
                 title="Set up your wallet"
                 pragraph="Consectetur scelerisque pretium adipiscing montes, dolor id velit. Sed id nisl turpis neque."
                />
                <SellNftCard 
                 img={require('../../../assets/img/icon1/2.png')}
                 stepnum="02"
                 title="Create your collection"
                 pragraph="Consectetur scelerisque pretium adipiscing montes, dolor id velit. Sed id nisl turpis neque."
                />
                <SellNftCard 
                 img={require('../../../assets/img/icon1/3.png')}
                 stepnum="03"
                 title="Add your NFT’s"
                 pragraph="Consectetur scelerisque pretium adipiscing montes, dolor id velit. Sed id nisl turpis neque."
                />
                <SellNftCard 
                 img={require('../../../assets/img/icon1/4.png')}
                 stepnum="04"
                 title="Sell your NFT’s"
                 pragraph="Consectetur scelerisque pretium adipiscing montes, dolor id velit. Sed id nisl turpis neque."
                />
                
            </div>
        </div>
   </div>
   </>
  )
}

export default SellNft