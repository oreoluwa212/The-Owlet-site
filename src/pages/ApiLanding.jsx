import React from "react";
import HeaderSearch from "../components/headersLanding/HeaderSearch";
import Sidebar from "../components/Sidebar";
import { logo } from "../assets";

const ApiLanding = () => {
  return (
    <div className="max-w-full flex flex-col bg-bg">
      <div className="w-full flex justify-between items-center border-b-[1px]">
        <div className="w-[20%] pl-6">
          <img src={logo} alt="the-owlet logo" />
        </div>
        <div className="w-[80%]">
          <HeaderSearch />
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] h-screen"></div>
      </div>
    </div>
  );
};

export default ApiLanding;
