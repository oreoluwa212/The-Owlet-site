function BoadingNavButton({ buttonText, Icon }){
  return (
    <button className="bg-white rounded-xl py-3 px-4 shadow-md text-secondary flex justify-center items-center gap-2 w-full">
      {Icon && <Icon />}
      {buttonText}
    </button>
  );
}

export default BoadingNavButton