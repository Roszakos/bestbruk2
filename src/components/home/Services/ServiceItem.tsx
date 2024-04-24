"use client";
import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface ServiceItemProps {
  text: string;
  children: ReactNode;
}

export default function ServiceItem({ text, children }: ServiceItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  return (
    <>
      <div
        ref={ref}
        className={`text-center w-fit group justify-self-center transition-all duration-500 ${
          inView ? `scale-1 opacity-100` : `scale-0 opacity-0`
        }`}
      >
        <div className="m-auto w-[70px] h-[70px] ease-in-out relative group-hover:rotate-[360deg] transition-all duration-500">
          {children}
        </div>
        <div className="text-xl mt-5">{text}</div>
      </div>
    </>
  );
}
