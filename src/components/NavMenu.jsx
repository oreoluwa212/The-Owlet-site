import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { logo } from '../assets';
import { FaBars, FaTimes } from "react-icons/fa";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div className=''>
      <div className="lgss:flex lgss:flex-row hidden justify-between items-center relative top-7 font-semibold">
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <img src={logo} alt="" className="h-8" />
          </Link>
        </div>
        <ul className="lgss:flex gap-7 justify-between w-[50%] font-semibold text-[16px] text-secondary">
          <li>Services</li>
          <Link to={"/blog"}>
            <li>Blog</li>
          </Link>
          <li>API</li>
          <Link to={"/instagram"}>
            <li>Buy Instagram Followers</li>
          </Link>
          <Link to={"/youtube"}>
            <li>Buy Youtube Followers</li>
          </Link>
        </ul>
        <div className="flex justify-between items-center gap-4">
          <Link to={"/signin"}>
            <button className="bg-white rounded-xl py-3 px-6 shadow-sm text-secondary border">
              Sign in
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-primary rounded-xl py-3 px-4 shadow-sm text-white">
              Sign up and get N300
            </button>
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-between items-center py-5 lgss:hidden border-b shadow-xs px-3">
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="h-9" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6">
          <Link to={"/signin"}>
            <button className="bg-white rounded-xl py-3 px-4 shadow-sm text-secondary border">
              Sign in
            </button>
          </Link>
          {isOpen ? (
            <FaTimes
              onClick={() => setIsOpen(false)}
              className=" cursor-pointer text-secondary z-20 text-[24px]"
            />
          ) : (
            <FaBars
              onClick={() => setIsOpen(true)}
              className=" cursor-pointer text-secondary z-20 text-[24px]"
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className={`fixed top-0 left-0 h-screen bg-white w-full text-white font-bold lgss:hidden flex flex-col pt-16 z-100 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0 " : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center items-center w-full">
            <ul className="flex flex-col gap-8 pb-8 justify-center text-secondary font-semibold text-[20px]">
              <li>Services</li>
              <Link to={"/blog"}>
                <li>Blog</li>
              </Link>
              <li>API</li>
              <Link to={"/instagram"}>
                <li>Buy Instagram Followers</li>
              </Link>
              <Link to={"/youtube"}>
                <li>Buy Youtube Followers</li>
              </Link>
            </ul>
            <div className="flex flex-col-reverse justify-center items-center gap-10 bg-white w-full px-[10%]">
              <Link className='w-full' to={"/signin"}>
                <button className="bg-white rounded-xl py-4 px-6 shadow-md text-secondary w-full border">
                  Sign in
                </button>
              </Link>
              <Link className='w-full' to={"/signup"}>
                <button className="bg-primary rounded-xl py-4 px-3 shadow-md text-white w-full">
                  Sign up and get N300
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavMenu;
