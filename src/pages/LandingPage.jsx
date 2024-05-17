import React, { useState, useEffect } from "react";
import NotificationBar from "../components/NotificationBar";
import NavMenu from "../components/NavMenu";
import Hero from "../components/Hero";
import Services from "../components/Services";
import {
  Pattern1,
  Pattern2,
  PatternImg1,
  PatternImg2,
  heroImg,
  img1,
} from "../assets";
import TextLine from "../components/textComponent/TextLine";
import NeedServices from "../components/textComponent/NeedServices";
import WhyOwlet from "../components/textComponent/WhyOwlet";

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
        <TextLine />
        <NeedServices
          img={img1}
          h3="WHY YOU NEED our services"
          h1="Why is social media marketing so effective?"
          p="It is very clear to see that social marketing has become a treasured
            tool in the scheme of things these days. Considering that more and
            more people are doing online work and are buying products on the
            internet, marketers cannot afford to neglect social networking sites
            to get in touch with customers."
          continued="Here at Theowletonline can promote you to different social media
            entries to bring in a broader Audience to your customer base, when
            we sell a social media reseller panel, we guarantee that you will
            see and increase in your client base. It also means that you can
            have plenty of help to market your products or services using these
            media."
        />
        <div className="px-[5%]">
          <WhyOwlet
            h1="Why choose The Owlet"
            h3="Why Us?"
            patternImg1={PatternImg1}
            patternImg2={PatternImg2}
            pattern1={Pattern1}
            pattern2={Pattern2}
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
