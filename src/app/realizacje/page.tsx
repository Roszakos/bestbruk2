"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";

interface RealizationsPageItemProps {
  title: string;
  description: string;
  children: ReactNode;
}

function RealizationsPageItem({
  title,
  description,
  children,
}: RealizationsPageItemProps) {
  return (
    <>
      <div className="px-4">
        <div className="pl-2 border-l-4 border-primary-green">
          <div className="text-lg sm:text-xl font-semibold">{title}</div>
          <div className="tracking-wide leading-5 text-sm sm:text-base">
            {description}
          </div>
        </div>
      </div>
      <div className="md:px-4">
        <div className="w-full pt-[60%] relative mt-3">{children}</div>
      </div>
    </>
  );
}

export default function RealizationsPage() {
  const [fullImageSrc, setFullImageSrc] = useState("");
  const [showFullImage, setShowFullImage] = useState(false);

  const images = [
    "/images/kleszczewo.jpeg",
    "/images/hero.jpg",
    "/images/kanalizacja.jpg",
  ];

  return (
    <>
      <div className="w-full h-[30vh] relative">
        <div className="w-full h-full absolute top-0 left-0 opacity-70 bg-gradient-to-b from-[#C5C5C5] to-[#015A8C] z-10"></div>
        <div className="w-full h-fit z-10 absolute bottom-8 left-0  ">
          <div className="w-full max-w-[1000px] m-auto text-white px-4">
            <div className="text-4xl sm:text-5xl font-bold border-l-[6px] border-primary-green pl-2 ">
              Nasze realizacje
            </div>
          </div>
        </div>
        <Image
          src="/bestbruk/images/sprzet.jpg"
          alt="Koparka CAT"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="mt-8 max-w-[1000px] m-auto pb-20">
        <div className="mt-3 px-4 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non
          dolores ipsa rem doloribus tempora incidunt magni aut. Ex dignissimos
          quo natus deleniti fugit corporis ipsa quis vero blanditiis. Eum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsa
          non, voluptates amet tenetur repellendus alias, quae reprehenderit
          dolorem ullam eligendi architecto quidem veniam hic debitis doloribus
          facere, dicta sapiente.
        </div>
        <div className="mt-10">
          <RealizationsPageItem
            title="Kleszczewo Park"
            description="10 000+ m2 kostki brukowej, 1000+ mb obrzeży"
          >
            <Image
              onClick={() => {
                setFullImageSrc("/images/kleszczewo.jpeg");
                setShowFullImage(true);
              }}
              id="xd"
              src="/bestbruk/images/kleszczewo.jpeg"
              alt="kleszczewo"
              objectFit="cover"
              fill
            />
          </RealizationsPageItem>
          <div className="mt-8"></div>
          <RealizationsPageItem
            title="Szkoła Podstawowa w Swarzędzu"
            description="10 000+ m2 kostki brukowej, 1000+ mb obrzeży"
          >
            <Image
              onClick={() => {
                setFullImageSrc("/images/swarzedz.jpg");
                setShowFullImage(true);
              }}
              id="xd"
              src="/bestbruk/images/swarzedz.jpeg"
              alt="kleszczewo"
              objectFit="cover"
              fill
            />
          </RealizationsPageItem>
        </div>
      </div>
    </>
  );
}
