import React from 'react'
import Footer from '../footer/Footer'
import upload from '../../assets/img/wallet/upload.png'
import uploads from '../../assets/img/wallet/uploads.png'

function ConnectWallet() {
  return (
    <>
    <div className='slider-dark-bg-grd h-full pt-20 overflow-hidden'>
        <div className='container'>
            <div>
                <h2 className='mt-12 text-center text-[36px] text-white font-bold'>Upload variants</h2>
               <div className='xl:w-8/12 sm:w-10/12 mx-auto mt-11 pb-[140px]'>
                    <div className='bg-gradient-1 p-8 rounded-[30px]'>
                        <div className='grid grid-flow-row lg:grid-cols-2 xm:grid-cols-1 gap-8'>
                            <div className='bg-[#2A2E3F] w-full text-center mx-auto rounded-3xl py-10 px-8'>
                                <img className='mx-auto' src={upload} alt='' />
                                <p className='font-bold text-white mt-6 text-[20px]'>Create Single</p>
                                <button className=' relative py-4 px-8 rounded-[10px] mt-5 text-white button-bg duration-200'><label for='upload-photo' className=' cursor-pointer'>Create Single</label><input id="upload-photo" type="file" /></button>
                            </div>
                            <div className='bg-[#2A2E3F] w-full text-center mx-auto rounded-3xl py-10 px-8'>
                                <img className='mx-auto' src={uploads} alt='' />
                                <p className='font-bold text-white mt-6 text-[20px]'>Create Multiple</p>
                                <button className=' relative py-4 px-8 rounded-[10px] mt-5 text-white button-bg duration-200'><label for='upload-photo' className=' cursor-pointer'>Create Multiple</label><input id="upload-photo" type="file" /></button>
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