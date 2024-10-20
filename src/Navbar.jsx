import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import "./App.css";
import flag from "./assets/UK.png";
import { TiThMenu } from "react-icons/ti";

function MyNavs() {
  return (
    <>
      <ul>
        <li>Dashboard</li>
        <li>Statistik</li>
        <li>Product</li>
        <li>Customer</li>
        <li>Review</li>
        <li>Settings</li>
      </ul>
    </>
  );
}
function tildOpen(){
  return(
    <>
    <MyNavs/>
    </>
  )
}

function Navbar() {
  return (
    <div
      className=" dash relative h-16 "
      style={{ borderBottom: "1.4px solid rgb(191, 188, 188)" }}
    >
      <div className="navs pl-4">
        <MyNavs/>
      </div>
      <div className="menu">
        <TiThMenu/>
      </div>
      <div
        className="toggle flex absolute items-center h-9 w-24 
       right-3 justify-self-end gap-1"
      >
        <img src={flag} alt="uk" />
        <span>EN</span>
        <FaAngleDown style={{ textAlign: "center", marginTop: "0.2rem" }} />
      </div>
    </div>
  );
}

export default Navbar;
