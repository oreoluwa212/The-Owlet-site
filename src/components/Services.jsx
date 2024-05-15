import { facebook, instagram, soundCloud, tiktok, vimeo, x, youtube } from "../assets";

function Services() {
   return (
     <div className="lgss:px-[10%] lgss:-mt-10">
       <div className="lgss:bg-white py-4 rounded-[24px] lgss:border lgss:shadow-lg flex lgss:flex-row flex-col gap-3 justify-between items-center px-5 w-full">
         <h1 className="uppercase text-secondary font-semibold text-[18px]">
           Our services:
         </h1>
         <div className="flex justify-between items-center lgss:w-[80%] w-full">
           <img
             className="w-5 h-5 lgss:h-10 lgss:w-10"
             src={instagram}
             alt=""
           />
           <img className="w-5 h-5 lgss:h-10 lgss:w-10" src={tiktok} alt="" />
           <img className="w-5 h-5 lgss:h-7 lgss:w-7" src={x} alt="" />
           <img className="w-5 h-5 lgss:h-10 lgss:w-10" src={facebook} alt="" />
           <img className="w-5 h-5 lgss:h-10 lgss:w-10" src={vimeo} alt="" />
           <img className="w-5 h-5 lgss:h-10 lgss:w-10" src={youtube} alt="" />
           <img
             className="w-5 h-5 lgss:h-10 lgss:w-10"
             src={soundCloud}
             alt=""
           />
         </div>
       </div>
     </div>
   );
}

export default Services;