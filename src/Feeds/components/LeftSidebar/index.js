import React from "react";
import { LeftSidebar } from "./styled";
export default function index() {
  return (
    <LeftSidebar>
      <h4 className="text-blue-700 text-sm mb-2 mx-2">Hush feed</h4>
      <div className="bg-white w-full text-start py-2 text-left flex rounded cursor-pointer">
        <i className="fas fa-home mx-2 text-blue-600 text-lg" />
        <span className="text-sm font-bold">Home</span>
        <i className="fas fa-chevron-right m-auto mr-2 text-sm text-gray-500" />
      </div>
      <div className="w-full text-start py-2 text-left mt-1 cursor-pointer">
        <i className="fas fa-fire text-red-600 mx-2" />
        <span className="text-sm text-blue-700">Popular</span>
      </div>
    </LeftSidebar>
  );
}
