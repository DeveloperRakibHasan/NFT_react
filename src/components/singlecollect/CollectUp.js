import React from 'react'
import Addimg from '../../assets/img/Add.png'

function CollectUp() {
  return (
    <div>
        <h2 className='text-white font-bold text-center mt-10'>Create single collectible</h2>
        <div className='container'>
            <div className='w-10/12 mx-auto bg-[#20202A] p-10 my-12 rounded-3xl'>
              <div className='grid grid-flow-row grid-cols-2'>
                <div>
                  <div className='w-[460px] h-[430px] bg-[#2A2E3F] rounded-[10px] flex justify-center text-center items-center'>
                    <div className='text-white'>
                     <img className='mb-4 mx-auto relative' src={Addimg} alt="" /> 
                     <input type='file' className='absolute mt-[-83px] w-[70px] ml-[64px] h-[67px] opacity-0' />
                      <b className='text-[18px]'>Drag and drop your file</b>
                      <p className='text-gray-400 mt-3'>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                    </div> 
                  </div>
                  <div className='mt-7 text-white'>
                      <h4>Note :</h4>
                      <p className='text-gray-400'>Service fee : 2.37%</p>
                      <p className='text-gray-400'>You will recive : 38.00 ETH $38,000</p>
                  </div> 
                </div>
               <div className='ml-5'>
                <span className='mb-[30px] block'>
                  <label className='block mb-4 text-gray-300 font-semibold font-roboto'>Your Name</label>
                  <input className='w-full bg-[#2A2E3F] py-3 px-5 rounded-[10px]' type="text" placeholder="Example John" />
                </span>
                <span className='mb-[30px] block'>
                  <label className='block mb-4 text-gray-300 font-semibold font-roboto'>Description</label>
                  <textarea className='w-full h-[110px] resize-none bg-[#2A2E3F] py-3 px-5 rounded-[10px]' type="text" placeholder="Example John" />
                </span>
                <span className='mb-[30px] block'>
                  <label className='block mb-4 text-gray-300 font-semibold font-roboto'>Price</label>
                  <select className='w-full text-gray-400 bg-[#2A2E3F] py-3 px-5 rounded-[10px]' type="text" placeholder="Example John" >
                    <option>00.00 ETH</option>
                  </select>
                </span>
                <div className='flex gap-[30px] w-full'>
                  <button className='font-boldpy-5 px-10 bg-[#2A2E3F] text-white w-5/12 rounded-[10px] hover:button-bg duration-200'>Preview</button>
                  <button className='py-5 px-10 button-bg w-7/12 text-white rounded-[10px]'>Submit</button>
                </div>
               </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CollectUp