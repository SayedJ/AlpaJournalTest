import Image from "next/image";
import React from "react";
import Link from "next/link";

function NavbarLoggedIn() {
  return (
    <nav className="flex flex-row bg-white w-full h-15 justify-between items-center px-35 ">
      <h1 className="text-blue-600 font-bold text-2xl ">Alpha Article</h1>

      <ul className="flex gap-13 mr-auto ml-12 text-[15px] font-medium text-gray-500">
        <li>
          <Link href="/" className="hover:text-gray-700 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/articles"
            className="hover:text-gray-700 transition-colors"
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            href="/categories"
            className="hover:text-gray-700 transition-colors"
          >
            Categories
          </Link>
        </li>
        <li>
          <Link
            href="/authors"
            className="hover:text-gray-700 transition-colors"
          >
            Authors
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-700 transition-colors">
            About
          </Link>
        </li>
      </ul>
      <input
        style={{
          backgroundImage: 'url("/icons/search.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 0.6rem center",
          backgroundSize: "1rem",
        }}
        className="border border-gray-300 text-gray-500 placeholder-gray-400 px-2 pl-9 py-2 rounded-md w-[280px] mr-5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:border"
        id="search-input"
        type="text"
        placeholder="Search articles..."
      />
      <div className="flex flex-row text-gray-700 gap-x-2 text-sm items-center justify-center">
        <Image
          src="/images/me.jpeg"
          alt="Hero"
          width={30}
          height={30}
          className="rounded-full"
        />
        <h2>Sarah Johnson</h2>
        <Image
          src={"/icons/down-arrow.png"}
          alt="arrow"
          width={18}
          height={18}
          className="opacity-50"
        />
      </div>
    </nav>
  );
}

export default NavbarLoggedIn;
