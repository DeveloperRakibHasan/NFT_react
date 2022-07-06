import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
import NavSearch from './NavSearch';

function NavMenu() {

  return (
    <>
        <div className='flex py-4 items-center float-left'>
        <div className='2xl:logo xl:mr-10'>
            <Link to="/"><span className='font-bold font-roboto md:text-[26px] xm:text-[24px] nav-text-grd'>Company.</span></Link>
        </div>
        <nav className='xl:inline-block lg:hidden md:hidden sm:hidden xm:hidden'>
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
                <li className='nav-link group'>
                    <Link className='items-center flex'>
                        Explore
                        <FaAngleDown className='ml-1 font-extralight' />
                    </Link>
                    <ul className='group-hover:active-dropdown invisible group-hover:visible group-hover:duration-200 duration-75'>
                        <li className='my-2'><Link to='/explore'>Product</Link></li>
                        <li className='my-2'><Link>Explore 2</Link></li>
                        <li className='my-2'><Link>Explore 3</Link></li>
                    </ul>
                </li>
                <li className='nav-link group'>
                    <Link className='flex items-center'>
                        Pages
                        <FaAngleDown className='ml-1 font-extralight' />
                    </Link>
                    <ul className='group-hover:active-dropdown invisible group-hover:visible group-hover:duration-200 duration-75'>
                        <li className='my-2'><Link>Pages 1</Link></li>
                        <li className='my-2'><Link>Pages 2</Link></li>
                        <li className='my-2'><Link>Pages 3</Link></li>
                    </ul>
                </li>
                <li className='nav-link group'>
                    <Link className='flex items-center'>
                        Blog
                        <FaAngleDown className='ml-1 font-extralight' />
                    </Link>
                    <ul className='group-hover:active-dropdown invisible group-hover:visible group-hover:duration-200 duration-75'>
                        <li className='my-2'><Link to='/blog'>All Blog</Link></li>
                        <li className='my-2'><Link to='/comment'>Comment</Link></li>
                        <li className='my-2'><Link>Blog 3</Link></li>
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