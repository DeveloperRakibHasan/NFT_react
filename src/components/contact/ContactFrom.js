import React from 'react'
import conicon from '../../assets/img/5/1.png'
import conicon2 from '../../assets/img/5/2.png'
import conicon3 from '../../assets/img/5/3.png'

function ContactFrom() {
  return (
    <div className='slider-dark-bg-grd py-[180px]'>
        <div className='container'>
        <h2 className='text-white text-center'>Contact Us</h2>
        <div className='w-10/12 h-full mx-auto flex items-center mt-20'>
            <form className='w-7/12 bg-[#232738] rounded-[30px] p-10'>
                <h4 className='mb-6 text-white'>Send us message</h4>
                <div className='grid grid-flow-row grid-cols-2 gap-5'>
                <div className='mb-4'>
                    <span className='block font-semibold text-white mb-4'>Your Name</span>
                    <input className='p-3 bg-[#111826] rounded-xl w-full' type='text' placeholder='type your name' name='name' />
                </div>
                <div className='mb-4'>
                    <span className='block font-semibold mb-4 text-white'>Your Email</span>
                    <input className='p-3 bg-[#111826] rounded-xl w-full' type='text' placeholder='type your email' name='name' />
                </div>
                <div className='mb-4'>
                    <span className='block font-semibold mb-4 text-white'>Subject</span>
                    <input className='p-3 bg-[#111826] rounded-xl w-full' type='text' placeholder='chooce your subject' name='name' />
                </div>
                <div className='mb-4'>
                    <span className='block font-semibold mb-4 text-white'>Select Country</span>
                    <input className='p-3 bg-[#111826] rounded-xl w-full' type='text' placeholder='select your country' name='name' />
                </div>
                <div className='col-span-2'>
                    <span className='block font-semibold mb-4 text-white'>Message</span>
                    <textarea className='p-3 h-[140px] resize-none bg-[#111826] rounded-xl w-full' type='text' placeholder='type your message' name='name' />
                </div>
                </div>
                <div className='flex justify-between items-center mt-12'>
                    <div className='flex'>
                        <input type='checkbox' />
                        <p className='ml-4 text-gray-400'>Allow to all terms & condition</p>
                    </div>
                    <button className='px-4 py-3 rounded-xl button-bg font-medium text-white leading-7'>Send Message</button>
                </div>
            </form>
            <div className='w-5/12'>
            <div className='ml-[150px]'>
                <div className='bg-[#232738] rounded-[30px] p-8 mb-[30px]'>
                    <div className='flex items-center mb-4'>
                        <img className='mr-5 font-bold' src={conicon} alt='' />
                        <h4 className='text-white'>Address</h4>
                    </div>
                    <p className='text-gray-400'>Consectetur scelerisque pretium adipiscing montes dolor.</p>
                </div>
                <div className='bg-[#232738] rounded-[30px] p-8 mb-[30px]'>
                    <div className='flex items-center mb-4'>
                        <img className='mr-5 font-bold' src={conicon2} alt='' />
                        <h4 className='text-white'>Email</h4>
                    </div>
                    <li className='text-gray-400 list-none mb-2'>infoemail@mail.com</li>
                    <li className='text-gray-400  list-none'>infoemail@mail.com</li>
                </div>
                <div className='bg-[#232738] rounded-[30px] p-8'>
                    <div className='flex items-center mb-4'>
                        <img className='mr-5 font-bold' src={conicon3} alt='' />
                        <h4 className='text-white'>Phone Number</h4>
                    </div>
                    <li className='text-gray-400 list-none mb-2'>+015 0154 456874</li>
                    <li className='text-gray-400  list-none'>+015 0154 456874</li>
                   
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ContactFrom