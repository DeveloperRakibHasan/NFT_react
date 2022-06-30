import React from 'react'

function Comment() {
  return (
    <div className='border border-[#292d40] rounded-[18px] mb-[30px] p-6'>
    <h5 className='text-white mb-10'>Leave a reply</h5>
       <form>
           <div className='flex gap-[30px]'>
               <div className='w-5/12'>
                   <div className='mb-[30px]'>
                       <label className='block mb-4 text-gray-500'>Your Name</label>
                       <input className='px-5 py-3 bg-[#292d40] w-full rounded-lg' placeholder='Example John' />
                   </div>
                   <div>
                       <label className='block mb-4 text-gray-500'>Email</label>
                       <input className='px-5 py-3 bg-[#292d40] w-full rounded-lg' placeholder='Example @email' />
                   </div>
               </div>
               <div className='w-7/12'>
                   <label className='block mb-4 text-gray-500'>Message</label>
                   <textarea className='px-5 py-3 bg-[#292d40] w-full h-[166px] resize-none rounded-lg' placeholder='Example message' />
               </div>
           </div>
            <button className='button-bg mt-[30px] p-4 w-full rounded-lg text-white font-roboto'>Send Message</button>
       </form>
   </div>
  )
}

export default Comment