import React from 'react'
import img1 from '../../../assets/img/4/1.png'
import img2 from '../../../assets/img/4/2.png'
import img3 from '../../../assets/img/4/3.png'
import img4 from '../../../assets/img/4/4.png'
import img5 from '../../../assets/img/4/5.png'
import img6 from '../../../assets/img/4/6.png'
import img7 from '../../../assets/img/4/7.png'
import img8 from '../../../assets/img/4/8.png'
import img9 from '../../../assets/img/4/9.png'

function CollectionCard() {
  return (
    <div className='grid grid-flow-row grid-cols-3 gap-7'>
        <div className='bg-[#232738] rounded-[30px] p-3'>
            <div className='grid grid-flow-row grid-cols-2 gap-2'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img className='col-span-2' src={img3} alt="" />
            </div>
            <div className='flex justify-between pt-7 pb-4 items-center px-3'>
                <h6 className='text-white'>Qubic Art</h6>
                <span className='px-4 py-2 rounded-[30px] bg-[#111826] text-gray-600'>56 Items</span>
            </div>
        </div>
        <div className='bg-[#232738] rounded-[30px] p-3'>
            <div className='grid grid-flow-row grid-cols-2 gap-2'>
                <img  className='col-span-2' src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
            <div className='flex justify-between pt-7 pb-4 items-center px-3'>
                <h6 className='text-white'>Qubic Art</h6>
                <span className='px-4 py-2 rounded-[30px] bg-[#111826] text-gray-600'>56 Items</span>
            </div>
        </div>
        <div className='bg-[#232738] rounded-[30px] p-3'>
            <div className='grid grid-flow-row grid-cols-2 gap-2'>
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img className='col-span-2' src={img9} alt="" />
            </div>
            <div className='flex justify-between pt-7 pb-4 items-center px-3'>
                <h6 className='text-white'>Qubic Art</h6>
                <span className='px-4 py-2 rounded-[30px] bg-[#111826] text-gray-600'>56 Items</span>
            </div>
        </div>
    </div>
  )
}

export default CollectionCard