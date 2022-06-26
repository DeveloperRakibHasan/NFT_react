import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Copyright from './Copyright';
import phoneicon from '../../assets/img/footer-icon/1.png'
import facebook from '../../assets/img/footer-icon/facebook.png'
import tw from '../../assets/img/footer-icon/tw.png'
import instagram from '../../assets/img/footer-icon/in.png'
import li from '../../assets/img/footer-icon/li.png'

function Footer() {
  return (
    <>
    <div className='bg-[#232738] md:pt-[100px] sm:pt-[50px] xm:pt-10 pb-[50px]'>
        <div className='container'>
            <div className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-6'>
                <div>
                    <div className='w-[300px]'>
                        <h4 className='nav-text-grd text-[26px] font-bold md:mb-9 sm:mb-4'>Company.</h4>
                        <p className='text-[#7D8694] mb-10'>Consectetur scelerisque pretium adipiscing montes, dolor id velit. Sed id nisl turpis neque.</p>
                    </div>
                    <div>
                        <h6 className=' font-semibold md:mb-4 sm:mb-2 text-white'>Contact Us</h6>
                        <ul>
                            <li className='text-[#7D8694] flex items-center mb-2'><img src={phoneicon} alt='' className='mr-2' /> +12 3456 7890</li>
                            <li className='text-[#7D8694] flex items-center'><img src={phoneicon} alt='' className='mr-2 ' /> +12 3456 7890</li>
                        </ul>
                    </div>
                </div>
                <div className='lg:block md:hidden sm:hidden xm:hidden'>
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
                        <h4 className='text-white md:mb-10 sm:mb-4'>Subscribe to our Newsletter</h4>
                        <p className='text-[#7D8694] mb-6'>Ac tristique sem nisi, at mauris. Sit sed porta eget tincidunt ut morbi erat nibh.</p>
                    </div>
                    <div className='flex items-center'>
                        <input className=" lg:w-[200px] sm:w-[180px] bg-gray-700 placeholder:text-gray-500 px-4 py-3 rounded-l-xl focus:outline-none focus:placeholder:text-white" type="email" placeholder="Enter your Email" />
                        <button className=' px-4 py-[10px] rounded-r-xl button-bg font-medium text-white leading-7'>Subscribe</button>
                    </div>
                    <div>
                        <ul className='flex mt-10'>
                            <li className='footer-icon'><img src={facebook} alt='' /></li>
                            <li className='footer-icon'><img src={tw} alt='' /></li>
                            <li className='footer-icon'><img src={instagram} alt='' /></li>
                            <li className='footer-icon'><img src={li} alt='' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Copyright />
    </div>
    </>
  )
}

export default Footer