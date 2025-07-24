import React from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import DynamicIcon from "./DynamicIcon";

type Probs = {
  url: string;
  text: string;
  icon: string;
};

export default function PrimaryButton({ url, text, icon }: Probs) {
  return (
    <Link
      href={`/${url}`}
      className="text-white bg-blue-500 px-7 py-2 text-[17px] gap-x-4 font-medium rounded-md mt-5 flex flex-row items-center justify-center"
    >
      <DynamicIcon iconName={icon} />
      {text}
    </Link>
  );
}
