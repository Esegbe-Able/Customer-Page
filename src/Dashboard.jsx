import { comment } from "postcss";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { FaArrowUpLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdAdd } from "react-icons/md";

function DashMobile(){

}

function DashCards({
  Icon,
  title,
  Number,
  Rate,
  rateCol,
  bgCol,
  comment,
  color,
  bordercolor,
  border,
}) 

{
  const ratNum = 3.4;

  return (
    <div className="Card rounded-lg snap-x " style={{ width: "100%" }}>
      <div className="cardTop flex gap-2">
        <div
          className="ic"
          style={{ backgroundColor: bordercolor, border: border }}
        >
          <Icon style={{ color: color }} />
        </div>
        <span>{title}</span>
        <SlOptions className="option" style={{ margin: "auto" }} />
        <br />
      </div>
      <div className=" text-center items-center h-16 m-auto flex gap-3">
        <span className="text-3xl">{Number}</span>
        <span className=" flex items-center text-xs p-1 rounded-md border-l-green-300" style={{color: rateCol, backgroundColor: bgCol}}>{ratNum>3? (<> {Rate}<FaArrowUpLong/> </>) : "true"} </span>
        <p className="text-sm text-gray-400">{comment}</p>
      </div>
    </div>
  );
}

function Dashboard() {
  const cards = [
    {
      id: 1,
      icon: FaUsers,
      bordercolor: "rgb(181, 198, 181)",
      border: "0.2px solid lightgreen",
      color: "green",
      Number: 470,
      title: "Total Customer",
      rate: "3.90%",
      rateCol: "green",
      bgCol: "rgb(211, 245, 211)",
      comment: "from last week",
      
    },
    {
      id: 2,
      icon: FaYoutube,
      bordercolor: "rgb(240, 223, 226)",
      border: "0.2px solid pink",
      color: "pink",
      Number: 470,
      title: "Team Plan",
      rate: "3.90%",
      rateCol: "green",
      bgCol: "rgb(211, 245, 211)",
      comment: "Last Week",
    },
    {
      id: 3,
      icon: FaUsers,
      bordercolor: "rgb(232, 224, 232)",
      border: "0.2px solid violet",
      color: "purple",
      Number: 470,
      title: "Basic Plan",
      rate: "3.90%",
      rateCol: "green",
      bgCol: "rgb(211, 245, 211)",
      comment: "Last Week",
    },
    {
      id: 4,
      icon: FaUser,
      bordercolor: "rgb(243, 236, 233)",
      border: "0.2px solid orangered",
      color: "rgb(194, 97, 62)",
      Number: 470,
      title: "Pelanggan berhenti",
      rate: "2.90%",
      comment: "Last Week",
    },
  ];

  return (
    <>
    <div className="flex h-14 mx-4 relative self-center items-center">
      <span className=" text-3xl ">Customer</span>
      <div className=" flex absolute  right-3 gap-3">
      <button className="NavButtons" ><FiDownload/></button>
      <button className="NavButtons flex items-center gap-2 text-sm">June, 22 2023<MdOutlineCalendarMonth /></button>
      <button className="NavButtons flex items-center gap-2 bg-rose-500 text-white text-sm p-2" >Add Customer <MdAdd /></button>
      </div>
    </div>
    <div className="Db grid grid-cols-4 gap-2 mx-4 " style={{width: '100%'}}>
      {cards.map((item) => (
        <DashCards
          key={item.id}
          bordercolor={item.bordercolor}
          border={item.border}
          Icon={item.icon}
          color={item.color}
          Number={item.Number}
          title={item.title}
          Rate={item.rate}
          bgCol={item.bgCol}
          rateCol={item.rateCol}
          age={item.age}
          comment={item.comment}
        />
      ))}
    </div>
    </>
  );
}

export default Dashboard;
