import SectionTitle from "../SectionTitle";

// Icons
import { FaPhoneSquare } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

// My Components
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="bg-[#F9F9F9] mt-20 py-20 md:px-8">
        <SectionTitle text="Kontakt" />
        <div className="mt-10 flex md:flex-row flex-col items-stretch gap-6 max-w-[1000px] m-auto">
          {/* Contact form */}
          <ContactForm />
          {/* Contact info */}

          <div className="min-w-fit flex flex-col">
            <div className="text-left text-lg md:text-xl font-medium px-4 md:px-0">
              Dane kontaktowe
            </div>
            <div className="bg-[#ededed] md:rounded-xl mt-4 md:min-w-fit grow p-6">
              <div className="flex flex-col sm:max-md:flex-row items-stretch justify-around gap-4 sm:gap-0 w-full m-auto h-full">
                <div className="flex flex-col gap-3 md:gap-1 items-center text-primary-green md:text-lg">
                  <FaPhoneSquare size="24" />
                  <div className="text-sm sm:text-base uppercase text-black font-semibold">
                    Telefon
                  </div>
                  +48 535 809 222
                </div>
                <div className="self-stretch sm:max-md:border-r-2 sm:max-md:border-b-0 border-b-2 border-black"></div>
                <div className="flex flex-col gap-3 md:gap-1 items-center text-primary-green md:text-lg">
                  <IoMailSharp size="24" />
                  <div className="text-sm sm:text-base uppercase text-black font-semibold">
                    Email
                  </div>
                  best-bruk@best-bruk.pl
                </div>
                <div className="self-stretch sm:max-md:border-r-2 sm:max-md:border-b-0 border-b-2 border-black"></div>
                <div className="flex flex-col gap-3 md:gap-1 items-center text-primary-green md:text-lg">
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
        <div className="mt-6 max-w-[1000px] m-auto">
          <div className="w-full relative overflow-hidden pt-[30%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d517.327409682863!2d17.24360192679025!3d51.91867133396017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470510cc0e3710f9%3A0x22c80295d4ddbeff!2sBest-Bruk!5e0!3m2!1spl!2spl!4v1713611771934!5m2!1spl!2spl"
              allowFullScreen
              className="inset-0 absolute w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-10 md:text-lg font-medium p-4 bg-[#ededed] md:rounded-lg">
            Pracujemy w Poznaniu i okolicach. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quasi inventore adipisci sequi
            tenetur.
          </div>
        </div>
      </div>
    </>
  );
}
