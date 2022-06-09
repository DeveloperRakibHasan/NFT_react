import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
import NavSearch from './NavSearch';

function NavMenu() {
    const [showItem1, setShowItem1] = useState(false)
    const [showItem2, setShowItem2] = useState(false)
    const [showItem3, setShowItem3] = useState(false)

  return (
    <>
        <div className='z-[9999]'>
            <div className='container'>
                <div className='flex py-4 items-center float-left'>
                <div className='mr-[84px] pt-[4px]'>
                    <Link to="/"><span className='font-bold font-roboto text-[26px] nav-text-grd'>Company.</span></Link>
                </div>
                <nav>
                    <ul className='flex pt-[7px]'>
                        <li className='nav-link'>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className='nav-link'>
                            <Link to="/about">
                                About Us
                            </Link>
                        </li>
                        <li className='nav-link' onClick={()=>setShowItem1(!showItem1)}>
                            <Link className='flex items-center'>
                                Explore
                                <FaAngleDown className='ml-1 font-extralight' />
                            </Link>
                            <ul className={showItem1 ?'active-dropdown duration-200':'d-none'}>
                                <li className='my-1'><Link>Explore 1</Link></li>
                                <li className='my-1'><Link>Explore 2</Link></li>
                                <li className='my-1'><Link>Explore 3</Link></li>
                            </ul>
                        </li>
                        <li className='nav-link' onClick={()=>setShowItem2(!showItem2)}>
                            <Link className='flex items-center'>
                                Pages
                                <FaAngleDown className='ml-1 font-extralight' />
                            </Link>
                            <ul className={showItem2 ?'active-dropdown duration-200':'d-none' }>
                                <li className='my-1'><Link>Pages 1</Link></li>
                                <li className='my-1'><Link>Pages 2</Link></li>
                                <li className='my-1'><Link>Pages 3</Link></li>
                            </ul>
                        </li>
                        <li className='nav-link' onClick={()=>setShowItem3(!showItem3)}>
                            <Link className='flex items-center'>
                                Blog
                                <FaAngleDown className='ml-1 font-extralight' />
                            </Link>
                            <ul className={showItem3 ?'active-dropdown duration-200':'d-none'}>
                                <li className='my-1'><Link>Blog 1</Link></li>
                                <li className='my-1'><Link>Blog 2</Link></li>
                                <li className='my-1'><Link>Blog 3</Link></li>
                            </ul>
                        </li>
                        <li className='nav-link mr-0'>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                </div>
                <div className='float-right py-4'>
                <NavSearch />
                </div>
            </div>
        </div>
    </>
  )
}

export default NavMenu