import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { articles, researchers } from "@/lib/dummyData";

export default function ArticleCard() {
  const randomIndex = Math.floor(Math.random() * articles.length);
  const randomIndexAuthor = Math.floor(Math.random() * researchers.length);
  const randomNumber = Math.floor(Math.random() * 1000);

  const article = articles[randomIndex];
  const author = researchers[randomIndexAuthor];
  const authorName = author.name;
  return (
    <div className="flex gap-y-4 flex-col min-w-[400px]  flex-1 w-sm rounded-md shadow bg-white items-center justify-between text-black p-7 hover:shadow-lg hover:scale-101 transition-all duration-300 cursor-pointer">
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-[12px] font-medium bg-blue-200 px-2 rounded-2xl text-blue-500">
          Computer Science
        </p>
        <Image
          src={"/icons/download.png"}
          alt="download"
          width={18}
          height={18}
          className="ml-auto mr-2"
        />
        <p className="font-medium  text-gray-600 text-sm">{randomNumber}</p>
      </div>
      <h1 className="font-medium text-xl w-full">{article.title}</h1>
      <p className="font-normal text-[15px] text-gray-600 line-clamp-3">
        {article.content}
      </p>
      <div className="flex flex-row justify-between items-center w-full">
        <Image
          src={author.photo}
          alt="Hero"
          height={40}
          width={40}
          className="rounded-full"
        />
        <div className="flex flex-col items-left justify-start mr-auto ml-5">
          <h3 className="text-[15px] h-5 font-medium text-gray-800">
            {author.name}
          </h3>
          <h6 className="text-gray-500 text-sm"> {author.institution}</h6>
        </div>
        <Link
          key={article.short}
          href={{
            pathname: `/articles/${article.slug}`,
            query: { authorName },
          }}
        >
          <FaArrowRight className="hover:scale-106 hover:drop-shadow text-blue-500" />
        </Link>
      </div>
    </div>
  );
}
