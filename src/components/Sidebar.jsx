import NavLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen lgss:w-1/5 hidden lgss:flex flex-col shadow-sm border-r-[2px] pt-3 pl-10 bg-white shadow-gray-400/10 pb-10 z-10 fixed">
        <div className="w-full">
          <NavLinks />
        </div>
      </div>

      {/* {isOpen && (
        <>
          <div className="absolute inset-0 bg-black opacity-80 z-10 backdrop-filter backdrop-blur-md lgss:hidden"></div>
          <div
            className={`absolute z-20 top-0 right-0 bg-white h-full lgss:w-3/4 mds:w-[50%] w-[70%] lgss:hidden flex flex-col text-secondary transform transition-transform duration-300 ${
              isOpen ? "translate-x-0 " : "-translate-x-full"
            }`}
          >
            <div className="flex w-full justify-between items-center border-b-[1px] px-4 py-7 lgss:gap-16">
              {user && (
                <UserInfo
                  initials={getInitials(`${user.firstname} ${user.lastname}`)}
                  icon={<FaAngleDown />}
                  firstName={user.firstname}
                  lastName={user.lastname}
                />
              )}
              <LiaTimesSolid
                className="text-[20px]"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="w-full px-[5%] py-5 border-b-[1px] text-white">
              <button
                onClick={() => openModal("searchPlatforms")}
                className="bg-primary lgss:px-5 w-full text-white flex justify-center lgss:gap-4 gap-1 items-center py-3 rounded-[4px] font-semibold text-[18px]"
              >
                <TiPlus />
                <p className="text-[.9rem]">Create order</p>
              </button>
            </div>
            <div className="w-full mx-auto">
              <NavLinks />
            </div>
          </div>
        </>
      )} */}
    </>
  );
};

export default Sidebar;
