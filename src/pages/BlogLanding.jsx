import React from "react";
import NavMenu from "../components/NavMenu";
import { CiSearch } from "react-icons/ci";
import { HeroBlog } from "../assets";


const BlogLanding = () => {
  return (
    <>
      <div className="pb-7">
        <div className="bg-gradient-to-br from-white to-[#f5dddc]">
        <div className="px-[5%]">
          <NavMenu />
          </div>
          <div className="w-full flex flex-col items-center justify-end gap-1 h-[50vh] pb-20 mt-10">
          <div className="lgss:text-center w-[90%] lgss:w-full flex flex-col gap-3">
            <h1 className="uppercase text-primary text-[1.3rem] font-semibold">our blog</h1>
            <h1 className="text-black text-[2.1rem] font-bold leading-10">Tips and news from our team</h1>
            <p className="text-secondary ">The latest industry news, interviews, technologies, and resources.</p>
          </div>
      <div className="lgss:flex justify-center items-center w-full px-[5%] lgss:px-0">
      <div className="relative my-5">
        <input
          type="text"
          className="bg-[#ffffff] border h-12 rounded-[8px] px-10 outline-none"
          placeholder="Search"
          name="search"
          id="search"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <CiSearch className="text-[18px] text-secondary"/>
        </div>
          </div>
          </div>
          </div>
        </div>
          
        <div className="flex justify-center items-center -mt-16 px-4">
         <img className="rounded-[20px]" src={HeroBlog} alt="" />
        </div>

        
      </div>
    </>
  );
};

export default BlogLanding;
