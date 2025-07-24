import React from "react";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
const articles = [
  { slug: "hello-world", title: "Hello World" },
  { slug: "nextjs-guide", title: "Next.js Guide" },
];
export default function ArticleCardGallery() {
  return (
    <div className="flex flex-col gap-y-5 items-center justify-center w-full p-5 text-black pt-10 bg-thirdaly-100 pb-10">
      <h1 className="text-3xl font-semibold">Most Downloaded Articles</h1>
      <h2 className="text-xl text-gray-700">
        Discover the most popular research papers in our community
      </h2>
      <div className="flex flex-row flex-wrap gap-5 w-full items-center justify-center pt-10">
        {[...Array(6)].map((_, i) => (
          <Link key={articles[0].slug} href={`/articles/${articles[0].slug}`}>
            <ArticleCard key={i} />
          </Link>
        ))}
      </div>

      <Link
        href={"/articles"}
        className="text-white bg-blue-500 px-7 py-2 text-[17px] font-medium rounded-md mt-5"
      >
        View All Articles
      </Link>
    </div>
  );
}
