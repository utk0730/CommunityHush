import React from "react";
import { LeftSidebar } from "./styled";
import home from "../../../assets/icons/home.svg";
import popular from "../../../assets/icons/popular.svg";
export default function index() {
  return (
    <LeftSidebar>
      <p className="text-gray-700 text-xs mb-2 mx-2">HUSH FEED</p>
      <div className="bg-white w-full text-start py-2 text-left flex rounded cursor-pointer">
        <img src={home} className="mx-2" alt="" />
        <span className="text-sm font-bold">Home</span>
        <i className="fas fa-chevron-right m-auto mr-2 text-sm text-gray-500" />
      </div>
      <div className="w-full text-start py-2 text-left mt-1 cursor-pointer">
        <img src={popular} className="mx-3 float-left" alt="" />
        <span className="text-sm text-blue-700">Popular</span>
      </div>
    </LeftSidebar>
  );
}
