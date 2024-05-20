import React from "react";
import NavMenu from "../components/NavMenu";
import { CiSearch } from "react-icons/ci";
import { HeroBlog } from "../assets";
import HeaderH1 from "../components/textComponent/HeaderH1";
import { FiArrowUpRight } from "react-icons/fi";
import ParagraphText from "../components/textComponent/ParagraphText";
import ColoredBtn from "../components/buttons/ColoredBtn";
import BlogImgComponent from "../components/BlogImgComponent";
import ReadySection from "../components/ReadySection";
import Footer from "../components/Footer";
import Pagination from "../components/buttons/Pagination";

const BlogLanding = () => {
  return (
    <>
      <div className="pb-7">
        <div className="bg-gradient-to-br from-white to-[#f5dddc]">
          <div className="px-[5%]">
            <NavMenu />
          </div>
          <div className="w-full flex flex-col items-center justify-end gap-1 lgss:h-[50vh] pb-20 mt-10">
            <div className="lgss:text-center w-[90%] lgss:w-full flex flex-col gap-3">
              <h1 className="uppercase text-primary text-[1.3rem] font-semibold">
                our blog
              </h1>
              <h1 className="text-black text-[2.1rem] font-bold leading-10">
                Tips and news from our team
              </h1>
              <p className="text-secondary ">
                The latest industry news, interviews, technologies, and
                resources.
              </p>
            </div>
            <div className="lgss:flex justify-center items-center w-full px-[5%] lgss:px-0">
              <div className="lgss:relative my-5">
                <input
                  type="text"
                  className="bg-[#ffffff] border h-12 rounded-[8px] px-10  outline-none"
                  placeholder="Search"
                  name="search"
                  id="search"
                />
                <div className="lgss:absolute lgss:inset-y-0 lgss:left-0 lgss:pl-3 flex items-center pointer-events-none">
                  <CiSearch className=" hidden lgss:flex text-[18px] text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center -mt-16 px-4">
          <img className="rounded-[20px]" src={HeroBlog} alt="" />
        </div>
        <div className="px-[5%] w-full pt-4">
          <div className="w-full flex flex-col gap-2 px-2">
            <div className="flex justify-between w-full items-center gap-10 text-[24px]">
              <HeaderH1 h1={"How to get Followers on TikTok in 2023"} />
              <FiArrowUpRight />
            </div>
            <ParagraphText p="Are you still looking for 'How to get followers on TikTok' and hoping to get more followers on TikTok? You are in the correct spot. We'll show you how to get followers on TikTok using both free and paid methods in this article..." />
            <div className="flex gap-3 pt-1">
              <ColoredBtn
                buttonText={"Growth tips"}
                className="border-[#ABEFC6] border bg-[#ECFDF3] text-[#067647] font-semibold rounded-full px-3 py-1"
              />
              <ColoredBtn
                buttonText={"Social media"}
                className="border-[#FCCEEE] bg-pinkBg border text-primary font-semibold rounded-full px-3 py-1"
              />
              <ColoredBtn
                buttonText={"TikTok"}
                className="border-[#EAECF0] bg-[#F9FAFB] border text-grey font-semibold rounded-full px-3 py-1"
              />
            </div>
          </div>
        </div>
        <BlogImgComponent />
        <Pagination/>
        <ReadySection />
        <Footer/>
      </div>
    </>
  );
};

export default BlogLanding;
