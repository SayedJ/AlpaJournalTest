import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { articles, researchers } from "@/lib/dummyData";

export default function ArticleCardWide() {
  const randomIndex = Math.floor(Math.random() * articles.length);
  const randomIndexAuthor = Math.floor(Math.random() * researchers.length);
  const randomNumber = Math.floor(Math.random() * 1000);

  const article = articles[randomIndex];
  const author = researchers[randomIndexAuthor];
  return (
    <div className="flex gap-y-2 flex-col flex-1 min-w-[350px] sm:min-w-[600px] rounded-md shadow bg-white items-center justify-between text-black p-7 hover:shadow-lg hover:scale-101 transition-all duration-300 cursor-pointer">
      <div className="flex flex-row justify-between items-center w-full mb-2">
        <Image
          src={author.photo}
          alt="Hero"
          height={60}
          width={60}
          className="rounded-full"
        />
        <div className="flex flex-col items-left justify-center mr-auto ml-5">
          <h3 className="text-[15px] h-5 font-medium text-gray-800">
            {author.name}{" "}
          </h3>
          <p className="text-sm text-gray-500 ">{author.title}</p>
          <p className="text-[12px] text-gray-500 ">{author.institution}</p>
        </div>
        <Link href={`/articles/${article.slug}`}>
          <FaArrowRight className="hover:scale-106 hover:drop-shadow text-blue-500" />
        </Link>
      </div>

      <h1 className="font-medium text-[18px] text-left w-full">
        {article.title}
      </h1>
      <p className="font-normal text-[15px] text-gray-600 line-clamp-2">
        {article.content}
      </p>
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-[12px] font-medium bg-blue-200 px-2 rounded-2xl text-blue-500">
          CS
        </p>
        <Image
          src={"/icons/download.png"}
          alt="download"
          width={18}
          height={18}
          className="ml-auto mr-2"
        />
        <p className="font-medium  text-gray-600 text-sm">{randomNumber} </p>
      </div>
    </div>
  );
}
