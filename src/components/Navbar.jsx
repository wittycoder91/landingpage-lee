import { useState } from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../assets/images/logo.png';
import phoneIcon from '../assets/images/icon1.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='relative container mx-auto p-6 max-w-[1250px]'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2'>
          <img src={companyLogo} alt='Company Logo' className='h-8' />
        </div>
        {/* Menu Items */}
        <div className='hidden md:flex flex-1 justify-center font-semibold space-x-8'>
          <a href="#features" onClick={() => setToggleMenu(false)}>Our Process</a>
          <a href="#solutions" onClick={() => setToggleMenu(false)}>Solutions</a>
          <a href="#industries" onClick={() => setToggleMenu(false)}>Industries</a>
          <a href="#team" onClick={() => setToggleMenu(false)}>About Us</a>
          <a href="#reviews" onClick={() => setToggleMenu(false)}>Reviews</a>
        </div>
        {/* Phone Icon and Number */}
        <div className='hidden md:flex items-center space-x-2'>
          <img src={phoneIcon} alt='Phone' className='h-5 w-5' />
          <span className='text-black'>(305) 610-1001</span>
        </div>
        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? 'open block hamburger md:hidden focus:outline-none'
              : 'block hamburger md:hidden focus:outline-none'
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className={
            toggleMenu
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          }
        >
          <Link to='#'>Our Process</Link>
          <Link to='#'>Solutions</Link>
          <Link to='#'>Industries</Link>
          <Link to='#'>About Us</Link>
          <Link to='#'>Reviews</Link>
          <div className='flex items-center space-x-2 pt-2'>
            <img src={phoneIcon} alt='Phone' className='h-5 w-5' />
            <span className='text-black'>(305) 610-1001</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
