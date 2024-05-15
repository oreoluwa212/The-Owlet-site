import { facebook, instagram, soundCloud, tiktok, vimeo, x, youtube } from "../assets";

function Services() {
   return (
      <div className="lgss:px-[20%] -mt-12">
      <div className="bg-white py-3 rounded-[32px] border shadow-lg flex lgss:flex-row flex-col gap-3 justify-between items-center px-5 w-full">
         <h1 className="uppercase text-secondary font-semibold text-[18px]">Our services:</h1>
         <div className="flex justify-between w-[80%]">
            <img src={instagram} alt="" />
            <img src={tiktok} alt="" />
            <img src={x} alt="" />
            <img src={facebook} alt="" />
            <img src={vimeo} alt="" />
            <img src={youtube} alt="" />
            <img src={soundCloud} alt="" />
         </div>
      </div>
      </div>
   )
}

export default Services;