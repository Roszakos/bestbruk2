"use client";
import Image from "next/image";
import Link from "next/link";

import { useInView } from "react-intersection-observer";

// My Components
import SectionTitle from "../SectionTitle";
import ServiceItem from "./ServiceItem";

// Icons
import { BsBricks } from "react-icons/bs";
import { PiTruck } from "react-icons/pi";
import { MdRoundedCorner } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  return (
    <>
      <div id="services" className="py-24">
        <SectionTitle text="Nasze usługi" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-20 items-center mt-14 max-w-[1000px] m-auto md:px-6">
          <ServiceItem text="Układanie kostki brukowej">
            <BsBricks size="fill" />
          </ServiceItem>
          <ServiceItem text="Usługi koparko-ładowarką">
            <Image src="/bestbruk/icons/excavator.png" alt="excavator" fill />
          </ServiceItem>
          <ServiceItem text="Układanie obrzeży">
            <MdRoundedCorner size="fill" />
          </ServiceItem>
          <ServiceItem text="Przygotowanie terenu">
            <Image src="/bestbruk/icons/shovel.png" alt="pipe" fill />
          </ServiceItem>
          <ServiceItem text="Zakładanie kanalizacji">
            <Image src="/bestbruk/icons/pipe.png" alt="pipe" fill />
          </ServiceItem>
          <ServiceItem text="Wywóz ziemi">
            <PiTruck size="fill" />
          </ServiceItem>
        </div>
        <div
          ref={ref}
          className={`text-2xl font-medium text-center mt-10 transition-all duration-500 ${
            inView ? `opacity-100 scale-1` : `opacity-0 scale-0`
          }`}
        >
          I wiele więcej...
          <Link href="/oferta">
            <div
              className="w-fit items-center shadow-2xl cursor-pointer hover:scale-[1.1] transition-all flex gap-2 m-auto mt-4 px-4 py-2 text-base md:text-lg 
              text-white uppercase tracking-wide rounded bg-primary-green"
            >
              Pełna oferta
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
