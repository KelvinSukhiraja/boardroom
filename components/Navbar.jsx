"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navbar = () => {
  const segment = usePathname();
  const change = "/about-us" === segment;
  const ourteamsub =
    "/our-team/peter" === segment ||
    "/our-team/peter/blog" === segment ||
    "/our-team/peter/downloadables" === segment ||
    "/our-team/tanri" === segment ||
    "/our-team/ian" === segment ||
    "/our-team/luc" === segment ||
    "/our-team/pri" === segment||
    "/our-team/danny" === segment||
    "/our-team/natalia" === segment

  const fadeTop = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.4,
      },
    },
  };
  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",

        duration: 1,
      },
    },
  };
  const turn = {
    initial: {
      opacity: 0,
      rotate: -100,
    },
    animate: {
      rotate: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  if (ourteamsub) {
  } else {
    return (
      <motion.header
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={change ? "text-black" : "text-white"}
      >
        <div className="flex flex-col md:flex-row md:px-28 md:my-6 w-full absolute z-10 ">
          <div className="flex w-full justify-between">
            <Link href={"/"} onClick={() => setIsOpen(false)}>
              <Image
                src={change ? "/Logo.png" : "/whitelogo.svg"}
                alt="logo"
                width={90}
                height={108}
                className={`p-5 md:p-0 ${isOpen ? "fixed z-50" : ""}`}
              />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex end-0 p-3 fixed z-50"
            >
              <AiOutlineMenu
                size={35}
                className={`m-3 ${isOpen ? "hidden" : "flex"}`}
              />
              <AiOutlineClose
                size={35}
                className={`m-3 ${isOpen ? "flex" : "hidden"}`}
              />
            </button>
          </div>
          <motion.ul
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            className={`font-medium p-5 pb-14 md:p-0 top-0 h-screen md:h-fit w-full justify-center items-center text-lg  md:text-xs backdrop-blur-3xl md:backdrop-blur-none flex flex-col md:flex-row ${
              !isOpen ? "hidden md:flex" : "fixed md:relative"
            }`}
          >
            <div className="md:w-1/4 my-5 flex md:justify-end">
              <Link
                href={"/about-us"}
                onClick={() => setIsOpen(false)}
                className={`hover:font-bold ${
                  segment == "/about-us"
                    ? "font-bold underline underline-offset-8 cursor-default "
                    : ""
                }`}
              >
                ABOUT US
              </Link>
            </div>
            <div className="md:w-1/4 my-5 flex md:justify-end">
              <Link
                onClick={() => setIsOpen(false)}
                href={"/our-team"}
                className={`hover:font-bold ${
                  segment == "/our-team"
                    ? "font-bold underline underline-offset-8 cursor-default "
                    : ""
                }`}
              >
                OUR TEAM
              </Link>
            </div>
            <div className="md:w-1/4 my-5 flex md:justify-end">
              <Link
                onClick={() => setIsOpen(false)}
                href={"/services"}
                className={`hover:font-bold ${
                  segment == "/services"
                    ? "font-bold underline underline-offset-8 cursor-default "
                    : ""
                }`}
              >
                SERVICES
              </Link>
            </div>
            <div className="md:w-1/4 my-5 flex md:justify-end">
              <Link
                onClick={() => setIsOpen(false)}
                href={"/contact-us"}
                className={`hover:font-bold ${
                  segment == "/contact-us"
                    ? "font-bold underline underline-offset-8 cursor-default "
                    : ""
                }`}
              >
                CONTACT US
              </Link>
            </div>
          </motion.ul>
        </div>
      </motion.header>
    );
  }
};

export default navbar;
