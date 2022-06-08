import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { HiOutlineUpload } from "react-icons/hi";

function NavSearch() {
  const [active, setActive] = useState(false);
 
  return (
    <div className='flex items-center'>
        <div className='mr-9'>
          <input placeholder='Search..' className={active?'search_input search-active duration-300':'search_input duration-300'} type="text" name="search" />
          <button onClick={()=> setActive(!active)} className=' absolute ml-[-10px] mt-[6px]'><FiSearch className=' font-semibold text-[20px] text-[#566FFE] leading-7' /></button>
        </div>
        <div className='mr-9'>
            <span className='flex font-medium text-[#566FFE] cursor-pointer'>Upload <HiOutlineUpload className='ml-2 text-[20px]' /></span>
        </div>
        <div>
            <button className='px-4 py-3 rounded-xl button-bg font-medium text-white leading-7'>Connect Wallet</button>
        </div>
    </div>
  )
}

export default NavSearch