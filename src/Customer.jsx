import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FiFilter } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

function MobileBut(){
  return(
    <>
    <div className="buttons flex gap-4">
          <button className="butt gap-1">
            All time <RxCross2 />
          </button>
          <button className="butt gap-1">
            Team plan <RxCross2 />
          </button>
          <button className="butt gap-1">
            Active <RxCross2 />
          </button>
          <button className="butt gap-1">
            <FiFilter />
            More filters
          </button>
          <div className=" search flex items-center">
            <RiSearchLine className=" mr- left items-center" />
            <input
              className=" ml-2 bg-slate-50 "
              type="text"
              placeholder="Seacrch"
              onFocus={(e) => (e.target.style.border = "none")}
            />
            <span className="bg-slate-300 w-5 rounded text-center">K</span>
          </div>
        </div>
    </>
  )
}

function Customer() {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      date: "JUNE, 12 2023",
      amount: "$5,000/Year",
      user: "10 Users",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "JUNE, 12 2023",
      amount: "$5,000/Year",
      user: "10 Users",
    },
    {
      id: 3,
      name: "Sam Wilson",
      date: "JUNE, 12 2023",
      amount: "$5,000/Year",
      user: "10 Users",
    },
    {
      id: 4,
      name: "Emily Johnson",
      date: "JUNE, 12 2023",
      amount: "$5,000/Year",
      user: "10 Users",
    },
  ];

  return (
    <div className="MainPage mx-4">
      <div className="CustList flex ">
        <span className=" font-medium text-2xl">Customer List</span>
        <div className="Albut">
        <MobileBut />
        </div>
        <TiThMenu style={{display: 'flex', display: 'none', alignSelf: 'center', position: 'absolute', right: '4'}}/>
      </div>
      <hr />
      <div className="TabList mt-6 grid text-sm">
        <table>
          <thead style={{ paddingBottom: "1rem" }}>
            <tr
              style={{
                borderBottom: "1px solid lightgrey",
                paddingBottom: "1rem",
              }}
            >
              <th className="text-left font-light">FULL NAME-MAIL</th>
              <th className="font-light">BILLING DATE</th>
              <th className="font-light">PLAN</th>
              <th className="font-light">AMOUNT</th>
              <th className="font-light">TOTAL USERS</th>
              <th className="font-light">DETAILS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                style={{
                  height: "4.4rem",
                  borderBottom: "1px solid lightgrey",
                }}
                className="each"
                key={customer.id}
              >
                <td>
                  {customer.name}{" "}
                  <span className="grid text-xs text-gray-400">
                    esegbeable3@gmail.com
                  </span>
                </td>
                <td style={{ textAlign: "center" }}>{customer.date}</td>
                <td style={{ textAlign: "center" }}>
                  {" "}
                  <button
                    style={{
                      border: "1px solid violet",
                      padding: "0.3rem",
                      borderRadius: "1rem",
                      width: "4rem",
                      fontSize: "0.9rem",
                      color: "violet",
                      backgroundColor: "rgb(243, 234, 243)",
                    }}
                  >
                    TEAM
                  </button>{" "}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    display: "grid",
                    marginTop: "5.5%",
                  }}
                >
                  {customer.amount}
                  <span className="text-xs text-gray-400">Average</span>
                </td>
                <td style={{ textAlign: "center" }}>{customer.user}</td>
                <td style={{ textAlign: "center", color: "blue" }}>
                  {" "}
                  <a href="">View Details</a>{" "}
                </td>
                <td>
                  {" "}
                  <SlOptions
                    style={{ color: "grey", marginLeft: "4rem" }}
                  />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="resultpage flex p-5 relative">
        <div className="flex gap-2 items-center">
          <span>Result Per Page</span>
          <button
            className="flex items-center gap-1 p-1"
            style={{
              marginRight: "2rem",
              borderRadius: "0.4rem",
              border: "1.7px solid lightgrey",
            }}
          >
            8<FaAngleDown />
          </button>
        </div>
        <div className=" flex gap-2 absolute right-5">
          <button className=" NavButtons flex items-center gap-2">
            <FaArrowLeftLong />
            Previous
          </button>
          <button className=" NavButtons flex items-center text-center w-7 ">
            1
          </button>
          <button className="NavButtons flex items-center ">2</button>
          <button className=" NavButtons flex items-center ">3</button>
          <button className="NavButtons flex items-center ">
            <SlOptions />
          </button>
          <button className="NavButtons flex items-center ">8</button>
          <button className="NavButtons flex items-center ">9</button>
          <button className="NavButtons flex items-center ">
            Next
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customer;
