import React from 'react'
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='bg-[#232738] pt-[100px] pb-[50px]'>
        <div className='container'>
            <div className='grid grid-flow-row grid-cols-3 gap-6'>
                <div>
                    <div className='w-[300px]'>
                        <h4 className='nav-text-grd text-[26px] font-bold mb-9'>Company.</h4>
                        <p className='text-[#7D8694] mb-10'>Consectetur scelerisque pretium adipiscing montes, dolor id velit. Sed id nisl turpis neque.</p>
                    </div>
                    <div>
                        <h6 className=' font-semibold mb-4 text-white'>Contact Us</h6>
                        <ul>
                            <li className='text-[#7D8694] flex items-center mb-2'><FaPhoneAlt className='mr-2' /> +12 3456 7890</li>
                            <li className='text-[#7D8694] flex items-center'><FaPhoneAlt className='mr-2 ' /> +12 3456 7890</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='grid grid-flow-row grid-cols-2'>
                    <ul>
                    <h6 className='text-white mb-10 '>Information</h6>
                        <li className="mb-4 text-[#7D8694] text-[18px]">Home</li>
                        <li className="mb-4 text-[#7D8694] text-[18px]">About</li>
                        <li className="mb-4 text-[#7D8694] text-[18px]">Activity Log</li>
                        <li className="mb-4 text-[#7D8694] text-[18px]">Our Blogs</li>
                    </ul>
                    <ul>
                    <h6 className='text-white mb-10 '>Likes</h6>
                        <li className="mb-4 text-[#7D8694] text-[18px]">Home</li>
                        <li className="mb-4 text-[#7D8694] text-[18px]">About</li>
                        <li className="mb-4 text-[#7D8694] text-[18px]">Our Blogs</li>
                    </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className='text-white mb-10'>Subscribe to our Newsletter</h4>
                        <p className='text-[#7D8694] mb-6'>Ac tristique sem nisi, at mauris. Sit sed porta eget tincidunt ut morbi erat nibh.</p>
                    </div>
                    <div className='flex items-center'>
                        <input className="bg-gray-700 placeholder:text-gray-500 px-4 py-3 rounded-l-xl focus:outline-none focus:placeholder:text-white" type="email" placeholder="Enter your Email" />
                        <button className=' px-4 py-[10px] rounded-r-xl button-bg font-medium text-white leading-7'>Subscribe</button>
                    </div>
                    <div>
                        <ul className='flex mt-10'>
                            <li className='mr-4 text-white text-[20px] cursor-pointer hover:text-blue-500'><FaFacebook/></li>
                            <li className='mr-4 text-white text-[20px] cursor-pointer hover:text-blue-400'><FaTwitter /></li>
                            <li className='mr-4 text-white text-[20px] cursor-pointer hover:text-[#E80053]'><FaInstagram /></li>
                            <li className='mr-4 text-white text-[20px] cursor-pointer hover:text-blue-900'><FaLinkedin /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer