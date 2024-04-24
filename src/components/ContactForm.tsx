import React from "react";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  return (
    <>
      <div className="w-full px-4 md:px-0">
        <div className="text-lg md:text-xl font-medium">Napisz do nas</div>
        <form className="mt-4" action="#" method="post">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="text"
              placeholder=""
              className="peer h-full w-full border-b border-[#959596] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary-green focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary-green after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary-green peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Imię
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px] mt-4">
            <input
              type="email"
              placeholder=""
              className="peer h-full w-full border-b border-[#959596] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary-green focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary-green after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary-green peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px] mt-4">
            <input
              type="tel"
              pattern="[0-9]{9}"
              placeholder=""
              className="peer h-full w-full border-b border-[#959596] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary-green focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary-green after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary-green peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Telefon kontaktowy
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px] mt-4">
            <input
              type="text"
              placeholder=""
              className="peer h-full w-full border-b border-[#959596] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary-green focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary-green after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary-green peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Temat
            </label>
          </div>
          <div className="relative w-full min-w-[200px] mt-4">
            <textarea
              className="peer h-full min-h-[100px] w-full resize-none border-b border-[#959596] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary-green focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=""
            ></textarea>
            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary-green after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary-green peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Treść
            </label>
          </div>
          <div className="flex justify-end mt-2">
            <button
              className="select-none flex gap-1 items-center rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Wyślij
              <FiSend />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
