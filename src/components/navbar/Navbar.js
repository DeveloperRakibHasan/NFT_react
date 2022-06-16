import React from 'react'
import NavMenu from './NavMenu'

function Navbar() {
  return (
    <>
    <div className='fixed w-full z-[999999]'>
    <div className='container'>
       <NavMenu /> 
    </div>
    </div>
    </>
  )
}

export default Navbar