import React from "react";
import NotificationBar from "../components/NotificationBar";
import NavMenu from "../components/NavMenu";
import Hero from "../components/Hero";
import { img3, youHero } from "../assets";
import ServiceComponent from "../components/ServiceComponent";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbUsersPlus } from "react-icons/tb";
import { LuClock } from "react-icons/lu";
import { BiLike } from "react-icons/bi";
import { IoChatboxOutline } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { PiApplePodcastsLogoThin } from "react-icons/pi";
import TextLine from "../components/textComponent/TextLine";
import NeedServices from "../components/textComponent/NeedServices";
import WhyOwlet from "../components/textComponent/WhyOwlet";
import ReadySection from "../components/ReadySection";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

const YoutubeLanding = () => {
  return (
    <>
      <div className="pb-7">
        <NotificationBar />
        <div className="px-[5%] bg-gradient-to-br from-white to-[#f5dddc]">
          <NavMenu />
          <Hero
            h1="Get views and subscribers on your Youtube channel"
            p="Elevate your YouTube channel with The Owlet. Gain views and subscribers effortlessly with our targeted strategies and personalized support, ensuring your content reaches the right audience and drives exceptional growth."
            heroImg={youHero}
          />
        </div>
        <div className="lgss:px-[10%] lgss:-mt-10">
          <div className="lgss:bg-white py-4 rounded-[24px] lgss:border lgss:shadow-lg flex lgss:flex-row flex-col gap-3 justify-between items-center px-5 w-full">
            <h1 className="uppercase text-secondary font-semibold text-[18px]">
              Some of our services:
            </h1>
            <div className="lgss:flex lgss:flex-row grid grid-cols-3 justify-between lgss:w-[75%] gap-6 w-full text-secondary">
              <ServiceComponent icon={<TbUsersPlus />} p="Subscribers" />
              <ServiceComponent icon={<MdOutlineRemoveRedEye />} p="Views" />
              <ServiceComponent icon={<LuClock />} p="Watch hours" />
              <ServiceComponent icon={<BiLike />} p="Likes" />
              <ServiceComponent icon={<IoChatboxOutline />} p="Comments" />
              <ServiceComponent icon={<RiShareForwardLine />} p="Shares" />
              <ServiceComponent
                icon={<PiApplePodcastsLogoThin />}
                p="Livestream"
              />
            </div>
          </div>
        </div>
        <TextLine />
        <NeedServices
          img={img3}
          h3="WHY YOU NEED our services"
          h1="Why are Youtube views and subscribers so important?"
          p="While both views and subscribers are important for YouTube success, they represent different aspects of your channel's health. Subscribers are your core audience, the dedicated fans who actively engage with your content. They are more likely to watch future videos, share them, and drive further growth."
          continued="Views, on the other hand, indicate the overall popularity of your videos. A high view count attracts new viewers, increases discoverability, and potentially leads to more subscribers. Both metrics work together to build a strong YouTube presence."
        />
        <div className="w-full flex justify-center">
          <WhyOwlet h3="Why Us?" />
        </div>
        <HowItWorks h2={"Choose Youtube service"} />
        <ReadySection />
        <Footer />
      </div>
    </>
  );
};

export default YoutubeLanding;
