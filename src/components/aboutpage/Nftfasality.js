import React from 'react'
import nftfasl from '../../assets/img/about/fas.png'

function Nftfasality() {
  return (
    <div className='py-[100px] slider-dark-bg-grd'>
        <div className='container'>
            <div className='grid grid-flow-row grid-cols-2 gap-10'>
                <div>
                    <img className='w-10/12' src={nftfasl} alt="" />
                </div>
                <div className='flex items-center'>
                    <div>
                    <h4 className='text-white font-redhet leading-[52px] text-[44px] mb-10'>Facilisis ullamcorper nisi turpis dui fames ut porttitor. </h4>
                    <p className="text-[#7D8694] mb-14">Id massa id quis vitae ultrices ultrices ullamcorper condimentum. Ut at convallis pulvinar vulputate urna mauris pellentesque faucibus sed. Volutpat elit augue morbi aliquam volutpat. Sit arcu tincidunt amet, placerat. Scelerisque pellentesque vitae eros non aliquet sagittis sed. Interdum fermentum, laoreet odio posuere. </p>
                    <button className='px-4 text-center py-3 rounded-xl button-bg font-medium text-white leading-7'>NFT Button</button>
               
                    </div>    
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Nftfasality