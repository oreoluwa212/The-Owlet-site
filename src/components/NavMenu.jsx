import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { logo } from '../assets';
import { FaBars, FaTimes } from "react-icons/fa";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="lgss:flex lgss:flex-row hidden justify-between items-center relative top-7 font-semibold">
        <div className="flex justify-center items-center">
          <img src={logo} alt="" className="" />
        </div>
        {/* ++++++++ */}
        <ul className="lgss:flex gap-7 justify-between w-[50%] font-semibold text-[16px] text-secondary">
          <li>Services</li>
          <li>Blog</li>
          <li>API</li>
          <li>Buy Instagram Followers</li>
          <li>Buy Youtube Followers</li>
        </ul>
        <div className="flex justify-between items-center gap-4">
          <button className="bg-white rounded-xl py-3 px-6 shadow-md text-secondary border">
            Sign in
          </button>
          <Link to={"/"}>
            <button className="bg-primary rounded-xl py-3 px-4 shadow-md text-white">
              Sign up and get N300
            </button>
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-between items-center py-5 px-[5%] relative top-20 -mt-[4.5em] lgss:hidden">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="" />
        </div>
        {isOpen ? (
          <FaTimes
            onClick={() => setIsOpen(false)}
            className=" cursor-pointer text-primary text-[28px]"
          />
        ) : (
          <FaBars
            onClick={() => setIsOpen(true)}
            className=" cursor-pointer text-secondary text-[28px]"
          />
        )}
      </div>

      {isOpen && (
        <div
          className={`fixed  top-0 left-0 h-screen bg-primary w-3/4 z-10 text-white font-bold lgss:hidden flex flex-col pt-16 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0 " : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center items-center z-100">
            <ul className="flex flex-col gap-8 pb-8 justify-center text-center font-normal text-[20px]">
              <li>Services</li>
              <li>Blog</li>
              <li>API</li>
              <li>Buy Instagram Followers</li>
              <li>Buy Youtube Followers</li>
            </ul>
            <div className="flex flex-col justify-center items-center gap-10">
              <button className="bg-white rounded-xl py-4 px-6 shadow-md text-primary">
                Sign in
              </button>
              <Link to={"/"}>
                <button className="bg-white rounded-xl py-4 px-4 shadow-md text-primary">
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

export default NavMenu