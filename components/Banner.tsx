import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <div className=" h-90 bg-blue-700 flex flex-col  justify-center gap-y-8 px-10 mx-auto">
      <h1 className="font-extrabold text-5xl w-[50%]">
        Discver Knowledge, Share Research
      </h1>
      <h3 className="font-medium text-xl w-[60%]">
        Access thousands of academic articles from researchers worldwide. Share
        your work and collaborate with the global academic community.
      </h3>
      <div className="flex flex-row items-center justify-start gap-x-9 ">
        <Link
          href="/articles"
          className="flex flex-row items-center justify-center gap-x-3 bg-white px-7 py-3 rounded-[10px] text-blue-500 font-medium text-[17px]"
        >
          <Image
            src={"/icons/search.png"}
            width={18}
            height={18}
            className="text-blue-500"
            alt="search"
          />
          Browse Articles
        </Link>
        <Link
          href="/upload"
          className="flex flex-row items-center justify-center gap-x-3 border rounded-[10px] px-7 py-3 font-medium text-[17px]"
        >
          <Image
            src={"/icons/upload.png"}
            width={18}
            height={18}
            alt="upload"
            style={{
              filter: "invert(100%)",
            }}
          />
          Upload Research
        </Link>
      </div>
    </div>
  );
}
