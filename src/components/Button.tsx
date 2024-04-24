"use client";

import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  color: string;
  children: ReactNode;
  handleClick: MouseEventHandler;
}

export default function Button({ color, children, handleClick }: ButtonProps) {
  return (
    <>
      <div
        className="flex gap-2 cursor-pointer text-2xl py-4 px-6 w-fit items-center rounded tracking-wide shadow-3xl hover:py-5 hover:px-7 transition-all"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        {children}
      </div>
    </>
  );
}
