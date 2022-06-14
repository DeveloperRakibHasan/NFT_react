import React from 'react'

function NftCard() {
  return (
    <div className='slider-dark-bg-grd py-[100px]'>
        <div className='container'>
        <div className='flex justify-center'>
            <div className='w-7/12 h-full py-[72px] px-[200px] rounded-[35px] nft-card-bg'>
                <h4 className='text-[36px] text-white font-bold text-center leading-[44px]'>Find rare digital art and collect NFTs</h4>
                <div className='flex justify-center mt-6'>
                    <button className='px-8 py-4 text-white hover:bg-white hover:text-black duration-300 rounded-xl border mr-7'>Collect NFT</button>
                    <button className='px-8 py-4 text-white hover:bg-white hover:text-black duration-300 rounded-xl border'>Sell NFT</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NftCard