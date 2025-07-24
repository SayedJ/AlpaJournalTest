import React from "react";
import { FaFilter } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

export default function FilterBar() {
  const [selected, setSelected] = useState("science");
  return (
    <div className="sm:w-full sm:flex-wrap sm:flex-row sm:min-w-[350px] gap-y-5 flex flex-col items-center justify-left  w-full text-black bg-white my-5 py-6 m-auto px-5 border border-gray-200 rounded-md">
      <div className="flex flex-row gap-x-2 items-center justify-center ">
        <p>Field:</p>
        <select
          className="border border-gray-300 text-gray-700 text-[17px] font-medium placeholder-gray-00  py-2 text-left pl-2 rounded-md w-[12rem] mr-5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:border"
          id="topic"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="science">Science</option>
          <option value="technology">Technology</option>
          <option value="math">Math</option>
        </select>
      </div>
      <div className="flex flex-row gap-x-2 items-center justify-center ">
        <p>Level:</p>
        <select
          className="border border-gray-300 text-gray-700 text-[17px] font-medium placeholder-gray-00  py-2 text-left pl-2 rounded-md w-[12rem] mr-5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:border"
          id="level"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="Professor">Professor</option>
          <option value="PhD Student">PhD Student</option>
          <option value="Researcher">Researcher</option>
        </select>
      </div>
      <div className="flex flex-row gap-x-2 items-center justify-center ">
        <p>Sort by:</p>
        <select
          id="sortby"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="border border-gray-300 text-gray-700 text-[17px] font-medium placeholder-gray-00  py-2 text-left pl-2 rounded-md w-[12rem] mr-5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:border"
        >
          <option value="Most known author">Most known author</option>
          <option value="Most Downloaded">Most downloaded</option>
          <option value="Newest">Newest</option>
        </select>
      </div>
      <Link
        href="/#"
        className="flex flex-row justify-center items-center border py-2 px-4 rounded-md border-blue-500 text-blue-500  gap-x-3 lg:ml-auto w-[12rem]"
      >
        <FaFilter size={20} className="text-blue-500" />
        Apply Filters
      </Link>
    </div>
  );
}
