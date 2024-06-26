import React, { useState } from "react";
import { LuBell, LuMenu } from "react-icons/lu";
import { logo } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import TableCard from "../components/cards/TableCard";
import HomeCardMobile from "../components/cards/HomeCardMobile";
import FilterBtn from "../components/buttons/FilterBtn";
import HomeFilters from "../components/buttons/HomeFilters";
import HomeSearchInputWhite from "../components/input/HomeSearchInput";
import { CiCircleInfo } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import axios from "axios";
import NavMenu from "../components/NavMenu";

const tableData = [
  {
    ID: "Instagram Followers (Nigeria)",
    Method: "10",
    Cost: "500,000",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Blue Tick Verified Followers",
    Method: "5,000",
    Cost: "5,000",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Followers (Australia)",
    Method: "10,000",
    Cost: "10,000",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Followers (South Africa)",
    Method: "5,000",
    Cost: "5,000",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Followers (Brazil)",
    Method: "10,000",
    Cost: "10,000",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Followers (China)",
    Method: "10,000",
    Cost: "5,000",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Followers (USA)",
    Method: "5,000",
    Cost: "#50,000.00",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Followers (Sweden)",
    Method: "10",
    Cost: "#50,000.00",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
];

const columns = [
  { label: "Services", key: "ID" },
  { label: "Minimum order", key: "Method" },
  { label: "Maximum order", key: "Cost" },
  { label: "Rate per 1,000", key: "Date" },
  { label: "Description", key: "icon" },
];

const ServicesPage = () => {
  return (
    <div className="max-w-full flex flex-col lgss:flex-row bg-white h-screen">
      <div className="flex flex-col w-full py-5 z-0">
        <div className="px-[5%]">
        <NavMenu />
        </div>
        <div>
          <div className="w-full px-[5%] py-5">
            <h1 className="text-[2rem] font-bold">
              Instagram followers service list
            </h1>
            <div className="w-full py-8 hidden lgss:flex justify-between">
              <div className="flex gap-3">
                <HomeFilters name="In Progress" />
                <HomeFilters name="All Platforms" />
                <FilterBtn name="More Filters" />
              </div>
              <HomeSearchInputWhite />
            </div>
            <div className="hidden w-full lgss:flex justify-center items-center py-2">
              <TableCard
                columns={columns}
                tableData={tableData}
                numberOfOrders={tableData.length}
              />
            </div>
          </div>
          <div className="lgss:hidden flex flex-col gap-5 text-left py-6 px-[5%]">
            <div className="w-full flex gap-3">
              <HomeSearchInputWhite />
              <div className="w-[15%] bg-white border-[1px] rounded-[8px] flex items-center justify-center">
                <IoFilterSharp />
              </div>
            </div>
            <HomeCardMobile
              title="Instagram Nigerian Followers"
              value={"80%"}
            />
            <HomeCardMobile title="Facebook Nigerian Followers" value={"80%"} />
            <HomeCardMobile title="Facebook Nigerian Followers" value={"80%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
