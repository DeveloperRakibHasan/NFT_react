import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { HiOutlineUpload } from "react-icons/hi";
import { Link } from 'react-router-dom'

function NavSearch() {
  const [active, setActive] = useState(false);
  const [login, setLogin] = useState(false);
 
  return (
    <>
    <div className='flex items-center'>
        <div className='mr-9'>
          <input placeholder='Search..' className={active?'search_input search-active duration-300':'search_input duration-300'} type="text" name="search" />
          <button onClick={()=> setActive(!active)} className=' absolute ml-[-10px] mt-[6px]'><FiSearch className={active?' font-semibold text-[20px] text-[#fff] duration-150 leading-7 ':' font-semibold text-[20px] text-[#566FFE] leading-7'} /></button>
        </div>
        <div className='2xl:mr-9 xl:mr-4 lg:mr-3'>
            <span className='flex font-medium text-[#566FFE] cursor-pointer'><label for="upload-photo" className='cursor-pointer'>Upload</label> <input id="upload-photo" type="file" /> <HiOutlineUpload className='ml-2 text-[20px]' /></span>
        </div>
        <div>
            <button onClick={()=> setLogin(!login)} className='px-4 py-3 rounded-xl button-bg font-medium text-white leading-7'>Connect Wallet</button>
        </div>
    </div>
    
      <div className={login ? ' absolute shadow-xl p-10 bg-white w-[500px] h-[500px] z-50 rounded-[30px] mt-10 duration-200 opacity-[1] visible':'absolute p-10 bg-white w-[500px] h-[500px] z-50 rounded-[30px] opacity-0 invisible'}>
        <div className='w-full flex justify-center'>
        <div className='mt-10'>
        <h4 className='font-redhet mb-10 font-semibold'>Login your Account</h4>
          <input required className='w-full focus:outline-none focus:placeholder:text-black mb-5 bg-gray-100 px-10 py-4 rounded-md ' type="email" name="email" placeholder="Enter your Email" />
          <input required className='w-full mb-5 focus:outline-none focus:placeholder:text-black bg-gray-100 px-10 py-4 rounded-md '  type="password" name="email" placeholder="Enter your password" />
          <button type="submit" className='px-4 w-full text-center py-3 rounded-xl button-bg font-medium text-white leading-7'>LogIN</button>
        <p className='mt-8'>You don't have any account? <Link className="ml-2 text-blue-400">Sign Up</Link> </p>
        </div>
        </div>
      </div>
    </>
  )
}

export default NavSearch