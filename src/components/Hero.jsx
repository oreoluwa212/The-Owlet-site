import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { heroImg } from "../assets";
import { RxVideo } from "react-icons/rx";

const Hero = () => {
  return (
    <div className="flex flex-col w-full lgss:flex-row justify-center items-center pt-9 pb-16">
      <div className="lgss:w-1/2">
        <div className="lgss:w-[80%] w-full flex flex-col gap-8">
                  <h1 className="leading-[60px] text-secondary text-[3.5rem] font-bold">
          Elevate your social media presence
        </h1>
        <p className="mb-12 text-secondary ">
          Boost your online presence with our affordable, fast, and reliable SMM
          and SEO services. We offer high-quality automatic social media
          solutions tailored for resellers and business owners, ensuring lasting
          connections and top-notch support.
        </p>
        </div>
        <div className="flex">
          <Link to={"/"}>
            <button className="text-white rounded-xl bg-primary  p-3 shadow-sm flex justify-center items-center gap-2">
              <AiOutlineUser />
              Sign in
            </button>
          </Link>
          <button className="mx-4 text-secondary font-semibold bg-white rounded-xl p-3 shadow-sm flex justify-center items-center gap-2">
            <RxVideo />
            Watch video
          </button>
        </div>
      </div>
      <div className="lgss:w-1/2 pt-10">
        <img className="w-full" src={heroImg} alt="people" />
      </div>
    </div>
  );
};

export default Hero;
