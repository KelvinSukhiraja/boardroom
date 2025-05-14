"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const pri = () => {
  const fadeLeft = {
    initial: {
      opacity: 0,
      x: "-10vw",
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2.5,
      },
    },
  };
  const fadeRight = {
    initial: {
      opacity: 0,
      x: "10vw",
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2.5,
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

        duration: 3,
      },
    },
  };
  return (
    <div className="bg-primary h-fit">
      <div className="flex flex-col items-center md:px-28 px-5 py-6 w-fit overflow-x-hidden">
        <div className="min-h-screen">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="p-3"
          >
            <Link href={"/"}>
              <img
                src={"/whitelogo.svg"}
                alt="logo"
                width={90}
                height={108}
                href={"/"}
              />
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex items-center gap-2 text-white my-4"
          >
            <Link href={"/our-team"}>
              <AiOutlineArrowLeft />
            </Link>
            <p className="text-xs font-bold">OUR TEAM &gt; Pri Notowidigdo</p>
          </motion.div>
          <div className="flex flex-col md:flex-row">
            <motion.div
              variants={fadeLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative w-72 h-96  md:w-96 md:h-[450px] self-center m-3 "
            >
              <img
                src={"/partnerA.png"}
                fill
                alt="profile"
                className="object-center object-cover w-full h-full"
              />
            </motion.div>
            <div className="text-white md:ml-28 flex flex-col justify-center">
              <motion.div
                variants={fadeRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <img
                  src={"/white-line.svg"}
                  width={300}
                  height={0}
                  alt="white line"
                  className="hidden md:flex"
                />
              </motion.div>
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="md:pl-20"
              >
                <h1 className="text-2xl font-semibold mb-4 mt-8">
                Pri Notowidigdo
                </h1>
                <p className="max-w-2xl overflow-y-autox text-xs">
                Field of Expertise: HR, Communication and Transformation Management
                  <br/><br/>
                </p>
                {/* <div className="flex text-xs gap-5 italic ">
                  <Link
                    href={"/our-team/peter/blog"}
                    className="text-center border-2 rounded-full p-2 hover:bg-white hover:text-primary"
                  >
                    Blogs-Speaking Engagements
                  </Link>
                  <Link
                    href={"/our-team/peter/downloadables"}
                    className="text-center border-2 rounded-full p-2 hover:bg-white hover:text-primary"
                  >
                    Downloadable Papers
                  </Link>
                </div> */}
                <div className="flex items-center my-4 gap-8">
                  <Link
                    href={"https://www.pri-for-people-matters.com/our-partners/pri-notowidigdo"}
                    className="border rounded-full p-2 brightness-75 hover:brightness-150"
                    target="_blank"
                  >
                    <BsGlobe2 size={20} />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/pri3notowidigdo/?originalSubdomain=id"
                    }
                    className="border rounded-full p-2 brightness-75 hover:brightness-150"
                    target="_blank"
                  >
                    <FaLinkedinIn size={20} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default pri;
