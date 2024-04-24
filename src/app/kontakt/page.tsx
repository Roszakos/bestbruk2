import React from "react";
import Image from "next/image";

// My Components
import ContactForm from "@/components/ContactForm";
import { FaPhoneSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

export default function ContactPage() {
  return (
    <>
      <div className="w-full h-[30vh] relative">
        <div className="w-full h-full absolute top-0 left-0 opacity-70 bg-gradient-to-b from-[#C5C5C5] to-[#015A8C] z-10"></div>
        <div className="w-full h-fit z-10 absolute bottom-8 left-0  ">
          <div className="w-full max-w-[1000px] m-auto text-white px-4">
            <div className="text-4xl sm:text-5xl font-bold border-l-[6px] border-primary-green pl-2 ">
              Kontakt
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
      <div className="pb-20 max-w-[1000px] m-auto">
        {/* <div className="mt-10 px-4 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non
          dolores ipsa rem doloribus tempora incidunt magni aut. Ex dignissimos
          quo natus deleniti fugit corporis ipsa quis vero blanditiis. Eum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsa
          non, voluptates amet tenetur repellendus alias, quae reprehenderit
          dolorem ullam eligendi architecto quidem veniam hic debitis doloribus
          facere, dicta sapiente.
        </div> */}
        <div className="px-4 mt-6">
          <ContactForm />
        </div>
        <div className="text-left text-lg md:text-xl font-medium px-4 mt-4">
          Dane kontaktowe
        </div>
        <div className="md:px-4">
          <div className="bg-[#ededed] md:rounded-xl mt-4 md:min-w-fit grow p-6">
            <div className="flex flex-col sm:flex-row items-stretch justify-around gap-4 sm:gap-0 w-full m-auto h-full">
              <div className="flex flex-col gap-3 items-center text-primary-green text-sm md:text-base">
                <FaPhoneSquare size="24" />
                <div className="text-sm sm:text-base uppercase text-black font-semibold">
                  Telefon
                </div>
                +48 535 809 222
              </div>
              <div className="self-stretch sm:border-r sm:border-b-0 border-b border-black"></div>
              <div className="flex flex-col gap-3 items-center text-primary-green text-sm md:text-base">
                <IoMailSharp size="24" />
                <div className="text-sm sm:text-base uppercase text-black font-semibold">
                  Email
                </div>
                best-bruk@best-bruk.pl
              </div>
              <div className="self-stretch sm:border-r sm:border-b-0 border-b border-black"></div>
              <div className="flex flex-col gap-3 items-center text-primary-green text-sm md:text-base">
                <FaLocationDot size="24" />
                <div className="text-sm sm:text-base uppercase text-black font-semibold">
                  Adres
                </div>
                63-810 Borek Wielkopolski <br />
                ul. Juliusza Słowackiego 19
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
