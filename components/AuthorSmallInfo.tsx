import React from "react";
import Image from "next/image";

type AuthorProps = {
  photoUrl: string;
  name: string;
  institution: string;
  title: string;
};

export default function AuthorSmallInfo({
  photoUrl,
  name,
  title,
  institution,
}: AuthorProps) {
  return (
    <div>
      <div className="flex flex-row justify-between items-center w-full">
        <Image
          src={photoUrl}
          alt="Hero"
          height={60}
          width={60}
          className="rounded-full"
        />
        <div className="flex flex-col items-left justify-start mr-auto ml-5">
          <h3 className="text-[17px] h-5 font-medium text-gray-800 mb-1">
            {name}
          </h3>
          <h6 className="text-gray-500 text-[15px]">
            {" "}
            {title} at {institution}
          </h6>
        </div>
      </div>
    </div>
  );
}
