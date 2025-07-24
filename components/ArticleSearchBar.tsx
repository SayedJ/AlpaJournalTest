import { url } from "inspector";
import React from "react";

export default function ArticleSearchBar() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 bg-gray-50 py-5 pt-10 text-primary-950 px-10 sm:w-full">
      <h1 className="text-4xl font-bold">Discover Academic Articles</h1>
      <h3 className="text-xl font-medium text-gray-600 mb-5">
        Explore cutting-edge research from scholars around the world.
      </h3>
      <input
        style={{
          backgroundImage: 'url("/icons/search.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.6rem center",
          backgroundSize: "1.5rem",
        }}
        className="border border-gray-300 text-gray-700 text-[18px] placeholder-gray-00 px-2 pl-3 py-4 rounded-md w-full md:w-[60%] mr-5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:border"
        id="search-input"
        type="text"
        placeholder="Search articles by name, field, or author..."
      />
    </div>
  );
}
