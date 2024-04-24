"use client";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface AboutUsItemProps {
  title: string;
  text: string;
  children: ReactNode;
}

export default function AboutUsItem({
  title,
  text,
  children,
}: AboutUsItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-90px 0px",
  });

  return (
    <>
      <div
        ref={ref}
        className={`rounded-lg bg-[#ebebeb] p-4 hover:scale-[1.1]  lg:mx-3 transition-all hover:shadow-[0_0_40px_-5px_rgba(21,111,46,0.7)]
        ${inView ? `animate-[scaleXAndY_500ms_ease-in-out]` : `scale-0`}`}
      >
        <div className="m-auto w-16 h-16">{children}</div>
        <div className="mt-4 text-center">
          <div className="text-lg md:text-xl font-bold tracking-wide">
            {title}
          </div>
          <div className="mt-3 md:text-lg tracking-wide">{text}</div>
        </div>
      </div>
    </>
  );
}
