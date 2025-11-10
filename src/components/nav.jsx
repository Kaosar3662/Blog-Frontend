/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useLocation } from 'react-router-dom';
import Button from './primary-btn';
import Navlink from './links/Navlink';
import { useState } from 'react';

const nav = () => {
  const [navState, setNavState] = useState('close');
  const location = useLocation();
  const isActive = path => location.pathname === path;

  return (
    <div className="flex fixed top-0 justify-center w-full bg-(--Neutral-Black-900) py-[18px] px-[16px] md:px-[24px] md:sticky">
      <div className="w-full max-w-[1200px]">
        <div className="flex flex-col w-full items-start md:flex-row md:items-center md:justify-between">
          <div className="flex justify-between w-full items-center md:w-fit">
            <Link 
            onClick={() =>
                setNavState(navState === 'open' ? 'close' : 'open')
              }  to={'/'}>
              <img src="/Logo.png" alt="Logo" />
            </Link>
            <button
              onClick={() =>
                setNavState(navState === 'open' ? 'close' : 'open')
              }
              className="md:hidden text-white"
            >
              <span className="material-icons-outlined cursor-pointer">
                {navState === 'open' ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          <div
            className={`flex flex-col gap-[5px] md:flex-row md:items-center  overflow-hidden ${
              navState === 'open' ? 'h-fit mt-6' : 'max-h-0 md:max-h-none mt-0'
            }`}
          >
            <Link 
            onClick={() =>
                setNavState(navState === 'open' ? 'close' : 'open')
              }  className='w-fit' to={'/'}>
              <Navlink
              
                text="Home"
                varient={`${isActive('/') ? 'active' : ''}`}
              />
            </Link>
            <Link 
            onClick={() =>
                setNavState(navState === 'open' ? 'close' : 'open')
              }  className='w-fit' to={'/signup'}>
              <Navlink
              
                text="Signup"
                varient={`${isActive('/signup') ? 'active' : ''}`}
              />
            </Link>
            <Link 
            onClick={() =>
                setNavState(navState === 'open' ? 'close' : 'open')
              }  className='w-fit' to={'/login'}>
              <Navlink
              
                text="Login"
                varient={`${isActive('/login') ? 'active' : ''}`}
              />
            </Link>
            <Link 
            onClick={() =>
                setNavState(navState === 'open' ? 'close' : 'open')
              }  className='w-fit' to={'/Blog'}>
              <Navlink
              
                text="Blog"
                varient={`${isActive('/Blog') ? 'active' : ''}`}
              />
            </Link>

            <a
              href="https://cal.com/webocean/initial?user=webocean&overlayCalendar=true"
              target="_Blank"
              className="mt-6 md:mt-0 md:ml-5 "
            >
              <Button btnTitle="Contact Us" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default nav;
