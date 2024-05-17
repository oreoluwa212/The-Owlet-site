import React, { useState, useEffect } from "react";
import NotificationBar from "../components/NotificationBar";
import NavMenu from "../components/NavMenu";
import Hero from "../components/Hero";
import { Pattern1, Pattern2, PatternImg1, PatternImg2, img2, instaHero } from "../assets";
import { TbUsersPlus } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiChatTextThin } from "react-icons/pi";
import { HiAtSymbol } from "react-icons/hi";
import ServiceComponent from "../components/ServiceComponent";
import TextLine from "../components/textComponent/TextLine";
import NeedServices from "../components/textComponent/NeedServices";
import WhyOwlet from "../components/textComponent/WhyOwlet";
import ReadySection from "../components/ReadySection";

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
        <TextLine />
        <NeedServices
          img={img2}
          h3="WHY YOU NEED our services"
          h1="Why is it important to have Instagram followers?"
          p="Your audience matters more than you would imagine. The majority of viewers check the number of Instagram followers on an account before deciding whether or not to click the follow button. Your brand becomes more well-known as a result of what is known as social proof."
          continued="This trait is required in real life when popularity is seen to exist. No one will pay attention to you even if you are an authority in your industry if you don''t have enough followers to prove it. Instagram is all about statistics, and the amount of Instagram followers, views, and likes you have played a significant role in how visible you are there."
        />
        <div className="w-full flex justify-center">
          <WhyOwlet
            h1="Why choose The Owlet"
            h3="Why Us?"
            patternImg1={PatternImg1}
            patternImg2={PatternImg2}
            pattern1={Pattern1}
            pattern2={Pattern2}
          />
        </div>
        <ReadySection />
      </div>
    </>
  );
};

export default InstaLanding;
