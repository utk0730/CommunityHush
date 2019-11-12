import React from "react";
import { RightSidebar } from "./styled";
import questionIcon from "../../../assets/icons/ask a qstn.svg";
export default function index() {
  return (
    <RightSidebar className="bg-white px-3 rounded flex items-center">
      <button className="bg-blue-200 w-full text-white rounded text-sm cursor-pointer border-indigo-300 border-2 flex items-center justify-center py-2">
        <img src={questionIcon} className="mr-2" alt="" />
        <span className="text-black">Ask new question</span>
      </button>
    </RightSidebar>
  );
}
