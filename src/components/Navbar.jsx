import React, { useState } from "react";
import CanvasModel from "./3dLogo/CanvasModel";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../assets/airyyLogo.png";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const whatsappNumber = "8109475317"; 

  const handleRentNowClick = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.location.href = whatsappLink;
  };

  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <div id='Nav' className="">
      <header className="sticky snap-start z-[139] top-0 border-b border-transparent backdrop-blur-sm ">
        <div className="md:max-w-7xl mx-auto w-full max-w-5xl px-6">
          <div className="absolute left-0 top-0 z-20 flex w-full flex-col items-center bg-root md:hidden">
            <div className="flex w-full items-center px-6 py-4">
              <div className="flex-auto">
                <a
                  className="cursor-pointer outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7"
                  onClick={() => scrollToSection("Hero")}
                >
                  <img
                    className="w-24 bg-blend-color bg-no-repeat"
                    src={Logo}
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-auto dark:text-white justify-end">
                <button
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  aria-label="menu"
                  className="inline-flex items-center justify-center rounded-md p-1 text-slate-11 transition ease-in-out hover:bg-slate-5 hover:text-slate-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-6"
                  type="button"
                  onClick={() => setMobileMenu(!MobileMenu)}
                >
                  <span className="sr-only">Open main menu</span>
                  {!MobileMenu ? (
                    <svg
                      aria-hidden="true"
                      className="block h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      class="block h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {MobileMenu ? (
              <div
                className="flex bg-black h-screen  w-full px-6 py-4 md:hidden block"
                id="mobile-menu"
              >
                <div className="flex w-full flex-col">
                  <a
                    className="text-base h-11 pl-4 pr-4 rounded-md gap-2 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 mb-4 w-full"
                    onClick={{handleRentNowClick}}
                  >
                    Contact Now
                  </a>
                  <a
                    className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                    href="/about"
                  >
                    About
                  </a>

                  <a
                    className="text-md block w-full border-b border-slate-6 py-4 font-semibold text-slate-11 transition duration-200 ease-in-out last:border-none hover:text-slate-12"
                    href="/contact"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ) : null}
          </div>
          <div className="mx-auto hidden h-[58px] w-full items-center justify-between transition duration-500 ease-in-out md:flex">
            <div className="flex lg:w-[225px]">
              <span
                data-state="closed"
                className=""

                // style={"-webkit-touch-callout:none"}
              >
                <a
                  className="cursor-pointer outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 py-1"
                  aria-label="Resend"
                  onClick={() => scrollToSection("Hero")}
                >
                  <img
                    className="w-24 bg-blend-color bg-no-repeat"
                    src={Logo}
                    alt=""
                  />
                </a>
              </span>
            </div>
            <ul className="flex items-center gap-4">
              <li>
                <a
                  className="cursor-pointer dark:text-white outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                  onClick={() => scrollToSection("About")}
                >
                  About
                </a>
              </li>
  
              <li>
                <a
                  className="cursor-pointer dark:text-white outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                  onClick={() => scrollToSection("Services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer dark:text-white outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                  onClick={() => scrollToSection("Testimonials")}
                >
                  Testimonials
                </a>
              </li>
              <li
              >
                <a
                  className="cursor-pointer dark:text-white outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                  onClick={() => scrollToSection("Bikes")}
                >
                  Electric
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer dark:text-white outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-md px-1 py-1 text-sm font-medium text-slate-11 hover:text-slate-12 focus-visible:text-slate-12 lg:px-2"
                  onClick={() => scrollToSection("Contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div class="flex gap-4">
            
              <a
                class="outline-none  cursor-pointer focus-visible:ring-slate-7 text-sm h-10 pl-4 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
                data-state="closed"
                
              >
                Contact Now
                <span class="text-[#70757E]">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
