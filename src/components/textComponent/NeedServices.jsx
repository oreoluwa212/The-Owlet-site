import HeaderH1 from "./HeaderH1";

function NeedServices({ img, h3, h1, p, continued }) {
  return (
    <div className="lgss:px-[15%] w-full flex justify-center items-center pt-10 pb-5 mt-10">
      <div className="w-full flex lgss:flex-row flex-col justify-between items-center">
        {img && (
          <img
            className="h-[330px] lgss:w-[30%]"
            src={img}
            alt="display image"
          />
        )}
        <div className="flex flex-col px-[5%] lgss:px-0 pt-5 lgss:pt-0 lgss:w-[60%] lgss:pr-5 gap-2">
          <h3 className="text-primary font-semibold uppercase">{h3}</h3>
          <HeaderH1 h1="Why is social media marketing so effective?" />
          <p className="text-secondary text-[14px]">{p}</p>
          <p className="text-secondary text-[14px]">{continued}</p>
        </div>
      </div>
    </div>
  );
}

export default NeedServices