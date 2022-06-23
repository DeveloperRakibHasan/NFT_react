import React from 'react'

function NftCard() {
  return (
    <div className='bg-[#111826] lg:py-[100px] sm:py-[50px] xm:py-10'>
        <div className='container'>
        <div className='flex justify-center'>
            <div className='lg:w-7/12 md:w-10/12 h-full lg:py-[72px] md:py-10 sm:py-6 2xl:px-[200px] xl:px-[160px] lg:px-[80px] md:px-10 sm:px-6 xm:px-8 xm:py-8 rounded-[35px] nft-card-bg'>
                <h4 className='lg:text-[36px] md:text-[30px] xm:text-[22px] text-white sm:font-bold xm:font-normal text-center sm:leading-[44px] xm:leading-7'>Find rare digital art and collect NFTs</h4>
                <div className='flex justify-center sm:mt-6 xm:mt-4'>
                    <button className='lg_btn sm:px-6 sm:py-3 xm:px-4 xm:py-2 bg-white text-black about-card-btn mr-7'>Collect NFT</button>
                    <button className='lg_btn sm:px-6 sm:py-3 xm:px-4 xm:py-2 about-card-btn'>Sell NFT</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NftCard