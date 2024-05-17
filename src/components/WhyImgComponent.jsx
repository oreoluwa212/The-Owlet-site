import { FaArrowRight } from "react-icons/fa";
import HeaderH1 from "./textComponent/HeaderH1";
import ParagraphText from "./textComponent/ParagraphText";

function WhyImgComponent({ patternImg, pattern, h1, p, className, a }) {
  return (
    <div className="pt-10 w-full px-[5%]">
      <div className={className}>
        <div className="lgss:w-1/2 flex flex-col">
          <HeaderH1 h1={h1} />
          <ParagraphText p={p} />
          <div className="flex gap-2 text-primary font-semibold justify-start items-center pt-1 text-[14px]">
            <a href="#">{a}</a>
            <FaArrowRight/>
          </div>
        </div>
        <div className="pt-8 lgss:w-1/3 flex justify-center items-center">
          <div className="w-full flex relative">
            <img
              src={patternImg}
              className="absolute z-100 -left-5 -top-5"
              alt=""
            />
            <img src={pattern} className=" z-1" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyImgComponent;
