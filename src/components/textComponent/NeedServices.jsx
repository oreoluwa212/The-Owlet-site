function NeedServices({ img, h3, h1, p, continued }) {
  return (
    <div className="lgss:px-[15%] w-full flex justify-center items-center pt-10 mt-10">
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
          <h1 className="text-[2.3rem] font-bold  leading-10">{h1}</h1>
          <p className="text-secondary text-[14px]">{p}</p>
          <p className="text-secondary text-[14px]">{continued}</p>
        </div>
      </div>
    </div>
  );
}

export default NeedServices