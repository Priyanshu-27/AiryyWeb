import React from "react";
import FooterImg from "../assets/FooterImg6.png";
import Zoom from "react-reveal/Zoom";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import Logo from "../assets/airyyLogo.png";
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <>
      {/* Existing footer content */}

      <div
        id="Footer"
        className="w-full   pb-20  h-3/4 xs:h-full xs:mb-20 "
      >
        <div className="md:flex-row sm:flex-col ss:flex-col xs:flex-col flex  items-center justify-around px-14">
          <div className="xs:flex xs:flex-col ml-20 xs:ml-40 ">
            <div className="flex-auto xs:w-screen xs:justify-start  xs:items-center ">
              <a
                className="cursor-pointer outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7"
                onClick={() => scrollToSection("Nav")}
              >
                <img
                  className="w-44 bg-blend-color   bg-no-repeat"
                  src={Logo}
                  alt=""
                />
              </a>
            </div>
            <div className="xs:mr-10 xs:w-screen xs:flex xs:justify-start xs:items-center">
            <h2 className="dark:text-gray-300 ml-6 font-poppins mt-1  xs:mb-20  xs:text-[18px] text-[20px] font-medium">
              Rent it now!
            </h2>
            <p className="dark:text-gray-300  ml-6 ss:text-[20px] ss:text-center  font-poppins mt-1 xs:hidden xs:text-[18px] text-[25px]">
              Explore the city with ease. Rent a bike today!
            </p>
            </div>
          </div>
          <Zoom bottom>
            <img
              src={FooterImg}
              alt="Footer Img"
              className="rounded-2xl xs:hidden xs:items-center xs:justify-center ml-80 "
              height={300}
              width={450}
            />
          </Zoom>
        </div>

        <div className="flex flex-row  xs:flex-col  ss:ml-0 ss:px-4 xs:px-8 xs:py-3 justify-around items-center ml-4 py-6">
          {/* Contact information */}
          <div className="flex flex-col dark:text-white">
            <h1 className="font-bold font-poppins pb-2 ss:text-[18px] xs:text-[18px] text-[25px] border-yellow-200">
              Contact US
            </h1>
            <ul>
              <li className="dark:text-white">
                <PhoneInTalkOutlinedIcon className="text-yellow-400" />{" "}
                9826977757
              </li>
              <li className="dark:text-white">
                <AttachEmailOutlinedIcon className="text-yellow-400" />{" "}
                airyyrides@gmail.com
              </li>
              <li className="dark:text-white">
                <PlaceOutlinedIcon className="text-yellow-400" /> 160/4,
                Bholaram Ustad Marg, Indrapuri Colony, Bhanwar Kuwa, Indore,
                Madhya Pradesh 452001
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="dark:text-white xs:hidden ss:hidden">
            <h1 className="font-bold font-poppins pb-2 ss:text-[14px] xs:text-[25px] text-[25px]">
              Useful Links
            </h1>
            <ul>
              <li className="hover:underline cursor-pointer xs:text-[13px]">
                FAQ
              </li>
              <li className="hover:underline cursor-pointer xs:text-[13px]">
                Terms and Conditions
              </li>
              <li className="hover:underline pb-2 cursor-pointer xs:text-[13px]">
                Fee Policy
              </li>
            </ul>
          </div>

          {/* Social Links for larger screens */}
        </div>

        {/* Useful Links for smaller screens with image */}
        <div className="flex flex-col snap-center sm:hidden">
          <div className="dark:text-white flex flex-col w-screen ml-[2.8rem] mt-10 justify-start">
            <h1 className="font-bold font-poppins pb-4 ss:text-[14px] xs:text-[20px] text-[25px]">
              Useful Links
            </h1>
            <ul>
              <li className="hover:underline cursor-pointer xs:text-[13px]">
                FAQ
              </li>
              <li className="hover:underline cursor-pointer xs:text-[13px]">
                Terms and Conditions
              </li>
              <li className="hover:underline cursor-pointer xs:text-[13px]">
                Fee Policy
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dynamic date and website URL */}
      <div className="w-screen snap-start justify-between flex xs:hidden ss:hidden px-44 text-white">
        <p>&copy; {currentYear} airyyrides.com</p>
        {/* Social Links for larger screens */}
        <div className="flex xs:hidden ss:hidden dark:text-white flex-row gap-4 h-[5rem] ">
          <CiFacebook size={28} />
          <RiTwitterXLine className="cursor-pointer mt-[0.06rem]" size={28} />
          <FaInstagram className="cursor-pointer mt-[0.06rem]" size={28} />
        </div>
      </div>
    </>
  );
}

export default Footer;
