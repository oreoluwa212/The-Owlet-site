import { google } from "../../assets";

function WhiteBtn({ buttonText }) {
  return (
    <button className="bg-white rounded-xl py-3 px-4 shadow-md text-secondary w-full mt-5 flex gap-3 justify-center items-center border">
      <img src={google} alt="" />
      {buttonText}
    </button>
  );
}

export default WhiteBtn;
