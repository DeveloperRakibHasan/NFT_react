import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { HiOutlineUpload } from "react-icons/hi";
import { NavLink, Link } from 'react-router-dom'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { RiCloseFill } from "react-icons/ri";


function NavSearch() {
  const [active, setActive] = useState(false);

  const [showItem1, setShowItem1] = useState(false)
  const [showItem2, setShowItem2] = useState(false)
  const [showItem3, setShowItem3] = useState(false)

  const [mobileBtnActive, setmobileBtnActive] = useState(false)

  const showSidebar = () => setmobileBtnActive(!mobileBtnActive);
 
  return (
    <>
    <div className='flex items-center'>
        <div className='mr-9'>
          <input placeholder='Search..' className={active?'search_input search-active duration-300':'search_input duration-300'} type="text" name="search" />
          <button onClick={()=> setActive(!active)} className=' absolute ml-[-10px] mt-[6px]'>{active ? <RiCloseFill className=' font-semibold text-[20px] text-white leading-7'/>:<FiSearch className=' font-semibold text-[20px] text-[#566FFE] leading-7'/>}</button>
        </div>
        <div className='2xl:mr-9 xl:mr-4 lg:mr-3'>
            <NavLink exact to='/upload' className='flex font-medium text-[#566FFE] cursor-pointer'><label for="upload-photo" className='cursor-pointer'>Upload</label> <HiOutlineUpload className='ml-2 xl:mr-0 md:mr-2 sm:mr-2 xm:mr-2 lg:mr-4 text-[20px]' /></NavLink>
        </div>
        <div>
            <NavLink exact to="/wallet"  className='px-4 py-[10px] rounded-xl button-bg font-medium text-white leading-7 lg:hidden md::hidden sm:hidden xm:hidden xl:block'>Connect Wallet</NavLink>
        </div>
        <div className='mobilemenu-bar xl:hidden lg:block cursor-pointer'>
          <button onClick={showSidebar}> {mobileBtnActive ? <GrClose className='text-white bg-white text-[22px]' /> : <HiOutlineMenuAlt3 className='text-white text-[22px]' />}</button>
        </div>
    </div>
    <div className={mobileBtnActive ? 'w-full h-full xm:block xl:hidden opacity-1 duration-300':'w-full ml-[100px] h-full xm:block invisible xl:hidden opacity-0 duration-300'}>
        <nav className='absolute w-full min-h-screen md:top-[71px] sm:top-[68px] xm:top-[68px] py-10 z-[-1] bg-[#1C1F28]'>
            <ul className='pt-[7px]'>
                <li className='py-4 border-b' onClick={showSidebar}>
                    <NavLink exact to="/" className='ml-10 text-[18px] text-[#9C9FA2]' activeClassName=' active-nav'>
                        Home
                    </NavLink>
                </li>
                <li className='py-4 border-b' onClick={showSidebar}>
                    <NavLink exact to="/about" className="ml-10 text-[18px] text-[#9C9FA2]"  activeClassName=' active-nav'>
                        About Us
                    </NavLink>
                </li>
                <li className='py-4 border-b' onClick={()=>setShowItem1(!showItem1)}>
                    <span className='items-center flex ml-10 text-[18px] text-[#9C9FA2] cursor-pointer'>
                        Explore
                        <IoMdAddCircle className='ml-1 font-extralight' />
                    </span>
                    <ul className={showItem1 ?'active-dropdown duration-200 text-[#9C9FA2] ml-14 mt-4':'d-none'}>
                        <li className='py-2 border-b'><Link to='/explore' onClick={showSidebar}>Product</Link></li>
                        <li className='py-2 border-b' onClick={showSidebar}><Link>Explore 2</Link></li>
                        <li className='py-2' onClick={showSidebar}><Link>Explore 3</Link></li>
                    </ul>
                </li>
                <li className='py-4 border-b' onClick={()=>setShowItem2(!showItem2)}>
                    <span className='flex items-center ml-10 text-[18px] text-[#9C9FA2] cursor-pointer'>
                        Pages
                        <IoMdAddCircle className='ml-1 font-extralight' />
                    </span>
                    <ul className={showItem2 ?'active-dropdown duration-200 text-[#9C9FA2] ml-14 mt-4':'d-none' }>
                        <li className='py-2 border-b' onClick={showSidebar}><Link>Pages 1</Link></li>
                        <li className='py-2 border-b' onClick={showSidebar}><Link>Pages 2</Link></li>
                        <li className='py-2' onClick={showSidebar}><Link>Pages 3</Link></li>
                    </ul>
                </li>
                <li className='py-4 border-b' onClick={()=>setShowItem3(!showItem3)}>
                    <span className='flex items-center ml-10 text-[18px] text-[#9C9FA2] cursor-pointer'>
                        Blog
                        <IoMdAddCircle className='ml-1 font-extralight' />
                    </span>
                    <ul className={showItem3 ?'active-dropdown text-[#9C9FA2] duration-200 ml-14 mt-4':'d-none'}>
                        <li className='py-2 border-b' onClick={showSidebar}><NavLink exact to='/blog'>All Blog</NavLink></li>
                        <li className='py-2 border-b' onClick={showSidebar}><Link>Blog 2</Link></li>
                        <li className='py-2' onClick={showSidebar}><Link>Blog 3</Link></li>
                    </ul>
                </li>
                <li className='py-4 border-b mr-0' onClick={showSidebar}>
                    <NavLink exact to="/contact" className='ml-10 mr-0 text-[18px] text-[#9C9FA2]'  activeClassName=' active-nav'>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div className='mt-6'>
            <NavLink exact to="/wallet" className='px-4 py-3 rounded-xl button-bg font-medium text-white leading-7 mx-10 xl:block'>Connect Wallet</NavLink>
        </div>
        </nav>
        </div>
    </>
  )
}

export default NavSearch