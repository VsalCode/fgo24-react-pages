import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/icon/logo.png'

const Navbar = () => {
  return (
    <nav className='font-nunito flex justify-between items-center p-4 md:px-20 px-5'>
      <div>
        <img className='md:w-30 w-23' src={logo} alt="logo" />
      </div>
      <div className='sm:flex sm:gap-10 sm:text-secondary sm:font-semibold sm:text-lg hidden'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className='sm:hidden text-2xl block'>
        <GiHamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar
