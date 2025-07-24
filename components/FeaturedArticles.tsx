import React from "react";
import AuthorCard from "./AuthorCard";
import ArticleCard from "./ArticleCard";

export default function FeaturedArticles() {
  return (
    <section className="flex flex-col items-center justify-center w-full p-5 ">
      <h1 className=" text-black font-semibold text-2xl mr-auto">
        Featured Articles
      </h1>
      <div className="flex flex-row flex-wrap gap-5  w-full items-stretch pt-5">
        {[...Array(3)].map((_, i) => (
          <ArticleCard />
        ))}
      </div>
    </section>
  );
}
