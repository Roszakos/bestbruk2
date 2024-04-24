"use client";

import Image from "next/image";
import Link from "next/link";

import { FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";

import Button from "@/components/Button";

import { libre } from "../../app/fonts";

export default function Hero() {
  function scrollToServices() {
    const element = document.getElementById("services");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <div className="w-[100vw] h-[80vh] md:h-[100vh] relative max-w-full shadow-[0_35px_30px_10px_rgba(0,0,0,0.3)]">
        <div className="w-full h-full absolute top-0 left-0 opacity-70 bg-gradient-to-b from-[#C5C5C5] to-[#015A8C] z-10"></div>
        <div className="w-full h-full lg:px-14 px-4 sm:px-10 md:py-14 py-4 flex gap-6 max-w-[1200px] flex-col justify-end text-white absolute top-0 left-0 z-10">
          <div className={`${libre.variable} font-extrabold mb-4`}>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-[slideInFromLeft_600ms_ease-in-out] text-balance">
              Układamy kostkę brukową
            </div>
            <div className="lg:text-8xl text-5xl sm:text-6xl md:text-7xl mt-2 sm:mt-7 text-right animate-[slideInFromRight_900ms_ease-in-out] text-balance">
              od ponad 10 lat
            </div>
          </div>
          <div className="text-lg sm:text-xl md:text-2xl">
            Realizujemy małe powierzchnie - podjazdy, ścieżki, obejścia domu -
            jak i duże inwestycje, dla firm oraz deweloperów.
          </div>
          <div className="mt-1">
            <div className="hidden gap-4 mb-8 md:mb-20 items-center h-20 sm:flex">
              <Button color="#156F2E" handleClick={scrollToServices}>
                <span className={`${libre.variable}`}>Oferta</span>
                <FaArrowAltCircleDown />
              </Button>
              <Link href="/kontakt">
                <Button color="#F7F7F7" handleClick={scrollToServices}>
                  <span className={`${libre.variable} text-[#28B4D2]`}>
                    Kontakt
                  </span>
                  <FaArrowAltCircleRight color="#28B4D2" />
                </Button>
              </Link>
            </div>
            <div className="sm:hidden w-fit m-auto mb-6">
              <FaArrowAltCircleDown size="40" onClick={scrollToServices} />
            </div>
          </div>
        </div>
        <Image
          alt="Hero Image"
          src="/bestbruk/images/hero.jpg"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
}
