import React from 'react'

function BidHistory() {
  return (
    <div className='bg-[#232738] rounded-3xl py-5 px-8'>
        <div className='flex mb-7'>
            <button className='px-10 py-3 rounded-xl button-bg font-medium text-white leading-7'>Details</button>
            <button className='px-10 py-3 ml-2 rounded-xl font-medium text-gray-400 leading-7'>Bid History</button>
            <button className='px-10 py-3 ml-2 rounded-xl font-medium text-gray-400 leading-7'>Owner</button>
        </div>
        <div className='flex mb-3 w-full'>
            <div className='bg-[#111826] px-6 py-3 mr-3 rounded-xl'>
                <span className='text-[#65696B] block'>Hype type</span>
                <b className='text-white font-normal'>Calm</b>
            </div>
            <div className='bg-[#111826] px-6 py-3 mr-3 rounded-xl'>
                <span className='text-[#65696B] block'>Bastardness</span>
                <b className='text-white font-normal'>Coolio Bastard</b>
            </div>
            <div className='bg-[#111826] px-6 py-3 rounded-xl'>
                <span className='text-[#65696B] block'>Bastardness</span>
                <b className='text-white font-normal'>Coolio Bastard</b>
            </div> 
        </div>
        <div className='flex w-full mb-3'>
            <div className='bg-[#111826] px-6 py-3 mr-3 rounded-xl'>
                <span className='text-[#65696B] block'>Astragenakar</span>
                <b className='text-white font-normal'>Bastard</b>
            </div>
            <div className='bg-[#111826] px-6 py-3 mr-3 rounded-xl'>
                <span className='text-[#65696B] block'>Bad Habit</span>
                <b className='text-white font-normal'>Pipe</b>
            </div>
            <div className='bg-[#111826] px-6 py-3 mr-3 rounded-xl'>
                <span className='text-[#65696B] block'>City</span>
                <b className='text-white font-normal'>Tokyo</b>
            </div> 
            <div className='bg-[#111826] px-6 py-3 rounded-xl'>
                <span className='text-[#65696B] block'>Type</span>
                <b className='text-white font-normal'>Ape</b>
            </div> 
        </div>
        <div className='flex w-full mb-3'>
            <div className='bg-[#111826] px-6 py-3 mr-3 rounded-xl'>
                <span className='text-[#65696B] block'>Category</span>
                <b className='text-white font-normal'>Zary</b>
            </div>
            <div className='bg-[#111826] px-6 py-3 mr-3  rounded-xl'>
                <span className='text-[#65696B] block'>Bid</span>
                <b className='text-white font-normal'>BPEYti</b>
            </div>
            <div className='bg-[#111826] px-6 py-3 mr-3 rounded-xl'>
                <span className='text-[#65696B] block'>Astragenakar</span>
                <b className='text-white font-normal'>Bastard</b>
            </div> 
            <div className='bg-[#111826] px-6 py-3 rounded-xl'>
                <span className='text-[#65696B] block'>Zary</span>
                <b className='text-white font-normal'>Ape</b>
            </div> 
        </div>
    </div>
  )
}

export default BidHistory