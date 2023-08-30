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
              href={"https://twitter.com/peterverhezen"}
              className="rounded-full p-2 bg-primary hover:brightness-200 flex items-center"
              target="_blank"
            >
              {/* <FaFacebookF size={20} /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 0 512 512"
                className="fill-white"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/peter-verhezen-a6b7a03/"}
              className="rounded-full p-2 bg-primary hover:brightness-200"
              target="_blank"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              href={"https://www.instagram.com/verhezenp/"}
              className="rounded-full p-2 bg-primary hover:brightness-200"
              target="_blank"
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
