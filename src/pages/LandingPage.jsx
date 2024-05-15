import React, { useState, useEffect } from "react";
import NotificationBar from "../components/NotificationBar";
import NavMenu from "../components/NavMenu";
import Hero from "../components/Hero";
import Services from "../components/Services";

const LandingPage = () => {
  return (
    <>
      <div className="pb-7">
        <NotificationBar />
        <div className="px-[5%] bg-gradient-to-br from-white to-[#f0d2d0]">
          <NavMenu />
          <Hero />
        </div>
        <Services/>
      </div>
    </>
  );
};

export default LandingPage;
