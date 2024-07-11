import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { PiLifebuoyBold } from "react-icons/pi";

function HeaderSearch() {
  return (
    <div className="hidden lgss:flex justify-around items-center w-full py-7 h-[85px]">
      <div className="relative w-[70%]">
        <input
          type="text"
          className="w-full bg-[#F2F4F7] h-12 rounded-[8px] px-10 outline-none"
          placeholder="Search"
          name="search"
          id="search"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <AiOutlineSearch className="text-gray-400 text-[22px]" />
        </div>
      </div>
      <div className="flex justify-end items-center gap-10 w-[15%]">
        <button className="px-3 rounded-lg border py-3 font-medium flex items-center gap-2">
          <span className="text-2xl font-light text-[#a4a9b6]">
            <PiLifebuoyBold />
          </span>
          Support
        </button>
      </div>
    </div>
  );
}

export default HeaderSearch;
