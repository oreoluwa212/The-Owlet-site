import { FaUser } from "react-icons/fa";
import { Utube, fb, ig, linkedin, logo, twitter } from "../assets";
import SubmitBtn from "./buttons/SubmitBtn";
import FormInput from "./input/FormInput";
import HeaderH1 from "./textComponent/HeaderH1";
import ParagraphText from "./textComponent/ParagraphText";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineChat } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-white w-full">
      <div className="w-full bg-bg py-10 flex lgss:flex-row flex-col justify-between items-center lgss:px-[10%]">
        <div className="lgss:w-1/2 flex flex-col">
          <HeaderH1 h1={"Join our newsletter"} />
          <ParagraphText
            p={"Stay in the loop with everything you need to know."}
          />
        </div>
        <div className="lgss:w-1/3 flex flex-col gap-2">
          <div className="flex flex-col lgss:flex-row  justify-center w-full items-center lgss:gap-6">
            <div className="w-full lgss:w-2/3">
              <FormInput placeholder={"Enter your email"} />
            </div>
            <div className="w-full lgss:w-1/3">
              <SubmitBtn buttonText={"Subscribe"} />
            </div>
          </div>
          <p className="text-[14px] text-grey">
            We care about your data in our
            <a className="underline" href="#">
              privacy policy.
            </a>
          </p>
        </div>
      </div>
      <div className="px-[10%] pt-6 flex lgss:flex-row justify-between items-center flex-col">
        <div className="lgss:w-1/2 flex flex-col gap-3 pt-6">
          <div className="">
            <img className="h-auto w-auto" src={logo} alt="" />
          </div>
          <ParagraphText
            p={
              "The-Owlet is the Biggest Provider and also Premier Reseller Most of the Social Media Marketing Services on the Web."
            }
          />
          <div className="flex lgss:flex-row flex-col gap-4 w-full">
            <Link
              to={"/signin"}
              className="text-white rounded-xl bg-primary flex justify-center items-center p-3 shadow-sm"
            >
              <button className="flex justify-center items-center gap-3">
                <AiOutlineUser />
                Sign in
              </button>
            </Link>
            <Link
              className="rounded-xl border bg-white flex justify-center items-center p-3 shadow-sm"
              to={"/"}
            >
              <button className="flex justify-center items-center text-secndary gap-3">
                <MdOutlineChat />
                Live Chat Support
              </button>
            </Link>
          </div>
        </div>
        <div className="lgss:w-1/3 w-full flex flex-col gap-3 pt-6">
          <p className="text-[14px] text-[#667085] font-semibold">
            Useful links
          </p>
          <div className="flex lgss:flex-row justify-between font-semibold flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Link to={"/"}>
                <p>Services</p>
              </Link>
              <Link to={"/"}>
                <p>API</p>
              </Link>
              <Link to={"/blog"}>
                <p>Blog</p>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <Link to={"/"}>
                <p>Terms</p>
              </Link>
              <Link to={"/instagram"}>
                <p>Buy Instagram Followers</p>
              </Link>
              <Link to={"/youtube"}>
                <p>Buy YouTube Views and Subscribers</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#EAECF0] w-full pt-5 mt-10 flex lgss:flex-row flex-col-reverse gap-4 justify-between px-[10%]">
        <div className="lgss:w-1/2">
          <ParagraphText p="© 2023 The Owlet. All rights reserved." />
        </div>
        <div className="lgss:w-1/3 flex gap-6 lgss:justify-end">
          <img className="h-6" src={linkedin} alt="" />
          <img src={twitter} alt="" />
          <img src={fb} alt="" />
          <img src={ig} alt="" />
          <img src={Utube} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
