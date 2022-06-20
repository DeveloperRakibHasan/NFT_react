import React from 'react'

function NftCard() {
  return (
    <div className='bg-[#111826] lg:py-[100px] sm:py-[50px]'>
        <div className='container'>
        <div className='flex justify-center'>
            <div className='lg:w-7/12 md:w-10/12 h-full lg:py-[72px] md:py-10 sm:py-6 2xl:px-[200px] xl:px-[160px] lg:px-[80px] md:px-10 sm:px-6 rounded-[35px] nft-card-bg'>
                <h4 className='lg:text-[36px] md:text-[30px] text-white font-bold text-center leading-[44px]'>Find rare digital art and collect NFTs</h4>
                <div className='flex justify-center mt-6'>
                    <button className='lg_btn sm:px-6 sm:py-3 about-card-btn mr-7'>Collect NFT</button>
                    <button className='lg_btn sm:px-6 sm:py-3 about-card-btn'>Sell NFT</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NftCard