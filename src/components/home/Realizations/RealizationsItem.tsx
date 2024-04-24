import { ReactNode } from "react";
import Link from "next/link";

import { libre } from "../../../app/fonts";

import { FaArrowRight } from "react-icons/fa6";

interface RealizationsItemProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function RealziationsItem({
  title,
  description,
  children,
}: RealizationsItemProps) {
  return (
    <>
      <div className="border-l-4 border-primary-green pl-2 mt-10">
        <div
          className={`${libre.variable} font-semibold text-lg md:text-xl tracking-wide`}
        >
          {title}
        </div>
        <div className="tracking-wide leading-5 max-md:text-sm">
          {description}
        </div>
      </div>
      <div className="w-full pt-[60%] relative mt-3">{children}</div>
      <Link href="/realizacje">
        <div className="flex cursor-pointer justify-end items-center gap-1 mt-2 text-[#1d2ab5]">
          Więcej zdjęć
        </div>
      </Link>
    </>
  );
}
