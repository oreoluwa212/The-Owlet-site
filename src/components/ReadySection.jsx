import { AiOutlineUser } from "react-icons/ai";
import { iphone1, iphone2, screen } from "../assets";
import { PiChatText } from "react-icons/pi";
import BoadingNavButton from "./buttons/BoadingNavButton";
import ParagraphText from "./textComponent/ParagraphText";
import HeaderH1 from "./textComponent/HeaderH1";
import { Link } from "react-router-dom";

function ReadySection() {
  return (
    <div className="w-full flex flex-col lgss:flex-row bg-black bg-gradient-to-br from-white to-[#f5dddc] items-center justify-between py-10">
      <div className="lgss:w-[40%]">
        <div className="px-4 lgss:pl-[20%] flex flex-col gap-3">
          <HeaderH1 h1={"Ready to transform your social media presence?"} />
          <ParagraphText
            p={
              "Join The Owlet today and unlock the full potential of your social media marketing strategy. Experience unparalleled growth, engagement, and success with our comprehensive solutions tailored for your business."
            }
          />
          <div className="flex flex-col lgss:flex-row gap-4">
            <Link to={"/signin"}>
              <BoadingNavButton
                buttonText="Chat us on whatsapp"
                Icon={PiChatText}
              />
            </Link>
            <Link to={"/signup"}>
              <button className="text-white rounded-xl bg-primary w-full p-3 shadow-sm flex justify-center items-center gap-2">
                <AiOutlineUser />
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lgss:w-[50%] w-full pt-8">
        <div className="w-full lgss:flex relative hidden">
          <img src={iphone1} className="absolute z-10" alt="" />
          <img src={iphone2} className=" z-1" alt="" />
        </div>
        <div className="lgss:hidden flex justify-center items-center pt-5">
          <img className="w-[180px]" src={screen} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ReadySection