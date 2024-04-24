import Image from "next/image";
import React, { ReactNode } from "react";

interface ServicesPageItemProps {
  title: string;
  children: Array<ReactNode>;
}

function ServicesPageItem({ title, children }: ServicesPageItemProps) {
  return (
    <>
      <div className="border-l-4 border-primary-green bg-[#ebebeb] min-h-60 h-fit relative group overflow-hidden">
        <div className="w-full h-full absolute left-0 top-0">{children[1]}</div>
        <div className="font-bold absolute w-full h-full z-10 text-white">
          <div className="absolute z-20 px-4 py-10 text-xl sm:text-2xl group-hover:py-4 group-hover:text-lg sm:group-hover:text-xl transition-all duration-300">
            {title}
          </div>
          <div className="w-full h-full absolute left-[-100%] top-0 bg-primary-green-high-opacity group-hover:left-0 ease-in-out transition-all duration-300 z-10">
            <div className="text-white w-full h-full px-4 mt-14 text-sm sm:text-base font-normal">
              {children[0]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ServicesPage() {
  return (
    <>
      <div className="w-full h-[30vh] relative">
        <div className="w-full h-full absolute top-0 left-0 opacity-70 bg-gradient-to-b from-[#C5C5C5] to-[#015A8C] z-10"></div>
        <div className="w-full h-fit z-10 absolute bottom-8 left-0  ">
          <div className="w-full max-w-[1000px] m-auto text-white px-4">
            <div className="text-4xl sm:text-5xl font-bold border-l-[6px] border-primary-green pl-2 ">
              Nasza oferta
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
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 md:px-4">
          <ServicesPageItem title="Układanie kostki brukowej">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              hic esse impedit voluptate autem ducimus mollitia voluptatem
              delectus id, temporibus amet omnis! Quia repudiandae animi ad
              alias natus labore deleniti.
            </div>
            <div>
              <Image
                src="/bestbruk/images/ukladanie-kostki.jpg"
                alt="Układanie kostki brukowej"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            </div>
          </ServicesPageItem>
          <ServicesPageItem title="Usługi koparko-ładowarką">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              hic esse impedit voluptate autem ducimus mollitia voluptatem
              delectus id, temporibus amet omnis! Quia repudiandae animi ad
              alias natus labore deleniti.
            </div>
            <div>
              <Image
                src="/bestbruk/images/koparko-ladowarka.jpg"
                alt="Koparko ładowarka"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            </div>
          </ServicesPageItem>
          <ServicesPageItem title="Układanie obrzeży">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              hic esse impedit voluptate autem ducimus mollitia voluptatem
              delectus id, temporibus amet omnis! Quia repudiandae animi ad
              alias natus labore deleniti.
            </div>
            <div>
              <Image
                src="/bestbruk/images/ukladanie-obrzezy.webp"
                alt="Układanie obrzeży"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            </div>
          </ServicesPageItem>
          <ServicesPageItem title="Przygotowanie terenu">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              hic esse impedit voluptate autem ducimus mollitia voluptatem
              delectus id, temporibus amet omnis! Quia repudiandae animi ad
              alias natus labore deleniti.
            </div>
            <div>
              <Image
                src="/bestbruk/images/przygotowanie-terenu.jpg"
                alt="Układanie obrzeży"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            </div>
          </ServicesPageItem>
          <ServicesPageItem title="Zakładanie kanalizacji">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              hic esse impedit voluptate autem ducimus mollitia voluptatem
              delectus id, temporibus amet omnis! Quia repudiandae animi ad
              alias natus labore deleniti.
            </div>
            <div>
              <Image
                src="/bestbruk/images/kanalizacja.jpg"
                alt="Zakładanie kanalizacji"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            </div>
          </ServicesPageItem>
          <ServicesPageItem title="Wywóz ziemi">
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              hic esse impedit voluptate autem ducimus mollitia voluptatem
              delectus id, temporibus amet omnis! Quia repudiandae animi ad
              alias natus labore deleniti.
            </div>
            <div>
              <Image
                src="/bestbruk/images/wywoz-ziemi.webp"
                alt="Zakładanie kanalizacji"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            </div>
          </ServicesPageItem>
        </div>
      </div>
    </>
  );
}
