import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { RxVideo } from "react-icons/rx";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  AvatarPlus,
  supportImg,
} from "../assets";

const Hero = ({ heroImg, h1, p }) => {
  const location = useLocation();
  return (
    <div className="flex flex-col w-full lgss:flex-row justify-between items-center relative lgss:h-[80vh]">
      <div className="lgss:w-[55%] w-full mt-5 lgss:mt-0">
        <div className="w-full flex flex-col gap-10 pt-10 lgss:pt-0">
          <h1 className="lgss:leading-[60px] text-[2.3rem] lgss:text-[3.2rem] text-grey font-bold">
            {h1}
          </h1>
          <p className="pb-6 text-secondary lgss:text-[0.8rem] text-[1.3rem]">{p}</p>
        </div>
        <div className="hidden lgss:flex">
          <Link to={"/signin"}>
            <button className="text-white rounded-xl bg-primary  p-3 shadow-sm flex justify-center items-center gap-2">
              <AiOutlineUser />
              Sign in
            </button>
          </Link>
          <button className="mx-4 text-secondary font-semibold bg-white rounded-xl p-3 shadow-sm flex justify-center items-center gap-2">
            <RxVideo />
            Watch video
          </button>
        </div>
        <div className="lgss:hidden flex flex-col mb-10 pb-10 gap-4 w-full">
          <Link
            to={"/signin"}
            className="text-white rounded-xl bg-primary flex justify-center items-center p-3 shadow-sm"
          >
            <button className="flex justify-center items-center gap-3">
              <AiOutlineUser />
              Sign in
            </button>
          </Link>
          <Link
            className="rounded-xl bg-white flex justify-center items-center p-3 shadow-sm"
            to={"/"}
          >
            <button className="flex justify-center items-center text-secndary gap-3">
              <RxVideo />
              Watch video
            </button>
          </Link>
        </div>
      </div>
      <div className="lgss:w-[45%] flex justify-center w-full">
        {location.pathname === "/" && (
          <div className="bg-white shadow-lg w-[260px] py-2 h-16 absolute bottom-[25%] lgss:bottom-[50%] lgss:right-[23%] right-[50%] rounded-[16px] px-4 lgss:flex hidden justify-between items-center">
            <div className="flex justify-center items-center w-[55%]">
              <div style={{ display: "block", width: "100%" }}>
                <img src={Avatar1} alt="" style={{ width: "100%" }} />
              </div>
              <div style={{ display: "block", width: "100%" }}>
                <img src={Avatar2} alt="" style={{ width: "100%" }} />
              </div>
              <div style={{ display: "block", width: "100%" }}>
                <img src={Avatar3} alt="" style={{ width: "100%" }} />
              </div>
              <div style={{ display: "block", width: "100%" }}>
                <img src={Avatar4} alt="" style={{ width: "100%" }} />
              </div>
              <div style={{ display: "block", width: "100%" }}>
                <img src={AvatarPlus} alt="" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="flex lgss:flex-col text-[#344054] lgss:w-[45%] items-center gap-2">
              <h1 className="text-[20px] font-bold">13K+</h1>
              <p>new followers</p>
            </div>
          </div>
        )}
        <img
          className="lgss:h-[60vh] lgss:mt-0"
          src={heroImg}
          alt="people"
        />
        {location.pathname === "/" && (
          <div className="bg-white shadow-lg w-[200px] h-16 absolute bottom-[15%] -right-10 lgss:-right-5 rounded-[16px] px-4 lgss:flex justify-between items-center hidden">
            <img
              className="h-9 bg-[#ECFDF3] p-1 rounded-full"
              src={supportImg}
              alt=""
            />
            <div className="flex flex-col text-[#344054]">
              <h1 className="text-[20px] font-bold">24/7</h1>
              <p>customer support</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
