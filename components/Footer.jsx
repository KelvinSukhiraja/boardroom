import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:p-20 text-primary">
      <div className="flex justify-around mt-10">
        <div className="flex flex-col w-2/5 md:w-1/5 ">
          <Link
            href={"/contact-us"}
            className="font-bold text-xs md:text-sm hover:underline underline-offset-4"
          >
            GET IN TOUCH
          </Link>
          <div className="flex justify-between my-4 text-white">
            <Link
              href={""}
              className="rounded-full p-2 bg-primary hover:brightness-200"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href={""}
              className="rounded-full p-2 bg-primary hover:brightness-200"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              href={""}
              className="rounded-full p-2 bg-primary hover:brightness-200"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:w-1/2">
          <ul className="font-medium text-xs hidden md:flex items-center">
            <div className=" w-1/4">
              <Link href={"/about-us"} className="hover:font-bold ">
                ABOUT US
              </Link>
            </div>
            <div className=" w-1/4">
              <Link href={"/our-team"} className="hover:font-bold">
                OUR TEAM
              </Link>
            </div>
            <div className=" w-1/4">
              <Link href={"/services"} className="hover:font-bold">
                SERVICES
              </Link>
            </div>
            <div className=" w-1/4">
              <Link href={"/contact-us"} className="hover:font-bold">
                CONTACT US
              </Link>
            </div>
          </ul>

          <div className="">
            <h1 className="font-bold text-xs md:text-sm md:my-4">OUR OFFICE</h1>
            <p className="font-normal text-xs md:text-sm">
              The Boardroom Partnership <br />
              Simpruk Golf XII Kav 3A, 12310 <br />
              Jakarta Selatan, Indonesia
            </p>
          </div>
        </div>
      </div>
      <Link href={""} className="self-end m-4 md:my-8">
        <Image src={"/arrow.svg"} width={30} height={10} />
      </Link>

      <div className="flex flex-col items-center border-t-2 border-primary font-normal text-xs md:text-sm text-[#707070] p-5 md:py-8">
        The Boardroom Partnership @2022 in collaboration with Verhezen.Net. All
        rights reserved
      </div>
    </div>
  );
};

export default Footer;
