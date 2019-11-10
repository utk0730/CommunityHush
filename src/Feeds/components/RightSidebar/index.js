import React from "react";
import { RightSidebar } from "./styled";
export default function index() {
  return (
    <RightSidebar className="bg-white px-3 rounded flex items-center">
      <button className="bg-blue-200 w-full text-white rounded text-sm cursor-pointer border-indigo-300 border-2 flex items-center justify-center py-2">
        <i className="fas fa-question-circle bg-blue-800 text-lg rounded-full mr-2"></i>
        <span className="text-black">Ask new question</span>
      </button>
    </RightSidebar>
  );
}
