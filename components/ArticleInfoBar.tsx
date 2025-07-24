import React from "react";
import { GoDotFill } from "react-icons/go";
import AuthorSmallInfo from "./AuthorSmallInfo";
import { researchers } from "@/lib/dummyData";
import { FaDownload } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";

const now = new Date();

type Article = {
  title: string;
  content: string;
  slug: string;
  short: string;
};
type ArticleInfoBarProps = {
  article: Article;
  authorName: string;
};
type Author = {
  name: string;
  title: string;
  photo: string;
  institution: string;
};

export default function ArticleInfoBar({
  article,
  authorName,
}: ArticleInfoBarProps) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formmatedDate = now.toLocaleDateString("en-GB", options);

  const author: Author = researchers.find((e) => e.name === authorName) ?? {
    name: "Jali Hussaini",
    title: "Researcher",
    institution: "Goa University",
    photo: "/default.png",
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center py-5 px-5 bg-white w-full rounded-md">
      <p className="text-gray-600 flex flex-row gap-5 items-center justify- w-full">
        Computer Science <GoDotFill color="grey" /> {formmatedDate}{" "}
        <GoDotFill color="grey" /> 12 min read
      </p>
      <h1 className="w-full text-4xl text-black font-semibold text-left">
        {article.title}
      </h1>
      <div className="flex flex-row gap-x-6 w-full justify-end items-center">
        <AuthorSmallInfo
          photoUrl={author?.photo}
          name={author?.name}
          title={author?.title}
          institution={author?.institution}
        />
        <div className="flex flex-row ml-auto items-center justify-center mt-5">
          <FaDownload color="grey" />
          <p className="font-medium  text-gray-500 text-[15px] ">
            1,247 Downlaods
          </p>
        </div>

        <PrimaryButton url="/" text="Download PDF" icon="FaDownload" />
      </div>
    </div>
  );
}
