"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { LuMenu } from "react-icons/lu";

export default function Navbar() {
  const TOP_OFFSET = 50;
  const [isScrollOnTop, setIsScrollOnTop] = useState(true);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setIsScrollOnTop(false);
      } else {
        setIsScrollOnTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu((previousValue) => !previousValue);
  };

  return (
    <>
      <div className="fixed top-0 text-white w-full z-30">
        <div
          className={`w-full z-40 animate transition-all duration-200 relative
          ${
            isScrollOnTop
              ? `bg-primary-green-opacity h-16`
              : `bg-primary-green h-14`
          } `}
        >
          <div className="flex justify-between items-center h-full pl-5">
            <Link href="/">
              <div
                className={`${
                  isScrollOnTop ? `text-2xl` : `text-xl`
                } transition-all`}
              >
                Best - Bruk
              </div>
            </Link>
            <div className="pr-5">
              <LuMenu className="sm:hidden" size="26" onClick={toggleMenu} />
            </div>

            <div className="items-center hidden sm:flex">
              <Link href="/oferta">
                <div
                  className={`${
                    isScrollOnTop
                      ? `text-xl hover:text-2xl`
                      : `text-lg hover:text-xl`
                  } transition-all px-4 border-l border-white`}
                >
                  Oferta
                </div>
              </Link>
              <Link href="/realizacje">
                <div
                  className={`${
                    isScrollOnTop
                      ? `text-xl hover:text-2xl`
                      : `text-lg hover:text-xl`
                  } transition-all px-4 border-l border-white`}
                >
                  Realizacje
                </div>
              </Link>
              <Link href="/kontakt">
                <div
                  className={`${
                    isScrollOnTop
                      ? `text-xl hover:text-2xl`
                      : `text-lg hover:text-xl`
                  } transition-all px-4 border-l border-white`}
                >
                  Kontakt
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden mt-[-1px]">
          <div
            className={`w-full gap-3 py-4 relative z-0 text-sm uppercase pointer-events-none flex flex-col bg-primary-green transition-all duration-500
              ${
                showMenu
                  ? `translate-y-0 opacity-1 pointer-events-auto`
                  : `translate-y-[-100%] opacity-0 pointer-events-none`
              }
            `}
          >
            <Link href="/oferta">
              <div
                className={`${
                  isScrollOnTop
                    ? `text-base hover:text-lg`
                    : `text-sm hover:text-base`
                } transition-all px-4 border-white`}
              >
                Oferta
              </div>
            </Link>
            <Link href="/realizacje">
              <div
                className={`${
                  isScrollOnTop
                    ? `text-base hover:text-lg`
                    : `text-sm hover:text-base`
                } transition-all px-4 border-white`}
              >
                Realizacje
              </div>
            </Link>
            <Link href="/kontakt">
              <div
                className={`${
                  isScrollOnTop
                    ? `text-base hover:text-lg`
                    : `text-sm hover:text-base`
                } transition-all px-4 border-white`}
              >
                Kontakt
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
