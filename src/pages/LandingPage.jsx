import React, { useState, useEffect } from "react";
import NotificationBar from "../components/NotificationBar";
import NavMenu from "../components/NavMenu";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <>
      <div className="">
        <NotificationBar />
        <div className="px-[5%] bg-gradient-to-br from-white to-[#f0d2d0] h-screen">
          <NavMenu />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
