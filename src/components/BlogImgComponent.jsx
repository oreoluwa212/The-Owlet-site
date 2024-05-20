import { FiArrowUpRight } from "react-icons/fi";
import ColoredBtn from "./buttons/ColoredBtn";
import ParagraphText from "./textComponent/ParagraphText";
import { blogImg1, blogImg2, blogImg3, blogImg4, blogImg5, blogImg6 } from "../assets";

function BlogImgComponent() {
  return (
    <div className="px-[5%] w-full flex flex-col gap-10 mt-10">
      <div className="w-full flex lgss:flex-row flex-col gap-10">
        <div className="flex justify-center items-center flex-col lgss:w-1/3">
          <img className="rounded-[20px]" src={blogImg1} alt="" />
          <div className="w-full flex flex-col gap-2 px-2">
            <div className="flex justify-between w-full items-center gap-10 text-[24px] pt-4">
              <h1 className="font-semibold leading-7">
                Helpful tips for building a successful online business
              </h1>
              <div className="text-[28px]">
                <FiArrowUpRight />
              </div>
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
                Social Media Trends of 2024 So Far
              </h1>
              <div className="text-[28px]">
                <FiArrowUpRight />
              </div>
            </div>
            <ParagraphText p="Social media has become important to many individuals over the last three or four years..." />
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
                How to get your business verified on Instagram
              </h1>
              <div className="text-[28px]">
                <FiArrowUpRight />
              </div>
            </div>
            <ParagraphText p="Instagram verification is simply an authentication or confirmation. It shows that a particular..." />
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
      <div className="w-full flex lgss:flex-row flex-col gap-10">
        <div className="flex justify-center items-center flex-col lgss:w-1/3">
          <img className="rounded-[20px]" src={blogImg4} alt="" />
          <div className="w-full flex flex-col gap-2 px-2">
            <div className="flex justify-between w-full items-center gap-10 text-[24px] pt-4">
              <h1 className="font-semibold leading-7">
                What you need to know about email marketing and five easy steps
                to get you started
              </h1>
              <div className="text-[28px]">
                <FiArrowUpRight />
              </div>
            </div>
            <ParagraphText p="Did you know that email marketing has an average ROI of $38 for every $1 spent? Email..." />
            <div className="flex gap-3 pt-1">
              <ColoredBtn
                buttonText={"Email Marketing"}
                className="border-[#FCCEEE] bg-pinkBg border text-primary font-semibold rounded-full px-3 py-1"
              />
              <ColoredBtn
                buttonText={"Business"}
                className="border-[#ABEFC6] border bg-[#ECFDF3] text-[#067647] font-semibold rounded-full px-3 py-1"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col lgss:w-1/3">
          <img className="rounded-[20px]" src={blogImg5} alt="" />
          <div className="w-full flex flex-col gap-2 px-2">
            <div className="flex justify-between w-full items-center gap-10 text-[24px] pt-4">
              <h1 className="font-semibold leading-7">
                Amazing platforms that help you build your own website easily
              </h1>
              <div className="text-[28px]">
                <FiArrowUpRight />
              </div>
            </div>
            <ParagraphText p="To succeed in business in this digital age, you need a website. Without a website in this age..." />
            <div className="flex gap-3 pt-1">
              <ColoredBtn
                buttonText={"Website"}
                className="border-[#FCCEEE] bg-pinkBg border text-primary font-semibold rounded-full px-3 py-1"
              />
              <ColoredBtn
                buttonText={"Research"}
                className="border-[#ABEFC6] border bg-[#ECFDF3] text-[#067647] font-semibold rounded-full px-3 py-1"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col lgss:w-1/3">
          <img className="rounded-[20px]" src={blogImg6} alt="" />
          <div className="w-full flex flex-col gap-2 px-2">
            <div className="flex justify-between w-full items-center gap-10 text-[24px] pt-4">
              <h1 className="font-semibold leading-7">
                How to use social listening to grow and improve your business
              </h1>
              <div className="text-[28px]">
                <FiArrowUpRight />
              </div>
            </div>
            <ParagraphText p="Social listening or social media listening involves identifying what is being said about your..." />
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
    </div>
  );
}

export default BlogImgComponent;
