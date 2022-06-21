import React from 'react'
import conicon from '../../assets/img/5/1.png'
import conicon2 from '../../assets/img/5/2.png'
import conicon3 from '../../assets/img/5/3.png'

function ContactFrom() {
  return (
    <div className='slider-dark-bg-grd md:py-[180px] sm:py-[100px] xm:py-[80px]'>
        <div className='container'>
        <h2 className='text-white text-center sm:text-[35px] xm:text-[28px]'>Contact Us</h2>
        <div className='md:w-10/12 sm:w-full h-full mx-auto lg:flex items-center sm:mt-20 xm:mt-10 md:grid md:place-items-center md:grid-flow-row md:grid-cols-1 md:gap-10'>
            <form className='xl:w-7/12 lg:w-8/12 sm:w-full bg-[#232738] rounded-[30px] md:p-10 sm:p-6 xm:p-6'>
                <h4 className='mb-6 text-white sm:text-[25px] xm:text-[20px]'>Send us message</h4>
                <div className='grid grid-flow-row grid-cols-2 gap-5'>
                <div className='md:mb-4 sm:mb-2'>
                    <span className='block font-semibold text-white mb-4 sm:text-[16px] xm:text-[12px]'>Your Name</span>
                    <input className='sm:p-3 sm:text-[16px] xm:text-[14px] xm:p-2 bg-[#111826] rounded-xl w-full' type='text' placeholder='type your name' name='name' />
                </div>
                <div className='md:mb-4 sm:mb-2'>
                    <span className='block font-semibold mb-4 text-white sm:text-[16px] xm:text-[12px]'>Your Email</span>
                    <input className='sm:p-3 sm:text-[16px] xm:text-[14px] xm:p-2 bg-[#111826] rounded-xl w-full' type='text' placeholder='type your email' name='name' />
                </div>
                <div className='md:mb-4 sm:mb-2'>
                    <span className='block font-semibold mb-4 text-white sm:text-[16px] xm:text-[12px]'>Subject</span>
                    <select className='sm:p-3 sm:text-[16px] xm:text-[14px] xm:p-2 bg-[#111826] rounded-xl w-full text-gray-400' >
                        <option>chooce your subject</option>
                        <option>Sell</option>
                        <option>Buy</option>
                    </select>
                </div>
                <div className='md:mb-4 sm:mb-2'>
                    <span className='block font-semibold mb-4 text-white sm:text-[16px] xm:text-[12px]'>Select Country</span>
                    <select className='sm:p-3 sm:text-[16px] xm:text-[14px] xm:p-2 bg-[#111826] rounded-xl w-full text-gray-400' >
                        <option>select your country</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>US</option>
                        <option>AUS</option>
                        <option>BD</option>
                    </select>
                </div>
                <div className='col-span-2'>
                    <span className='block font-semibold mb-4 text-white sm:text-[16px] xm:text-[12px]'>Message</span>
                    <textarea className='sm:p-3 sm:text-[16px] xm:text-[14px] xm:p-2 md:h-[140px] sm:h-[90px] resize-none bg-[#111826] rounded-xl w-full' type='text' placeholder='type your message' name='name' />
                </div>
                </div>
                <div className='flex justify-between items-center md:mt-12 sm:mt-4 xm:mt-4'>
                    <div className='flex'>
                        <input type='checkbox' />
                        <p className='ml-4 sm:text-[16px] xm:text-[12px] text-gray-400'>Allow to all terms & condition</p>
                    </div>
                    <button className='sm:px-4 sm:py-3 xm:px-2 xm:py-1 sm:text-[16px] xm:text-[12px] rounded-xl button-bg font-medium text-white leading-7'>Send Message</button>
                </div>
            </form>
            <div className='xl:w-5/12 lg:w-4/12 sm:w-full sm:mt-10 xm:mt-6'>
            <div className='2xl:ml-[150px] xl:ml-[70px] lg:ml-0 lg:block xm:grid xm:grid-flow-row md:grid-cols-2 sm:grid-cols-2 xm:grid-cols-2 xm:gap-4 sm:gap-6 md:gap-4 md:col-span-2'>
                <div className='bg-[#232738] md:w-full rounded-[30px] 2xl:p-8 xm:p-4 lg:mb-[30px]'>
                    <div className='flex items-center mb-4'>
                        <img className='sm:mr-5 xm:mr-3 font-bold' src={conicon} alt='' />
                        <h4 className='text-white xl:text-2xl lg:text-lg md:text-[20px] xm:text-[18px]'>Address</h4>
                    </div>
                    <p className='text-gray-400 md:text-[16px] xm:text-[12px] xm:mt-[-12px]'>Consectetur scelerisque pretium adipiscing montes dolor.</p>
                </div>
                <div className='bg-[#232738] md:w-full rounded-[30px] 2xl:p-8 xm:p-4 lg:mb-[30px]'>
                    <div className='flex items-center mb-4'>
                        <img className='mr-5 font-bold' src={conicon2} alt='' />
                        <h4 className='text-white xl:text-2xl lg:text-lg  md:text-[20px] xm:text-[18px]'>Email</h4>
                    </div>
                    <li className='text-gray-400 list-none mb-2 md:text-[16px] xm:text-[12px] xm:mt-[-12px]'>infoemail@mail.com</li>
                    <li className='text-gray-400  list-none md:text-[16px] xm:text-[12px] xm:mt-[-8px]'>infoemail@mail.com</li>
                </div>
                <div className='bg-[#232738] md:w-full rounded-[30px] 2xl:p-8 xm:p-4'>
                    <div className='flex items-center mb-4'>
                        <img className='mr-5 font-bold' src={conicon3} alt='' />
                        <h4 className='text-white xl:text-2xl lg:text-lg  md:text-[20px] xm:text-[18px]'>Phone Number</h4>
                    </div>
                    <li className='text-gray-400 list-none mb-2 md:text-[16px] xm:text-[12px] xm:mt-[-12px]'>+015 0154 456874</li>
                    <li className='text-gray-400  list-none md:text-[16px] xm:text-[12px] xm:mt-[-8px]'>+015 0154 456874</li>
                   
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ContactFrom