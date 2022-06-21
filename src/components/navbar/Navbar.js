import React, { useState } from 'react'
import NavMenu from './NavMenu'

function Navbar() {

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 40){
      setNavbar(true)
  } else {
    setNavbar(false)
  }
};

  window.addEventListener('scroll', changeBackground);

  return (
    <>
    <div className={navbar ? 'fixed w-full z-[999999] bg-[#1D283D] duration-300':'fixed w-full z-[999999]'}>
    <div className='container'>
       <NavMenu /> 
    </div>
    </div>
    </>
  )
}


export default Navbar