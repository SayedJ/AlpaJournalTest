"use client";
import React from "react";
import ArticleCard from "./ArticleCard";
import { useState } from "react";
import ArticleCardWide from "./ArticleCardWide";

const ITEMS_PER_PAGE = 6;
export default function AllArticles() {
  const dummyCards = Array.from({ length: 26 }, (_, i) => (
    <ArticleCardWide key={i} />
  ));

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyCards.length / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = dummyCards.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  return (
    <div className="flex flex-col items-center justify-center w-full p-5">
      <h1 className=" text-black font-semibold text-2xl mr-auto">
        All Articles
      </h1>
      <div className="flex flex-row flex-wrap gap-5 justify-stretch w-full items-center pt-5">
        {currentItems.map((item) => item)}
      </div>
      <div className="flex justify-center space-x-2 mt-10">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-50 text-black border border-gray-400"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
