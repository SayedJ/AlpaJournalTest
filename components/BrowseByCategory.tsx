import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { LuDna } from "react-icons/lu";
import { BiLogoReact } from "react-icons/bi";
import { PiMathOperationsFill } from "react-icons/pi";
import { GiMedicines } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";

export default function BrowseByCategory() {
  return (
    <div className="flex flex-col gap-y-5 items-center justify-center w-full p-5 text-black pt-1 mt-10">
      <h1 className="text-3xl font-semibold">Browse by Category</h1>
      <h2 className="text-xl text-gray-700">
        Explore research across different academic disciplines
      </h2>
      <div className="flex flex-row flex-wrap gap-5 w-full items-center justify-evenly pt-10 mb-15">
        <div className="flex flex-col items-center justify-center">
          <span className="flex items-center justify-center w-18 h-18 rounded-full bg-blue-200 mb-3 hover:bg-blue-300 cursor-pointer">
            <GrPersonalComputer
              className="text-blue-600 hover:rotate-12 transition-normal ease-in-out duration-500"
              size={28}
            />
          </span>
          <p className="text-[15px] font-normal">Computer Science</p>
          <p className="text-[13px] text-gray-700">423 articles</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="flex items-center justify-center w-18 h-18 rounded-full bg-green-200 mb-3 hover:bg-green-300 cursor-pointer">
            <LuDna
              className="text-green-600 -rotate-40 hover:rotate-0 transition-normal ease-in-out duration-500"
              size={28}
            />
          </span>
          <p className="text-[15px] font-normal">Biology</p>
          <p className="text-[13px] text-gray-700">325 articles</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="flex items-center justify-center w-18 h-18 rounded-full bg-purple-200 mb-3 hover:bg-purple-300 cursor-pointer">
            <BiLogoReact
              className="text-purple-600 hover:rotate-45 transition-normal ease-in-out duration-500"
              size={28}
            />
          </span>
          <p className="text-[15px] font-normal">Physics</p>
          <p className="text-[13px] text-gray-700">2,120 articles</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="flex items-center justify-center w-18 h-18 rounded-full bg-orange-200 mb-3 hover:bg-orange-300 cursor-pointer">
            <PiMathOperationsFill
              className="text-orange-600 hover:rotate-12 transition-normal ease-in-out duration-500"
              size={28}
            />
          </span>
          <p className="text-[15px] font-normal">Mathematics</p>
          <p className="text-[13px] text-gray-700">4,232 articles</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="flex items-center justify-center w-18 h-18 rounded-full bg-red-200 mb-3 hover:bg-red-300 cursor-pointer">
            <GiMedicines
              className="text-red-600 hover:rotate-12 transition-normal ease-in-out duration-500"
              size={28}
            />
          </span>
          <p className="text-[15px] font-normal">Medicine</p>
          <p className="text-[13px] text-gray-700">267 articles</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="flex items-center justify-center w-18 h-18 rounded-full bg-blue-300 mb-3 hover:bg-blue-400 cursor-pointer">
            <SlChemistry
              className="text-blue-500 hover:rotate-12 transition-normal ease-in-out duration-500"
              size={28}
            />
          </span>
          <p className="text-[15px] font-normal">Chemistry</p>
          <p className="text-[13px] text-gray-700">234 articles</p>
        </div>
      </div>
    </div>
  );
}
