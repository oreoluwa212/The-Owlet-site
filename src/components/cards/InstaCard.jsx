import { illustration1 } from "../../assets";
import HeaderH2 from "../textComponent/HeaderH2";

function InstaCard({ number, img, p, h2 }) {
  return (
    <div className="bg-bg lgss:w-1/3 h-[500px] rounded-[16px] shadow-lg py-5">
      <div className="flex justify-start px-[5%] items-start gap-3">
        <div className="bg-primary rounded-full w-10 h-10 flex justify-center items-center text-white text-[20px]">
          {number}
        </div>
        <HeaderH2 h2={h2} />
      </div>
      <div className="pt-6">
        <img src={img} alt="illustration" />
      </div>
      <div className="px-5 pt-5">
        <p className="text-[#475467] font-medium">{p}</p>
      </div>
    </div>
  );
}

export default InstaCard;
