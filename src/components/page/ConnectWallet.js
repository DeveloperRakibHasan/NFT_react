import React from 'react'
import Footer from '../footer/Footer'
import walletimg from '../../assets/img/wallet/1.png'
import walletimg2 from '../../assets/img/wallet/2.png'
import walletimg3 from '../../assets/img/wallet/3.png'

function ConnectWallet() {
  return (
    <>
    <div className='slider-dark-bg-grd h-full pt-20'>
        <div className='container'>
            <div>
                <h2 className='mt-12 text-center text-[36px] text-white font-bold'>Connect your Wallet</h2>
               <div className='w-10/12 mx-auto mt-11 pb-[140px]'>
                    <div className='bg-gradient-1 p-8 rounded-[30px]'>
                        <div className='grid grid-flow-row xl:grid-cols-3 md:grid-cols-2 xm:grid-cols-1 gap-8'>
                            <div className='bg-[#2A2E3F] w-full text-center mx-auto rounded-3xl py-10 px-12'>
                                <img className='mx-auto' src={walletimg} alt='' />
                                <p className='font-bold text-white mt-6 text-[20px]'>Create Single</p>
                                <button className='py-4 px-11 rounded-[10px] mt-5 text-white bg-gray-700 hover:button-bg duration-200'>Connect</button>
                            </div>
                            <div className='bg-[#2A2E3F] w-full text-center mx-auto rounded-3xl py-10 px-12'>
                                <img className='mx-auto' src={walletimg2} alt='' />
                                <p className='font-bold text-white mt-6 text-[20px]'>Create Single</p>
                                <button className='py-4 px-11 rounded-[10px] mt-5 text-white bg-gray-700 hover:button-bg duration-200'>Connect</button>
                            </div>
                            <div className='bg-[#2A2E3F] w-full text-center mx-auto rounded-3xl py-10 px-12'>
                                <img className='mx-auto' src={walletimg3} alt='' />
                                <p className='font-bold text-white mt-6 text-[20px]'>Create Single</p>
                                <button className='py-4 px-11 rounded-[10px] mt-5 text-white bg-gray-700 hover:button-bg duration-200'>Connect</button>
                            </div>
                            <div className='bg-[#2A2E3F] w-full text-center mx-auto rounded-3xl py-10 px-12'>
                                <img className='mx-auto' src={walletimg} alt='' />
                                <p className='font-bold text-white mt-6 text-[20px]'>Create Single</p>
                                <button className='py-4 px-11 rounded-[10px] mt-5 text-white bg-gray-700 hover:button-bg duration-200'>Connect</button>
                            </div>
                            <div className='bg-[#2A2E3F] w-full text-center mx-auto rounded-3xl py-10 px-12'>
                                <img className='mx-auto' src={walletimg} alt='' />
                                <p className='font-bold text-white mt-6 text-[20px]'>Create Single</p>
                                <button className='py-4 px-11 rounded-[10px] mt-5 text-white bg-gray-700 hover:button-bg duration-200'>Connect</button>
                            </div>
                            <div className='bg-[#2A2E3F] w-full text-center mx-auto rounded-3xl py-10 px-12'>
                                <img className='mx-auto' src={walletimg} alt='' />
                                <p className='font-bold text-white mt-6 text-[20px]'>Create Single</p>
                                <button className='py-4 px-11 rounded-[10px] mt-5 text-white bg-gray-700 hover:button-bg duration-200'>Connect</button>
                            </div>
                        </div>

                    </div>
               </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ConnectWallet