import React from 'react'
import nftfasl from '../../assets/img/about/fas.png'

function Nftfasality() {
  return (
    <div className='md:py-[100px] sm:py-[50px] xm:py-10 bg-[#111826]'>
        <div className='container'>
            <div className='grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 gap-10'>
                <div>
                    <img className='md:w-10/12 sm:w-full' src={nftfasl} alt="" />
                </div>
                <div className='flex items-center'>
                    <div>
                      <h4 className='text-white font-roboto font-semibold lg:leading-[54px] md:leading-9 xl:text-[44px] lg:text-[34px] sm:text-[26px] lg:mb-10 md:mb-6 sm:mb-6 xm:mb-5'>Facilisis ullamcorper nisi turpis dui fames ut porttitor. </h4>
                      <p className="text-[#7D8694] xl:text-[18px] lg:text-[16px] sm:text-[16px] xm:text-[14px] md:mb-14 sm:mb-7 xm:mb-4">Id massa id quis vitae ultrices ultrices ullamcorper condimentum. Ut at convallis pulvinar vulputate urna mauris pellentesque faucibus sed. Volutpat elit augue morbi aliquam volutpat. Sit arcu tincidunt amet, placerat. Scelerisque pellentesque vitae eros non aliquet sagittis sed. Interdum fermentum, laoreet odio posuere. </p>
                      <button className='sm:px-4 lg:px-8 xm:px-3 text-center sm:py-3 xm:py-2 rounded-xl button-bg sm:font-medium xm:font-normal text-white leading-7'>NFT Button</button>
                    </div>    
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Nftfasality