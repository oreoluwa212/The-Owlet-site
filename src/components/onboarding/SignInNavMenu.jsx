import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { FaBars, FaTimes } from "react-icons/fa";
import BoadingNavButton from "../buttons/BoadingNavButton";


function SignInNavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white shadow-sm px-[5%] py-3">
      <div className="lgss:flex lgss:flex-row hidden justify-between items-center relative font-semibold">
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <img src={logo} alt="" className="h-8" />
          </Link>
        </div>
        <ul className="lgss:flex gap-7 justify-between w-[50%] font-semibold text-[16px] text-secondary">
          <Link to={"/services"}>
            <li>Services</li>
          </Link>
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
          <Link to={"/signup"}>
            <BoadingNavButton buttonText="Sign up and get N300" />
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-between items-center py-5 px-[5%] lgss:hidden">
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="" />
          </Link>
        </div>
        {isOpen ? (
          <FaTimes
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-secondary z-20 text-[28px]"
          />
        ) : (
          <FaBars
            onClick={() => setIsOpen(true)}
            className="cursor-pointer text-secondary z-20 text-[28px]"
          />
        )}
      </div>

      {isOpen && (
        <div
          className={`fixed z-10 top-0 left-0 h-screen bg-white w-full text-white font-bold lgss:hidden flex flex-col pt-16 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0 " : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center items-center z-100">
            <ul className="flex flex-col gap-8 pb-8 justify-center text-secondary font-semibold text-[20px]">
              <Link to={"/services"}>
                <li>Services</li>
              </Link>
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
            <div className="flex flex-col-reverse justify-center items-center gap-10">
              <Link to={"/signup"}>
                <BoadingNavButton buttonText="Sign up" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignInNavMenu;
