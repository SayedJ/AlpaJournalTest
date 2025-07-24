import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidFilePdf } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";

export default function AuthorCard() {
  return (
    <div className="flex flex-1 gap-y-4 flex-col w-sm rounded-md shadow bg-white items-center justify-between text-black p-7 hover:shadow-lg hover:scale-101 transition-all duration-300 cursor-pointer">
      <div className="flex flex-col justify-center items-center w-full gap-y-4">
        <Image
          src={"/images/me.jpeg"}
          alt="Hero"
          height={80}
          width={80}
          className="rounded-full"
        />
        <div className="flex flex-col items-center justify-center gap-y-1">
          <h3 className="text-[18px] h-5 font-medium text-gray-800 ">
            Dr. Michael Zhang
          </h3>
          <p className="text-[0.95rem] text-gray-900 ">Associate Professor</p>
          <p className="text-sm text-gray-500 ">Stanford University</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around w-max gap-x-1">
        <BiSolidFilePdf color="grey" />
        <p className="font-medium  text-gray-500 text-sm mr-3">34 Articles</p>

        <FaDownload color="grey" />

        <p className="font-medium  text-gray-500 text-sm">1,247 Downlaods</p>
      </div>
      <p className="font-normal text-[15px] text-gray-600 text-center">
        Research focus on biotechnology, genetics, and molecular biology.
      </p>
      <Link
        href={"/author/1"}
        className="text-white w-full rounded-md text-[17px] bg-blue-500 text-center font-medium py-2"
      >
        View Profile
      </Link>
    </div>
  );
}
