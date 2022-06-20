import React from 'react'
import nftfasl from '../../assets/img/about/fas.png'

function Nftfasality() {
  return (
    <div className='md:py-[100px] sm:py-[50px] bg-[#111826]'>
        <div className='container'>
            <div className='grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 gap-10'>
                <div>
                    <img className='md:w-10/12 sm:w-full' src={nftfasl} alt="" />
                </div>
                <div className='flex items-center'>
                    <div>
                      <h4 className='text-white font-roboto font-semibold lg:leading-[54px] md:leading-9 xl:text-[44px] lg:text-[34px] sm:text-[26px] lg:mb-10 md:mb-6 sm:mb-6'>Facilisis ullamcorper nisi turpis dui fames ut porttitor. </h4>
                      <p className="text-[#7D8694] xl:text-[18px] lg:text-[16px] md:mb-14 sm:mb-7">Id massa id quis vitae ultrices ultrices ullamcorper condimentum. Ut at convallis pulvinar vulputate urna mauris pellentesque faucibus sed. Volutpat elit augue morbi aliquam volutpat. Sit arcu tincidunt amet, placerat. Scelerisque pellentesque vitae eros non aliquet sagittis sed. Interdum fermentum, laoreet odio posuere. </p>
                      <button className='px-4 text-center py-3 rounded-xl button-bg font-medium text-white leading-7'>NFT Button</button>
                    </div>    
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Nftfasality