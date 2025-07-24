"use client"; // <-- this tells Next.js this is a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Breadcrumbs() {
  const pathname = usePathname(); // new hook instead of useRouter()
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div
      aria-label="Breadcrumb"
      className="text-sm text-gray-600 h-11 flex w-full items-center justify-start pl-35 bg-white font-normal border-t border-b border-gray-200"
    >
      <ol className="list-reset flex space-x-2">
        <li>
          <Image
            src={"/icons/home.png"}
            width={18}
            height={18}
            alt="home"
            className="opacity-30"
          />
        </li>
        <li>
          <Link href="/">
            <span className="hover:underline cursor-pointer">Home</span>
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const name =
            segment.charAt(0).toUpperCase() +
            segment.slice(1).replace(/-/g, " ");
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="flex items-center">
              <Image
                src={"/icons/chevron.png"}
                alt="chevron"
                height={18}
                width={18}
                className="opacity-50  mr-1"
              />
              {isLast ? (
                <span aria-current="page" className="font-semibold">
                  {name}
                </span>
              ) : (
                <Link href={href}>
                  <span className="hover:underline cursor-pointer">{name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
