import React, { useState, useEffect } from "react";
import NotificationBar from "../components/NotificationBar";
import NavMenu from "../components/NavMenu";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { heroImg } from "../assets";

const LandingPage = () => {
  return (
    <>
      <div className="pb-7">
        <NotificationBar />
        <div className="px-[5%] bg-gradient-to-br from-white to-[#f5dddc]">
          <NavMenu />
          <Hero
            h1="Elevate your social media presence"
            p="Boost your online presence with our affordable, fast, and reliable SMM and SEO services. We offer high-quality automatic social media solutions tailored for resellers and business owners, ensuring lasting connections and top-notch support."
            heroImg={heroImg}
          />
        </div>
        <Services />
      </div>
    </>
  );
};

export default LandingPage;
