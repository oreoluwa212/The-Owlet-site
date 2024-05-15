import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { RxVideo } from "react-icons/rx";

const Hero = ({ heroImg, h1, p }) => {
  return (
    <div className="flex flex-col w-full lgss:flex-row justify-between items-center pt-4 lgss:pt-9 pb-16 lgss:mt-10">
      <div className="lgss:w-1/2">
        <div className="lgss:w-[90%] w-full flex flex-col gap-8">
          <h1 className="lgss:leading-[60px] text-[2rem] lgss:text-[4rem] font-bold">
            {h1}
          </h1>
          <p className="pb-6 text-secondary ">{p}</p>
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
        <div className="lgss:hidden flex flex-col gap-4 w-full">
          <Link to={"/signin"} className="text-white rounded-xl bg-primary flex justify-center items-center p-3 shadow-sm"
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
      <div className="lgss:w-1/2 p-10 flex justify-end">
        <img className="h-[60vh]" src={heroImg} alt="people" />
      </div>
    </div>
  );
};

export default Hero;