import React from "react";

export default function StaticsBanner() {
  return (
    <div className="flex flex-row items-center justify-around h-44 w-full ">
      <div className="flex flex-col items-center gap-y-2 justify-center">
        <h1 className="text-blue-500 text-3xl font-bold ">2,847</h1>
        <h3 className="text-[18px] text-gray-500 font-medium ">
          Research Articles
        </h3>
      </div>
      <div className="flex flex-col items-center gap-y-2 justify-center">
        <h1 className="text-blue-500 text-3xl font-bold ">1,234</h1>
        <h3 className="text-[18px] text-gray-500 font-medium ">
          Active Researchers
        </h3>
      </div>
      <div className="flex flex-col items-center gap-y-2 justify-center">
        <h1 className="text-blue-500 text-3xl font-bold ">45,678</h1>
        <h3 className="text-[18px] text-gray-500 font-medium ">
          Total Downloads
        </h3>
      </div>
      <div className="flex flex-col items-center gap-y-2 justify-center">
        <h1 className="text-blue-500 text-3xl font-bold ">89</h1>
        <h3 className="text-[18px] text-gray-500 font-medium ">Universities</h3>
      </div>
    </div>
  );
}
