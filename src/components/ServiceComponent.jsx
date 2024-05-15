function ServiceComponent ({ icon, p }) {
  return (
    <div className="flex flex-col justify-center items-center text-[14px] font-semibold bg-[#F2F4F7] lgss:w-[12%] py-3 rounded-[4px]">
      {icon}
      <p>{p}</p>
    </div>
  );
}

export default ServiceComponent