import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import pic from "./assets/Profile.jpg"


function Header() {
  return (
    <>
      <div className="flex relative items-center p-4 h-14 bg-slate-900 text-white gap-10">
        <div className="flex items-center gap-5">
          <div className="bg-orange-600 w-8 items-center rounded-2xl">
            <FaRegDotCircle className=" text-3xl"/>
          </div>
          <div className="grid border-l-gray-100 border-l pl-3">
          <span className="text-lg">Organized</span>
          <p className="text-xs text-gray-400">monogalazyanything</p>
          </div>
        </div>
        <div className="flex items-center gap-2 " style={{width: '30rem'}}>
        <RiSearchLine />
        <input type="text" placeholder="Search.." className=" bg-slate-900 " style={{width: '10rem'}}/>
        </div>
        <div className="flex absolute right-7 gap-7 items-center ">
          <IoNotifications className="text-xl"/>
          <div className="profile flex items-center p-1 rounded-2xl" style={{border: '1px solid grey'}}>
            <img src={pic} alt="img" className=" w-8 rounded-2xl"/>
            <MdOutlineArrowDropDown className="text-3xl"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
