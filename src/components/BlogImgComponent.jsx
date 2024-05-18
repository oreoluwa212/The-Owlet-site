import { FiArrowUpRight } from "react-icons/fi";
import ColoredBtn from "./buttons/ColoredBtn";
import ParagraphText from "./textComponent/ParagraphText";
import { blogImg1, blogImg2, blogImg3 } from "../assets";

function BlogImgComponent() {
  return (
    <div className="px-[5%] w-full flex flex-col lgss:flex-row justify-between gap-5 mt-10">
      <div className="flex justify-center items-center flex-col lgss:w-1/3">
        <img className="rounded-[20px]" src={blogImg1} alt="" />
        <div className="w-full flex flex-col gap-2 px-2">
          <div className="flex justify-between w-full items-center gap-10 text-[24px] pt-4">
            <h1 className="font-semibold leading-7">
              Helpful tips for building a successful online business
            </h1>
            <FiArrowUpRight />
          </div>
          <ParagraphText p="With the internet becoming more popular, it is no surprise that business owners are trying...." />
          <div className="flex gap-3 pt-1">
            <ColoredBtn
              buttonText={"Business"}
              className="border-[#ABEFC6] border bg-[#ECFDF3] text-[#067647] font-semibold rounded-full px-3 py-1"
            />
            <ColoredBtn
              buttonText={"Social media"}
              className="border-[#FCCEEE] bg-pinkBg border text-primary font-semibold rounded-full px-3 py-1"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col lgss:w-1/3">
        <img className="rounded-[20px]" src={blogImg2} alt="" />
        <div className="w-full flex flex-col gap-2 px-2">
          <div className="flex justify-between w-full items-center gap-10 text-[24px] pt-4">
            <h1 className="font-semibold leading-7">
              Helpful tips for building a successful online business
            </h1>
            <FiArrowUpRight />
          </div>
          <ParagraphText p="With the internet becoming more popular, it is no surprise that business owners are trying...." />
          <div className="flex gap-3 pt-1">
            <ColoredBtn
              buttonText={"Growth tips"}
              className="border-[#ABEFC6] border bg-[#ECFDF3] text-[#067647] font-semibold rounded-full px-3 py-1"
            />
            <ColoredBtn
              buttonText={"Social media"}
              className="border-[#FCCEEE] bg-pinkBg border text-primary font-semibold rounded-full px-3 py-1"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col lgss:w-1/3">
        <img className="rounded-[20px]" src={blogImg3} alt="" />
        <div className="w-full flex flex-col gap-2 px-2">
          <div className="flex justify-between w-full items-center gap-10 text-[24px] pt-4">
            <h1 className="font-semibold leading-7">
              Helpful tips for building a successful online business
            </h1>
            <FiArrowUpRight />
          </div>
          <ParagraphText p="With the internet becoming more popular, it is no surprise that business owners are trying...." />
          <div className="flex gap-3 pt-1">
          <ColoredBtn
            buttonText={"Instagram"}
            className="border-[#E9D7FE] bg-[#F9F5FF] border text-[#6941C6] font-semibold rounded-full px-3 py-1"
          />
            <ColoredBtn
              buttonText={"Social media"}
              className="border-[#FCCEEE] bg-pinkBg border text-primary font-semibold rounded-full px-3 py-1"
            />
            <ColoredBtn
              buttonText={"Business"}
              className="border-[#ABEFC6] border bg-[#ECFDF3] text-[#067647] font-semibold rounded-full px-3 py-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogImgComponent;
