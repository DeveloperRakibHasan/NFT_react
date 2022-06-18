import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
import NavSearch from './NavSearch';

function NavMenu() {
    const [showItem1, setShowItem1] = useState(false)
    const [showItem2, setShowItem2] = useState(false)
    const [showItem3, setShowItem3] = useState(false)
    


  return (
    <>
        <div className='flex py-4 items-center float-left'>
        <div className='2xl:logo xl:mr-10'>
            <Link to="/"><span className='font-bold font-roboto text-[26px] nav-text-grd'>Company.</span></Link>
        </div>
        <nav className='xl:inline-block lg:hidden md:hidden'>
            <ul className='flex pt-[7px]'>
                <li>
                    <NavLink exact to="/" className='nav-link' activeClassName='nav-link active-nav'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" className="nav-link"  activeClassName='nav-link active-nav'>
                        About Us
                    </NavLink>
                </li>
                <li className='nav-link' onClick={()=>setShowItem1(!showItem1)}>
                    <Link className='items-center flex'>
                        Explore
                        <FaAngleDown className='ml-1 font-extralight' />
                    </Link>
                    <ul className={showItem1 ?'active-dropdown duration-200':'d-none'}>
                        <li className='my-1'><Link to='/explore'>Product</Link></li>
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
                    <NavLink exact to="/contact" className='nav-link mr-0'  activeClassName='nav-link active-nav'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div>
        <div className='float-right py-4'>
        <NavSearch />
        </div>
    </>
  )
}

export default NavMenu