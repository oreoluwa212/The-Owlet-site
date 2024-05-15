import React, { useState, useEffect } from "react";
import NotificationBar from "../components/NotificationBar";
import NavMenu from "../components/NavMenu";
import Hero from "../components/Hero";
import { instaHero } from "../assets";
import { TbUsersPlus } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiChatTextThin } from "react-icons/pi";
import { HiAtSymbol } from "react-icons/hi";
import ServiceComponent from "../components/ServiceComponent";

const InstaLanding = () => {
  return (
    <>
      <div className="pb-7">
        <NotificationBar />
        <div className="px-[5%] bg-gradient-to-br from-white to-[#f5dddc]">
          <NavMenu />
          <Hero
            h1="Fastest way to expand your Instagram audience"
            p="Discover the quickest route to expanding your Instagram audience with The Owlet. Our proven strategies and tailored solutions will help you reach new heights of engagement and success on Instagram in no time!"
            heroImg={instaHero}
          />
        </div>
        <div className="lgss:px-[10%] lgss:-mt-10">
          <div className="lgss:bg-white py-4 rounded-[24px] lgss:border lgss:shadow-lg flex lgss:flex-row flex-col gap-3 justify-between items-center px-5 w-full">
            <h1 className="uppercase text-secondary font-semibold text-[18px]">
              Some of our services:
            </h1>
            <div className="lgss:flex lgss:flex-row grid grid-cols-3 justify-between lgss:w-[75%] gap-6 w-full text-secondary">
              <ServiceComponent icon={<TbUsersPlus />} p="Followers" />
              <ServiceComponent icon={<CiHeart />} p="Likes" />
              <ServiceComponent icon={<FaRegComment />} p="Comments" />
              <ServiceComponent icon={<BiRepost />} p="Reposts" />
              <ServiceComponent icon={<MdOutlineRemoveRedEye />} p="Views" />
              <ServiceComponent icon={<PiChatTextThin />} p="Mass DM" />
              <ServiceComponent icon={<HiAtSymbol />} p="Mentions" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstaLanding;
