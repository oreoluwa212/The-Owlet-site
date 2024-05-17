function TextAndIcon({ Icon, h3, h1 }) {
  return (
    <div className="flex lgss:flex-row flex-col justify-center items-center gap-3">
      <div className="bg-pinkBg px-2 w-[48px] text-primary text-[26px] flex justify-center items-center rounded-[8px] py-2">
      {Icon && <Icon/>}
      </div>
      <div className="flex flex-col items-center lgss:items-start justify-center leading-6">
         <h3 className="text-secondary text-center text-[14px]">{h3}</h3>
         <h1 className="font-bold text-[1.5rem]">{h1}</h1>
      </div>
    </div>
  )
}

export default TextAndIcon